using System;
using System.Collections.Generic;
using System.Text;

namespace WpfApp1
{
    internal interface IDirectoryHistory:IEnumerable<DirectoryNode>
    {
        bool CanMoveBack { get; }
        bool CanMoveForward { get; }
        event EventHandler HistoryChanged;
        DirectoryNode Current { get;}
        void MoveBack();
        void MoveForward();
        void Add(string filePath, string name);
    }

    internal class DirectoryNode
    {
        public DirectoryNode PrevNode { get; set; }
        public DirectoryNode NextNode { get; set; }
        public string DirectoryPath { get; }
        public string DirectoryPathName { get; }
        public DirectoryNode(string directoryPath, string directoryPathName)
        {
            DirectoryPath = directoryPath;
            DirectoryPathName = directoryPathName;
        }  
    }
}
