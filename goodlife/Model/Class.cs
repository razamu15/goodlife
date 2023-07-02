using System;
namespace goodlife.Model
{
	public class Class
	{
		public int calories { get; set; }
		public string className { get; set; }
        public string description { get; set; }
        public IEnumerable<string> category { get; set; }
        public IEnumerable<int> categoryID { get; set; }
        public string classAbbr { get; set; }
        public string intensity { get; set; }
        public bool requiresEquipment { get; set; }

    }
}

