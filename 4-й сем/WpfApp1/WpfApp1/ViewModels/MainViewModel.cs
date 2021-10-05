using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using System.Runtime.CompilerServices;
using System.Collections.ObjectModel;
using System.IO;
using System.Windows.Input;
using System.Windows;

namespace WpfApp1
{
    internal class MainViewModel :BaseViewModel
    {
        public DelegateCommand AddTabItemCommand { get; }
        public DelegateCommand CloseCommand { get; }


        public ObservableCollection<DirectoryTabItemViewModel> DirectoryTabItems { get; set; } = new ObservableCollection<DirectoryTabItemViewModel>();
        public DirectoryTabItemViewModel CurrentDirectoryTabItem { get; set; }
        public MainViewModel()
        {
            AddTabItemCommand = new DelegateCommand(OnAddTabItem);
            CloseCommand = new DelegateCommand(OnClose);

            AddTabItemViewModel();
        }
        private void AddTabItemViewModel()
        {
            var vm = new DirectoryTabItemViewModel();
            DirectoryTabItems.Add(vm);
            CurrentDirectoryTabItem = vm;
        }
        private void OnAddTabItem(object obj)
        {
            AddTabItemViewModel();
        }
        private void OnClose(object obj)
        {
            if(obj is DirectoryTabItemViewModel directoryTabItemViewModel)
            {
                CloseTab(directoryTabItemViewModel);
            }
        }
        private void CloseTab(DirectoryTabItemViewModel directoryTabItemViewModel)
        {
            if (DirectoryTabItems.Count > 1)
            {
                DirectoryTabItems.Remove(directoryTabItemViewModel);
                CurrentDirectoryTabItem = DirectoryTabItems[0];
            }
        }
    }
}
