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
    logo?: string;
  };
}

export const GCC_GOVERNMENT_SERVICES: GovernmentService[] = [
  {
    id: 'sadad', key: 'sadad', name: 'SADAD', nameAr: 'سداد', category: 'payment', country: 'SA',
    styling: { primary: "#F58220", secondary: "#E67317", fontArabic: "Cairo", font: "Inter", logo: "/assets/branding/logo-sadad.png" }
  },
  {
    id: 'jaywan', key: 'jaywan', name: 'Jaywan', nameAr: 'جيوان', category: 'payment', country: 'AE',
    styling: { primary: "#CE1126", secondary: "#00732F", fontArabic: "Cairo", font: "Inter", logo: "/assets/branding/logo-jaywan.png" }
  },
  {
    id: 'knet', key: 'knet', name: 'KNET', nameAr: 'كي نت', category: 'payment', country: 'KW',
    styling: { primary: "#007A33", secondary: "#004B1F", fontArabic: "Cairo", font: "Inter", logo: "/assets/branding/logo-knet.png" }
  },
  {
    id: 'qpay', key: 'qpay', name: 'Q-Pay', nameAr: 'بوابة قطر', category: 'payment', country: 'QA',
    styling: { primary: "#8B1F41", secondary: "#C8102E", fontArabic: "Cairo", font: "Inter", logo: "/assets/branding/logo-qpay-com-qa.png" }
  },
  {
    id: 'omannet', key: 'omannet', name: 'OmanNet', nameAr: 'عمان نت', category: 'payment', country: 'OM',
    styling: { primary: "#003D7A", secondary: "#C8102E", fontArabic: "Cairo", font: "Inter", logo: "/assets/branding/logo-oman-net.png" }
  },
  {
    id: 'benefit', key: 'benefit', name: 'Benefit', nameAr: 'بنفت', category: 'payment', country: 'BH',
    styling: { primary: "#E31E24", secondary: "#B5121B", fontArabic: "Cairo", font: "Poppins", logo: "/assets/branding/logo-benefitpay.png" }
  },
  {
    id: 'nafath', key: 'nafath', name: 'Nafath', nameAr: 'نفاذ', category: 'identity', country: 'SA',
    styling: { primary: "#1A3B77", secondary: "#D4AF37", fontArabic: "Cairo", font: "Inter", logo: "/assets/branding/logo-nafath.png" }
  },
  {
    id: 'absher', key: 'absher', name: 'Absher', nameAr: 'أبشر', category: 'identity', country: 'SA',
    styling: { primary: "#003D7A", secondary: "#A9855A", fontArabic: "Cairo", font: "Inter", logo: "/assets/branding/logo-absher.png" }
  },
  {
    id: 'uaepass', key: 'uaepass', name: 'UAE PASS', nameAr: 'الهوية الرقمية', category: 'identity', country: 'AE',
    styling: { primary: "#000000", secondary: "#1A1A1A", fontArabic: "Cairo", font: "Inter", logo: "/assets/branding/logo-uae-gov.png" }
  },
  {
    id: 'mol_sa', key: 'mol_sa', name: 'HRSD', nameAr: 'الموارد البشرية', category: 'ministry', country: 'SA',
    styling: { primary: "#006C35", secondary: "#D4AF37", fontArabic: "Cairo", font: "Inter" }
  },
  {
    id: 'moh_sa', key: 'moh_sa', name: 'MOH', nameAr: 'وزارة الصحة', category: 'ministry', country: 'SA',
    styling: { primary: "#006C35", secondary: "#D4AF37", fontArabic: "Cairo", font: "Inter" }
  }
];

export const getGovernmentServicesByCountry = (countryCode: string) => 
  GCC_GOVERNMENT_SERVICES.filter(s => s.country === countryCode);

export const getGovernmentServiceByKey = (key: string) => 
  GCC_GOVERNMENT_SERVICES.find(s => s.key === key);
