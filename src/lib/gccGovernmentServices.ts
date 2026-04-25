export interface GovernmentService {
  id: string;
  key: string;
  name: string;
  nameAr: string;
  category: string;
  country: string;
  styling: {
    primary: string;
    secondary: string;
    tertiary?: string;
    fontArabic: string;
    font: string;
  };
}

export const GCC_GOVERNMENT_SERVICES: GovernmentService[] = [
  {
    "id": "sadad",
    "key": "sadad",
    "name": "SADAD",
    "nameAr": "سداد",
    "category": "payment",
    "country": "SA",
    "styling": {
      "primary": "#EB7625",
      "secondary": "#2B335E",
      "tertiary": "#A9855A",
      "fontArabic": "FrutigerLTArabic",
      "font": "FuturaBT"
    }
  },
  {
    "id": "nafath",
    "key": "nafath",
    "name": "Nafath",
    "nameAr": "نفاذ",
    "category": "identity",
    "country": "SA",
    "styling": {
      "primary": "#1A3B77",
      "secondary": "#D4AF37",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "absher",
    "key": "absher",
    "name": "Absher",
    "nameAr": "أبشر",
    "category": "identity",
    "country": "SA",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#A9855A",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "tawakkalna",
    "key": "tawakkalna",
    "name": "Tawakkalna",
    "nameAr": "توكلنا",
    "category": "identity",
    "country": "SA",
    "styling": {
      "primary": "#006C35",
      "secondary": "#FFFFFF",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "etheq",
    "key": "etheq",
    "name": "Eithaq",
    "nameAr": "إيثاق",
    "category": "identity",
    "country": "SA",
    "styling": {
      "primary": "#2B335E",
      "secondary": "#EB7625",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "etimad",
    "key": "etimad",
    "name": "Etimad",
    "nameAr": "اعتماد",
    "category": "identity",
    "country": "SA",
    "styling": {
      "primary": "#8B1F41",
      "secondary": "#D4AF37",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "mol_sa",
    "key": "mol_sa",
    "name": "Ministry of Labor",
    "nameAr": "وزارة الموارد البشرية",
    "category": "ministry",
    "country": "SA",
    "styling": {
      "primary": "#006C35",
      "secondary": "#D4AF37",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moh_sa",
    "key": "moh_sa",
    "name": "Ministry of Health",
    "nameAr": "وزارة الصحة",
    "category": "ministry",
    "country": "SA",
    "styling": {
      "primary": "#006C35",
      "secondary": "#D4AF37",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moe_sa",
    "key": "moe_sa",
    "name": "Ministry of Education",
    "nameAr": "وزارة التعليم",
    "category": "ministry",
    "country": "SA",
    "styling": {
      "primary": "#006C35",
      "secondary": "#D4AF37",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moi_sa",
    "key": "moi_sa",
    "name": "Ministry of Interior",
    "nameAr": "وزارة الداخلية",
    "category": "ministry",
    "country": "SA",
    "styling": {
      "primary": "#006C35",
      "secondary": "#D4AF37",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moj_sa",
    "key": "moj_sa",
    "name": "Ministry of Justice",
    "nameAr": "وزارة العدل",
    "category": "ministry",
    "country": "SA",
    "styling": {
      "primary": "#006C35",
      "secondary": "#D4AF37",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "mcit_sa",
    "key": "mcit_sa",
    "name": "Ministry of Communications",
    "nameAr": "وزارة الاتصالات",
    "category": "ministry",
    "country": "SA",
    "styling": {
      "primary": "#006C35",
      "secondary": "#D4AF37",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moci_sa",
    "key": "moci_sa",
    "name": "Ministry of Commerce",
    "nameAr": "وزارة التجارة",
    "category": "ministry",
    "country": "SA",
    "styling": {
      "primary": "#006C35",
      "secondary": "#D4AF37",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "hail_mun",
    "key": "hail_mun",
    "name": "Hail Municipality",
    "nameAr": "بلدية حائل",
    "category": "municipality",
    "country": "SA",
    "styling": {
      "primary": "#006C35",
      "secondary": "#D4AF37",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "riyadh_mun",
    "key": "riyadh_mun",
    "name": "Riyadh Municipality",
    "nameAr": "بلدية الرياض",
    "category": "municipality",
    "country": "SA",
    "styling": {
      "primary": "#006C35",
      "secondary": "#D4AF37",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "jeddah_mun",
    "key": "jeddah_mun",
    "name": "Jeddah Municipality",
    "nameAr": "بلدية جدة",
    "category": "municipality",
    "country": "SA",
    "styling": {
      "primary": "#006C35",
      "secondary": "#D4AF37",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "jaywan",
    "key": "jaywan",
    "name": "Jaywan",
    "nameAr": "جيوان",
    "category": "payment",
    "country": "AE",
    "styling": {
      "primary": "#CE1126",
      "secondary": "#00732F",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "uaepass",
    "key": "uaepass",
    "name": "UAE PASS",
    "nameAr": "UAE PASS",
    "category": "identity",
    "country": "AE",
    "styling": {
      "primary": "#CE1126",
      "secondary": "#000000",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "edirham",
    "key": "edirham",
    "name": "eDirham",
    "nameAr": "درهم إلكتروني",
    "category": "identity",
    "country": "AE",
    "styling": {
      "primary": "#CE1126",
      "secondary": "#00732F",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "abudhabipay",
    "key": "abudhabipay",
    "name": "Abu Dhabi Pay",
    "nameAr": "سداد أبوظبي",
    "category": "identity",
    "country": "AE",
    "styling": {
      "primary": "#BF0000",
      "secondary": "#000000",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "dubai_pay",
    "key": "dubai_pay",
    "name": "Dubai Pay",
    "nameAr": "هوية دبي الرقمية",
    "category": "identity",
    "country": "AE",
    "styling": {
      "primary": "#CE1126",
      "secondary": "#000000",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "mohre_ae",
    "key": "mohre_ae",
    "name": "Ministry of Human Resources",
    "nameAr": "وزارة الموارد البشرية",
    "category": "ministry",
    "country": "AE",
    "styling": {
      "primary": "#CE1126",
      "secondary": "#00732F",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "mohap_ae",
    "key": "mohap_ae",
    "name": "Ministry of Health",
    "nameAr": "وزارة الصحة",
    "category": "ministry",
    "country": "AE",
    "styling": {
      "primary": "#CE1126",
      "secondary": "#00732F",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moe_ae",
    "key": "moe_ae",
    "name": "Ministry of Education",
    "nameAr": "وزارة التربية والتعليم",
    "category": "ministry",
    "country": "AE",
    "styling": {
      "primary": "#CE1126",
      "secondary": "#00732F",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "ica_ae",
    "key": "ica_ae",
    "name": "ICA",
    "nameAr": "الهيئة الاتحادية للهوية والجنسية",
    "category": "ministry",
    "country": "AE",
    "styling": {
      "primary": "#CE1126",
      "secondary": "#00732F",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "dm_ae",
    "key": "dm_ae",
    "name": "Dubai Municipality",
    "nameAr": "بلدية دبي",
    "category": "municipality",
    "country": "AE",
    "styling": {
      "primary": "#CE1126",
      "secondary": "#00732F",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "adm_ae",
    "key": "adm_ae",
    "name": "Abu Dhabi Municipality",
    "nameAr": "بلدية أبوظبي",
    "category": "municipality",
    "country": "AE",
    "styling": {
      "primary": "#CE1126",
      "secondary": "#00732F",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "knet",
    "key": "knet",
    "name": "KNET",
    "nameAr": "كي نت",
    "category": "payment",
    "country": "KW",
    "styling": {
      "primary": "#007A33",
      "secondary": "#004B1F",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "hawyti",
    "key": "hawyti",
    "name": "Hawyti",
    "nameAr": "هويتي",
    "category": "identity",
    "country": "KW",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#000000",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "sahel",
    "key": "sahel",
    "name": "Sahel",
    "nameAr": "سهل",
    "category": "identity",
    "country": "KW",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#FFFFFF",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "tasdeed",
    "key": "tasdeed",
    "name": "Tasdeed",
    "nameAr": "تسديد",
    "category": "identity",
    "country": "KW",
    "styling": {
      "primary": "#007A33",
      "secondary": "#004B1F",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moh_kw",
    "key": "moh_kw",
    "name": "Ministry of Health",
    "nameAr": "وزارة الصحة",
    "category": "ministry",
    "country": "KW",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#000000",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moe_kw",
    "key": "moe_kw",
    "name": "Ministry of Education",
    "nameAr": "وزارة التربية والتعليم",
    "category": "ministry",
    "country": "KW",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#000000",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moi_kw",
    "key": "moi_kw",
    "name": "Ministry of Interior",
    "nameAr": "وزارة الداخلية",
    "category": "ministry",
    "country": "KW",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#000000",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moci_kw",
    "key": "moci_kw",
    "name": "Ministry of Commerce",
    "nameAr": "وزارة التجارة والصناعة",
    "category": "ministry",
    "country": "KW",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#000000",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "qpay",
    "key": "qpay",
    "name": "Q-Pay",
    "nameAr": "بوابة قطر",
    "category": "payment",
    "country": "QA",
    "styling": {
      "primary": "#8B1F41",
      "secondary": "#C8102E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "qdi",
    "key": "qdi",
    "name": "QDI",
    "nameAr": "QDI",
    "category": "identity",
    "country": "QA",
    "styling": {
      "primary": "#8B1F41",
      "secondary": "#FFFFFF",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "hukoomi",
    "key": "hukoomi",
    "name": "Hukoomi",
    "nameAr": "حكومي",
    "category": "identity",
    "country": "QA",
    "styling": {
      "primary": "#8B1F41",
      "secondary": "#C8102E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moh_qa",
    "key": "moh_qa",
    "name": "Ministry of Health",
    "nameAr": "وزارة الصحة العامة",
    "category": "ministry",
    "country": "QA",
    "styling": {
      "primary": "#8B1F41",
      "secondary": "#C8102E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moe_qa",
    "key": "moe_qa",
    "name": "Ministry of Education",
    "nameAr": "وزارة التعليم والتعليم العالي",
    "category": "ministry",
    "country": "QA",
    "styling": {
      "primary": "#8B1F41",
      "secondary": "#C8102E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moi_qa",
    "key": "moi_qa",
    "name": "Ministry of Interior",
    "nameAr": "وزارة الداخلية",
    "category": "ministry",
    "country": "QA",
    "styling": {
      "primary": "#8B1F41",
      "secondary": "#C8102E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moci_qa",
    "key": "moci_qa",
    "name": "Ministry of Commerce",
    "nameAr": "وزارة التجارة والصناعة",
    "category": "ministry",
    "country": "QA",
    "styling": {
      "primary": "#8B1F41",
      "secondary": "#C8102E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "benefit",
    "key": "benefit",
    "name": "Benefit",
    "nameAr": "بنفت",
    "category": "payment",
    "country": "BH",
    "styling": {
      "primary": "#E31E24",
      "secondary": "#B5121B",
      "fontArabic": "Cairo",
      "font": "Poppins"
    }
  },
  {
    "id": "ekey",
    "key": "ekey",
    "name": "eKey 2.0",
    "nameAr": "eKey 2.0",
    "category": "identity",
    "country": "BH",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#C8102E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "hukoomati",
    "key": "hukoomati",
    "name": "Hukoomati",
    "nameAr": "حكومتي",
    "category": "identity",
    "country": "BH",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#FFFFFF",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moh_bh",
    "key": "moh_bh",
    "name": "Ministry of Health",
    "nameAr": "وزارة الصحة",
    "category": "ministry",
    "country": "BH",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#C8102E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moe_bh",
    "key": "moe_bh",
    "name": "Ministry of Education",
    "nameAr": "وزارة التربية والتعليم",
    "category": "ministry",
    "country": "BH",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#C8102E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moi_bh",
    "key": "moi_bh",
    "name": "Ministry of Interior",
    "nameAr": "وزارة الداخلية",
    "category": "ministry",
    "country": "BH",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#C8102E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moci_bh",
    "key": "moci_bh",
    "name": "Ministry of Commerce",
    "nameAr": "وزارة الصناعة والتجارة",
    "category": "ministry",
    "country": "BH",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#C8102E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "oman-net",
    "key": "oman-net",
    "name": "OmanNet",
    "nameAr": "عمان نت",
    "category": "payment",
    "country": "OM",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#C8102E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "rop_id",
    "key": "rop_id",
    "name": "ROP ID",
    "nameAr": "ROP Digital ID",
    "category": "identity",
    "country": "OM",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#C8102E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "theqa",
    "key": "theqa",
    "name": "Theqa",
    "nameAr": "ثقة",
    "category": "identity",
    "country": "OM",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#D4AF37",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moh_om",
    "key": "moh_om",
    "name": "Ministry of Health",
    "nameAr": "وزارة الصحة",
    "category": "ministry",
    "country": "OM",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#C8102E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moe_om",
    "key": "moe_om",
    "name": "Ministry of Education",
    "nameAr": "وزارة التربية والتعليم",
    "category": "ministry",
    "country": "OM",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#C8102E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moi_om",
    "key": "moi_om",
    "name": "Ministry of Interior",
    "nameAr": "وزارة الداخلية",
    "category": "ministry",
    "country": "OM",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#C8102E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "moci_om",
    "key": "moci_om",
    "name": "Ministry of Commerce",
    "nameAr": "وزارة التجارة والصناعة",
    "category": "ministry",
    "country": "OM",
    "styling": {
      "primary": "#003D7A",
      "secondary": "#C8102E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "chalets",
    "key": "chalets",
    "name": "Chalets",
    "nameAr": "حجز الشاليهات",
    "category": "other",
    "country": "GEN",
    "styling": {
      "primary": "#EB7625",
      "secondary": "#2B335E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "contracts",
    "key": "contracts",
    "name": "Contracts",
    "nameAr": "العقود والاتفاقيات",
    "category": "other",
    "country": "GEN",
    "styling": {
      "primary": "#EB7625",
      "secondary": "#2B335E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "health",
    "key": "health",
    "name": "Healthcare",
    "nameAr": "الخدمات الصحية",
    "category": "other",
    "country": "GEN",
    "styling": {
      "primary": "#EB7625",
      "secondary": "#2B335E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "invoices",
    "key": "invoices",
    "name": "Local Invoices",
    "nameAr": "الفواتير المحلية",
    "category": "other",
    "country": "GEN",
    "styling": {
      "primary": "#EB7625",
      "secondary": "#2B335E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  },
  {
    "id": "logistics",
    "key": "logistics",
    "name": "Logistics",
    "nameAr": "الخدمات اللوجستية",
    "category": "other",
    "country": "GEN",
    "styling": {
      "primary": "#EB7625",
      "secondary": "#2B335E",
      "fontArabic": "Cairo",
      "font": "Inter"
    }
  }
];

export const getGovernmentServicesByCountry = (countryCode: string) => 
  GCC_GOVERNMENT_SERVICES.filter(s => s.country === countryCode);

export const getGovernmentServiceByKey = (key: string) => 
  GCC_GOVERNMENT_SERVICES.find(s => s.key === key);
