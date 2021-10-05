using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Windows;
using GongSolutions.Wpf.DragDrop;
using Microsoft.VisualBasic.FileIO;
using System.IO;

namespace WpfApp1
{
    public partial class App : Application
    {

    }
    public class DragDrop : IDropTarget
    {
        private static IDropTarget _instance;
        public static IDropTarget Instance => _instance ??= new DragDrop();
        public void DragOver(IDropInfo dropInfo)
        {
            if(dropInfo.TargetCollection is ObservableCollection<FileEntityViewModel> targetCollection &
                ((MainViewModel)Application.Current.MainWindow.DataContext).CurrentDirectoryTabItem.Name!="Мой компьютер")
            {
                if(dropInfo.Data is FileEntityViewModel sourceItem)
                {
                    if(dropInfo.TargetItem is DirectoryViewModel targetFolder && targetFolder!=sourceItem)
                    {
                        dropInfo.Effects = DragDropEffects.Move;
                        dropInfo.DropTargetAdorner = DropTargetAdorners.Highlight;
                        dropInfo.EffectText = "Переместить в ";
                        dropInfo.DestinationText = targetFolder.Name;
                    }
                }
            }
        }

        public void Drop(IDropInfo dropInfo)
        {
            try
            {
                if (dropInfo.TargetItem is DirectoryViewModel targetFolder)
                {
                    if (dropInfo.Data is DirectoryViewModel sourceItem)
                    {
                        Directory.CreateDirectory(targetFolder.FullName + @"\" + sourceItem.Name);
                        FileSystem.MoveDirectory(sourceItem.FullName, targetFolder.FullName + @"\" + sourceItem.Name);
                    }
                    if (dropInfo.Data is FileViewModel sourceFile)
                    {
                        File.Move(sourceFile.FullName, targetFolder.FullName + @"\" + sourceFile.Name, true);
                    }
                    ((MainViewModel)Application.Current.MainWindow.DataContext).CurrentDirectoryTabItem.OpenDirectory();
                }
            }
            catch(Exception e) { MessageBox.Show(e.Message); }
        }
    }

}
