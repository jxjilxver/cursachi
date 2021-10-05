using System.Drawing;
using System.IO;
using System.Windows;
using System.Windows.Media;
using System.Windows.Media.Imaging;

namespace WpfApp1
{
    public sealed class FileViewModel : FileEntityViewModel
    {

        public ImageSource Img { get; }

        public FileViewModel(string name) : base(name) { }

        public FileViewModel(FileInfo fileInfo):base(fileInfo.Name)
        {
            FullName = fileInfo.FullName;
            Icon icon = Icon.ExtractAssociatedIcon(FullName);
            Img = System.Windows.Interop.Imaging.CreateBitmapSourceFromHIcon(
            icon.Handle,
            System.Windows.Int32Rect.Empty,
            System.Windows.Media.Imaging.BitmapSizeOptions.FromEmptyOptions());
        }
    }
}
