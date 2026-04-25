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
    id: 'sadad', key: 'sadad', name: 'SADAD', nameAr: 'سداد', category: 'payment', country: 'SA',
    styling: { primary: "#EB7625", secondary: "#2B335E", tertiary: "#A9855A", fontArabic: "FrutigerLTArabic", font: "FuturaBT" }
  },
  {
    id: 'jaywan', key: 'jaywan', name: 'Jaywan', nameAr: 'جيوان', category: 'payment', country: 'AE',
    styling: { primary: "#CE1126", secondary: "#00732F", fontArabic: "Cairo", font: "Inter" }
  },
  {
    id: 'knet', key: 'knet', name: 'KNET', nameAr: 'كي نت', category: 'payment', country: 'KW',
    styling: { primary: "#007A33", secondary: "#004B1F", fontArabic: "Cairo", font: "Inter" }
  },
  {
    id: 'qpay', key: 'qpay', name: 'Q-Pay', nameAr: 'بوابة قطر', category: 'payment', country: 'QA',
    styling: { primary: "#8B1F41", secondary: "#C8102E", fontArabic: "Cairo", font: "Inter" }
  },
  {
    id: 'oman-net', key: 'oman-net', name: 'OmanNet', nameAr: 'عمان نت', category: 'payment', country: 'OM',
    styling: { primary: "#003D7A", secondary: "#C8102E", fontArabic: "Cairo", font: "Inter" }
  },
  {
    id: 'benefit', key: 'benefit', name: 'Benefit', nameAr: 'بنفت', category: 'payment', country: 'BH',
    styling: { primary: "#E31E24", secondary: "#B5121B", fontArabic: "Cairo", font: "Poppins" }
  },
  {
    id: 'nafath', key: 'nafath', name: 'Nafath', nameAr: 'نفاذ', category: 'identity', country: 'SA',
    styling: { primary: "#1A3B77", secondary: "#D4AF37", fontArabic: "Cairo", font: "Inter" }
  },
  {
    id: 'absher', key: 'absher', name: 'Absher', nameAr: 'أبشر', category: 'identity', country: 'SA',
    styling: { primary: "#003D7A", secondary: "#A9855A", fontArabic: "Cairo", font: "Inter" }
  },
  {
    id: 'tawakkalna', key: 'tawakkalna', name: 'Tawakkalna', nameAr: 'توكلنا', category: 'identity', country: 'SA',
    styling: { primary: "#006C35", secondary: "#FFFFFF", fontArabic: "Cairo", font: "Inter" }
  },
  {
    id: 'uaepass', key: 'uaepass', name: 'UAE PASS', nameAr: 'UAE PASS', category: 'identity', country: 'AE',
    styling: { primary: "#CE1126", secondary: "#000000", fontArabic: "Cairo", font: "Inter" }
  },
  {
    id: 'hawyti', key: 'hawyti', name: 'Hawyti', nameAr: 'هويتي', category: 'identity', country: 'KW',
    styling: { primary: "#003D7A", secondary: "#000000", fontArabic: "Cairo", font: "Inter" }
  },
  {
    id: 'sahel', key: 'sahel', name: 'Sahel', nameAr: 'سهل', category: 'identity', country: 'KW',
    styling: { primary: "#003D7A", secondary: "#FFFFFF", fontArabic: "Cairo", font: "Inter" }
  },
  {
    id: 'ekey', key: 'ekey', name: 'eKey 2.0', nameAr: 'eKey 2.0', category: 'identity', country: 'BH',
    styling: { primary: "#003D7A", secondary: "#C8102E", fontArabic: "Cairo", font: "Inter" }
  }
];

export const getGovernmentServicesByCountry = (countryCode: string) => 
  GCC_GOVERNMENT_SERVICES.filter(s => s.country === countryCode);

export const getGovernmentServiceByKey = (key: string) => 
  GCC_GOVERNMENT_SERVICES.find(s => s.key === key);
