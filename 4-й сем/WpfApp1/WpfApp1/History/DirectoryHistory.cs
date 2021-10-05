using System;
using System.Collections;
using System.Collections.Generic;

namespace WpfApp1
{
    internal class DirectoryHistory : IDirectoryHistory
    {
        private DirectoryNode _head;

        public event EventHandler HistoryChanged;

        public DirectoryNode Current { get; private set; }

        public bool CanMoveBack => Current.PrevNode != null;

        public bool CanMoveForward => Current.NextNode != null;

        public DirectoryHistory(string directoryPath, string directoryPathName)
        {
            _head = new DirectoryNode(directoryPath, directoryPathName);
            Current = _head;
        }

        public void Add(string filePath, string name)
        {
            var node = new DirectoryNode(filePath, name);
            Current.NextNode = node;
            node.PrevNode = Current;
            Current = node;
            RaiseHistoryChanged();
        }

        public IEnumerator<DirectoryNode> GetEnumerator()
        {
            yield return Current;
        }

        public void MoveBack()
        {
            var prev = Current.PrevNode;
            Current = prev;
            RaiseHistoryChanged();
        }

        public void MoveForward()
        {
            var next = Current.NextNode;
            Current = next;
            RaiseHistoryChanged();
        }
        private void RaiseHistoryChanged() => HistoryChanged?.Invoke(this, EventArgs.Empty);

        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
        
    }
}
