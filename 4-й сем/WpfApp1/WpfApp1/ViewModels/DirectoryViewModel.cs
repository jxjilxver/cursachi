using System.IO;

namespace WpfApp1
{
    public sealed class DirectoryViewModel : FileEntityViewModel
    {
        public string Img { get; } = "pack://application:,,,/Images/folderorange_93318.png";
        public DirectoryViewModel(string directoryName) : base(directoryName)
        {
            FullName = directoryName;
        }

        public DirectoryViewModel(DirectoryInfo directoryName) : base(directoryName.Name)
        {
            FullName = directoryName.FullName;
        }
    }
}
