using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using System.Runtime.CompilerServices;
using System.Collections.ObjectModel;
using System.IO;
using System.Windows.Input;
using System;
using System.Diagnostics;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Threading;
using System.IO.Compression;
using Microsoft.VisualBasic.FileIO;

namespace WpfApp1
{
    public class DirectoryTabItemViewModel : BaseViewModel
    {
        private bool IsCreate;
        private bool IsDir;
        private FileEntityViewModel selectedFileEntity;
        private string creationField = "";
        private string searchFileOrDir;
        private Visibility creationVisible = Visibility.Collapsed;
        private readonly IDirectoryHistory _history;
        private readonly BackgroundWorker _backgroundWorker;
        public ObservableCollection<FileEntityViewModel> DirectoriesAndFiles { get; set; } = new ObservableCollection<FileEntityViewModel>();
        public string FilePath { get; set; }
        public string RenamePath { get; set; }
        public FileEntityViewModel SelectedFileEntity
        {
            get
            { return selectedFileEntity; }
            set
            {
                selectedFileEntity = value;
                PasteCommand?.RaiseCanExecuteChanged();
                CopyCommand?.RaiseCanExecuteChanged();
                RenameCommand?.RaiseCanExecuteChanged();
                DeleteCommand?.RaiseCanExecuteChanged();
                CreateFileCommand?.RaiseCanExecuteChanged();
                CreateDirectoryCommand?.RaiseCanExecuteChanged();
                ArchiveCommand?.RaiseCanExecuteChanged();
            }
        }
        public string CreateOrRename { get; set; }
        public string SearchFileOrDir
        {
            get { return searchFileOrDir; }
            set
            {
                searchFileOrDir = value;
                OnPropertyChanged("SearchFileOrDir");
            }
        }
        public Visibility CreationVisible
        {
            get { return creationVisible; }
            set
            {
                creationVisible = value;
                OnPropertyChanged("CreationVisible");
            }
        }
        public string CreationField
        {
            get { return creationField; }
            set
            {
                creationField = value;
                OnPropertyChanged("CreationField");
                CreateOrRenameFolderOrFile?.RaiseCanExecuteChanged();
            }
        }
        public DelegateCommand CreateOrRenameFolderOrFile { get; }
        public DelegateCommand RenameCommand { get; }
        public DelegateCommand SearchFileOrDirCommand { get; }
        public DelegateCommand CreateDirectoryCommand { get; }
        public DelegateCommand CreateFileCommand { get; }
        public DelegateCommand RefreshCommand { get; }
        public DelegateCommand DeleteCommand { get; }
        public DelegateCommand OpenCommand { get; }
        public DelegateCommand MoveBackCommand { get; }
        public DelegateCommand MoveForwardCommand { get; }
        public DelegateCommand ArchiveCommand { get; }
        public DelegateCommand CancelCreateCommand { get; }
        public DelegateCommand CopyCommand { get; }
        public DelegateCommand PasteCommand { get; }

        public string Name { get; set; }


        public DirectoryTabItemViewModel()
        {
            _history = new DirectoryHistory("Мой компьютер", "Мой компьютер");
            _backgroundWorker = new BackgroundWorker
            {
                WorkerSupportsCancellation = true,
                WorkerReportsProgress = true
            };

            _backgroundWorker.RunWorkerCompleted += BackgroundWorker_RunWorkerCompleted;
            _backgroundWorker.DoWork += BackgroundWorker_DoWork;
            _backgroundWorker.ProgressChanged += BackgroundWorker_ProgressChanged;
            OpenCommand = new DelegateCommand(Open);
            MoveBackCommand = new DelegateCommand(OnMoveBack, OnCanMoveBack);
            MoveForwardCommand = new DelegateCommand(OnMoveForward, OnCanMoveForward);
            DeleteCommand = new DelegateCommand(Delete, OnCanDelete);
            RefreshCommand = new DelegateCommand(Refresh);
            CreateDirectoryCommand = new DelegateCommand(CreateDirectory, OnCanCreateDirectory);
            CreateFileCommand = new DelegateCommand(CreateFile, OnCanCreateFile);
            SearchFileOrDirCommand = new DelegateCommand(OnSearch);
            ArchiveCommand = new DelegateCommand(OnArchive, OnCanArchive);
            CancelCreateCommand = new DelegateCommand(OnCancel);
            CreateOrRenameFolderOrFile = new DelegateCommand(OnCreateOrRenameFolderOrFile, OnCanCreateOrRenameFolderOrFile);
            RenameCommand = new DelegateCommand(OnRename, OnCanRename);
            CopyCommand = new DelegateCommand(OnCopy, OnCanCopy);
            PasteCommand = new DelegateCommand(OnPaste, OnCanPaste);
            Name = _history.Current.DirectoryPathName;
            FilePath = _history.Current.DirectoryPath;
            OpenDirectory();
            _history.HistoryChanged += History_HistoryChanged;

        }

        private void History_HistoryChanged(object sender, EventArgs e)
        {
            MoveBackCommand?.RaiseCanExecuteChanged();
            MoveForwardCommand?.RaiseCanExecuteChanged();
        }

        private bool OnCanMoveForward(object obj)
        {
            return _history.CanMoveForward;
        }

        private void OnMoveForward(object obj)
        {
            _history.MoveForward();
            var current = _history.Current;
            FilePath = current.DirectoryPath;
            Name = current.DirectoryPathName;
            OpenDirectory();
        }

        private bool OnCanMoveBack(object obj)
        {
            return _history.CanMoveBack;
        }

        private void OnMoveBack(object obj)
        {
            _history.MoveBack();
            var current = _history.Current;
            FilePath = current.DirectoryPath;
            Name = current.DirectoryPathName;
            OpenDirectory();
        }


        private void Open(object parameter)
        {
            if (parameter is DirectoryViewModel directoryViewModel)
            {
                FilePath = directoryViewModel.FullName;
                Name = directoryViewModel.Name;
                _history.Add(FilePath, Name);
                OpenDirectory();
            }
            else if (parameter is FileViewModel fileViewModel)
            {
                new Process
                {
                    StartInfo = new ProcessStartInfo(fileViewModel.FullName)
                    {
                        UseShellExecute = true
                    }
                }.Start();
            }
        }

        public void OpenDirectory()
        {
            if (_backgroundWorker.IsBusy)
                _backgroundWorker.CancelAsync();
            else
                RunWorker();
        }
        private void RunWorker()
        {
            DirectoriesAndFiles.Clear();
            CreationField = "";
            if (Name == "Мой компьютер")
            {
                foreach (var logicalDrive in Directory.GetLogicalDrives())
                {
                    DirectoriesAndFiles.Add(new DirectoryViewModel(logicalDrive));
                }
                return;
            }

            var directoryInfo = new DirectoryInfo(FilePath);

            _backgroundWorker.RunWorkerAsync(directoryInfo);
        }
        private void BackgroundWorker_RunWorkerCompleted(object sender, RunWorkerCompletedEventArgs e)
        {
            if (e.Cancelled)
            {
                RunWorker();
            }
        }
        private void BackgroundWorker_ProgressChanged(object sender, ProgressChangedEventArgs e)
        {
        }
        private void BackgroundWorker_DoWork(object sender, DoWorkEventArgs e)
        {
            var directoryInfo = e.Argument as DirectoryInfo;

            var bw = sender as BackgroundWorker;

            try
            {
                var directories = directoryInfo.EnumerateDirectories();
                foreach (var directory in directories)
                {
                    if (bw.CancellationPending)
                    {
                        e.Cancel = true;

                        return;
                    }
                    InvokeAsync(() =>
                    {
                        DirectoriesAndFiles.Add(new DirectoryViewModel(directory));
                    }).Wait();
                }
                foreach (var fileInfo in directoryInfo.GetFiles())
                {
                    if (bw.CancellationPending)
                    {
                        e.Cancel = true;

                        return;
                    }

                    InvokeAsync(() =>
                    {
                        DirectoriesAndFiles.Add(new FileViewModel(fileInfo));
                    }).Wait();

                }

            }
            catch { }
        }

        public async Task InvokeAsync(Action action) => await Application.Current.Dispatcher.InvokeAsync(action, DispatcherPriority.Background);

        private bool OnCanDelete(object obj)
        {
            if (obj != null)
            {
                if (obj is FileViewModel fileViewModel)
                {
                    FileInfo inf = new FileInfo(fileViewModel.FullName);
                    if (!inf.Attributes.HasFlag(FileAttributes.System) && !inf.Attributes.HasFlag(FileAttributes.ReadOnly) && Name != "Windows") return true;
                    else return false;
                }
                else
                {
                    DirectoryViewModel dir = (DirectoryViewModel)obj;
                    DirectoryInfo inf = new DirectoryInfo(dir.FullName);
                    if (!inf.Attributes.HasFlag(FileAttributes.System) && !inf.Attributes.HasFlag(FileAttributes.ReadOnly) && inf.Name != "Windows" && Name != "Windows") return true;
                    else return false;
                }
            }
            else return false;
        }
        private void Delete(object obj)
        {
            try
            {
                if (obj is FileViewModel fileViewModel)
                {
                    FileInfo fileInf = new FileInfo(fileViewModel.FullName);
                    fileInf.Delete();
                    OpenDirectory();
                }
                else if (obj is DirectoryViewModel directoryViewModel)
                {
                    DirectoryInfo dirInfo = new DirectoryInfo(directoryViewModel.FullName);
                    dirInfo.Delete(true);
                    OpenDirectory();
                }
            }
            catch (Exception e) { MessageBox.Show(e.Message); }
        }

        private void Refresh(object obj)
        {
            OpenDirectory();
        }
        private bool OnCanCreateDirectory(object obj)
        {
            if (_history.Current.DirectoryPath == "Мой компьютер") return false;
            else return true;
        }
        private void CreateDirectory(object obj)
        {
            try
            {
                CreationVisible = Visibility.Visible;
                IsDir = true;
                IsCreate = true;
                CreateOrRename = "Создать";
            }
            catch (Exception e) { MessageBox.Show(e.Message); }
        }
        private bool OnCanCreateFile(object obj)
        {
            if (_history.Current.DirectoryPath == "Мой компьютер") return false;
            else return true;
        }
        private void CreateFile(object obj)
        {
            try
            {
                CreationVisible = Visibility.Visible;
                IsDir = false;
                IsCreate = true;
                CreateOrRename = "Создать";
            }
            catch (Exception e) { MessageBox.Show(e.Message); }
        }
        private void OnSearch(object obj)
        {
            DirectoriesAndFiles.Clear();
            if (_history.Current.DirectoryPath == "Мой компьютер")
            {
                MessageBox.Show("Перед поиском откройте необходимый логический диск!");
                OpenDirectory();
            }
            else
            {
                string[] S = SearchDirectory(_history.Current.DirectoryPath);


                foreach (string folderPatch in S)
                {
                    try
                    {

                        DirectoryInfo MainFolders = new DirectoryInfo(folderPatch);
                        if (MainFolders.Name.ToUpper().Contains(searchFileOrDir.ToUpper()))
                            DirectoriesAndFiles.Add(new DirectoryViewModel(MainFolders));
                        string[] AllDir = Directory.GetDirectories(folderPatch, $"*{searchFileOrDir}*", System.IO.SearchOption.AllDirectories);
                        foreach (string dir in AllDir)
                        {
                            DirectoryInfo dirInf = new DirectoryInfo(dir);
                            if (dirInf.Name.ToUpper().Contains(searchFileOrDir.ToUpper()))
                                DirectoriesAndFiles.Add(new DirectoryViewModel(dirInf));
                        }



                        //DirectoryInfo MainFolders = new DirectoryInfo(folderPatch);
                        string[] F = SearchFile(folderPatch, $"*{searchFileOrDir}*");
                        foreach (string FF in F)
                        {
                            FileInfo fileInf = new FileInfo(FF);
                            DirectoriesAndFiles.Add(new FileViewModel(fileInf));
                        }

                    }
                    catch { }
                }
            }


        }
        

        static string[] SearchDirectory(string patch)
        {
            //находим все папки в по указанному пути
            string[] ReultSearch = Directory.GetDirectories(patch);
            //возвращаем список директорий
            return ReultSearch;
        }
        static string[] SearchFile(string patch, string pattern)
        {
            /*флаг SearchOption.AllDirectories означает искать во всех вложенных папках*/
            string[] ReultSearch = Directory.GetFiles(patch, pattern, System.IO.SearchOption.AllDirectories);
            //возвращаем список найденных файлов соответствующих условию поиска 
            return ReultSearch;
        }

        private bool OnCanArchive(object obj)
        {
            if (Name == "Мой компьютер" || obj == null) return false;
            else return true;
        }

        private void OnArchive(object obj)
        {
            try
            {
                if (obj is FileViewModel fileViewModel)
                {
                    string name = fileViewModel.Name;
                    bool IsDot = false;
                    while (IsDot == false)
                    {
                        if (name.EndsWith('.')) IsDot = true;
                        name = name.Remove(name.Length - 1);
                    }
                    string archivePath = _history.Current.DirectoryPath + @"\" + name + ".zip";
                    using (ZipArchive zipArchive = ZipFile.Open(archivePath, ZipArchiveMode.Create))
                    {
                        string filePath = fileViewModel.FullName;
                        string fileName = fileViewModel.Name;
                        zipArchive.CreateEntryFromFile(filePath, fileName);
                    }

                    OpenDirectory();
                }
                else
                if (obj is DirectoryViewModel directoryViewModel && directoryViewModel.FullName != @"C:\")
                {
                    string dirPath = directoryViewModel.FullName;
                    string archPath = _history.Current.DirectoryPath + @"\" + directoryViewModel.Name + ".zip";
                    ZipFile.CreateFromDirectory(dirPath, archPath);
                    OpenDirectory();
                }
            }
            catch (Exception e) { MessageBox.Show(e.Message); }
        }
        private void OnCancel(object obj)
        {
            CreationField = "";
            CreationVisible = Visibility.Collapsed;
        }
        private void OnCreateOrRenameFolderOrFile(object obj)
        {
            try
            {
                if (IsCreate)
                {
                    if (IsDir)
                    {
                        string path = _history.Current.DirectoryPath;
                        string subpath = creationField;
                        Directory.CreateDirectory(path + @"\" + subpath);
                        CreationVisible = Visibility.Collapsed;
                        CreationField = "";
                        OpenDirectory();
                    }
                    else
                    {
                        string path = _history.Current.DirectoryPath + @"\" + creationField;
                        File.Create(path);
                        CreationVisible = Visibility.Collapsed;
                        CreationField = "";
                        OpenDirectory();
                    }
                }
                else
                {
                    if (IsDir)
                    {
                        FileSystem.RenameDirectory(RenamePath, CreationField);
                        CreationField = "";
                        CreationVisible = Visibility.Collapsed;
                        OpenDirectory();
                    }
                    else
                    {
                        FileSystem.RenameFile(RenamePath, CreationField);
                        CreationField = "";
                        CreationVisible = Visibility.Collapsed;
                        OpenDirectory();
                    }
                }
            }
            catch (Exception e) { MessageBox.Show(e.Message); }
        }

        private bool OnCanCreateOrRenameFolderOrFile(object obj)
        {
            bool IsExists = false;
            foreach (FileEntityViewModel dir in DirectoriesAndFiles)
            {
                if (dir.Name == creationField) IsExists = true;
            }
            if (_history.Current.DirectoryPath != "Мой компьютер" & creationField != "" & !creationField.Contains("/") & !creationField.Contains(@"\") & !creationField.Contains('*') & !creationField.Contains(':') & !creationField.Contains('?') & !creationField.Contains('<') & !creationField.Contains('>') & !creationField.Contains('"') & !IsExists)
                return true;
            else return false;
        }
        private bool OnCanRename(object obj)
        {
            FileEntityViewModel file = (FileEntityViewModel)obj;
            if (obj == null || file.Name == "Windows" || Name == "Windows" || Name == "Мой компьютер" || file.Name == "Program Files" || file.Name == "Program Files (x86)") return false;
            else return true;
        }
        private void OnRename(object obj)
        {
            try
            {
                CreationVisible = Visibility.Visible;
                CreateOrRename = "Переименовать";
                IsCreate = false;
                if (obj is DirectoryViewModel directoryViewModel)
                {
                    RenamePath = directoryViewModel.FullName;
                    IsDir = true;
                }
                if (obj is FileViewModel fileViewModel)
                {
                    RenamePath = fileViewModel.FullName;
                    IsDir = false;
                }
            }
            catch (Exception e) { MessageBox.Show(e.Message); }
        }
        private bool OnCanCopy(object obj)
        {
            if (obj == null || Name == "Мой компьютер") return false;
            else return true;
        }
        private void OnCopy(object obj)
        {
            try
            {
                if (obj is DirectoryViewModel directoryViewModel)
                {
                    IsDir = true;
                }
                else IsDir = false;
                if (obj is FileEntityViewModel fileViewModel)
                {
                    System.Collections.Specialized.StringCollection replacementList = new System.Collections.Specialized.StringCollection();
                    replacementList.Add(fileViewModel.FullName);
                    Clipboard.SetFileDropList(replacementList);
                }
            }
            catch (Exception e) { MessageBox.Show(e.Message); }
        }
        private bool OnCanPaste(object obj)
        {
            if (obj is FileViewModel || Name == "Мой компьютер") return false;
            else return true;
        }
        private void OnPaste(object obj)
        {
            try
            {
                System.Collections.Specialized.StringCollection returnList = null;
                if (Clipboard.ContainsFileDropList())
                {
                    returnList = Clipboard.GetFileDropList();
                    if (obj is DirectoryViewModel directoryViewModel)
                    {
                        if (IsDir)
                        {
                            DirectoryInfo dir = new DirectoryInfo(returnList[0]);
                            Directory.CreateDirectory(directoryViewModel.FullName + @"\" + dir.Name);
                            FileSystem.CopyDirectory(returnList[0], directoryViewModel.FullName + @"\" + dir.Name);
                        }
                        else
                        {
                            File.Copy(returnList[0], directoryViewModel.FullName + @"\" + Path.GetFileName(returnList[0]), true);
                        }
                    }
                    if (obj == null)
                    {
                        if (IsDir)
                        {
                            DirectoryInfo dir = new DirectoryInfo(returnList[0]);
                            Directory.CreateDirectory(_history.Current.DirectoryPath + @"\" + dir.Name);
                            FileSystem.CopyDirectory(returnList[0], _history.Current.DirectoryPath + @"\" + dir.Name);
                        }
                        else
                        {
                            File.Copy(returnList[0], _history.Current.DirectoryPath + @"\" + Path.GetFileName(returnList[0]));
                        }
                    }
                }
                OpenDirectory();
            }
            catch (Exception e)
            {
                MessageBox.Show(e.Message);
            }
        }
    }
}