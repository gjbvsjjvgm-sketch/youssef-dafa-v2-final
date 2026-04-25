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
    fontArabic: string;
    font: string;
    logo?: string;
  };
}

export const GCC_GOVERNMENT_SERVICES: GovernmentService[] = [
  { id: 'mol', key: 'mol', name: 'MOL', nameAr: 'وزارة الموارد البشرية', category: 'ministry', country: 'SA', styling: { primary: "#006C35", secondary: "#D4AF37", fontArabic: "Cairo", font: "Inter" } },
  { id: 'moh', key: 'moh', name: 'MOH', nameAr: 'وزارة الصحة', category: 'ministry', country: 'SA', styling: { primary: "#006C35", secondary: "#D4AF37", fontArabic: "Cairo", font: "Inter" } },
  { id: 'mohre', key: 'mohre', name: 'MOHRE', nameAr: 'وزارة الموارد البشرية', category: 'ministry', country: 'AE', styling: { primary: "#000000", secondary: "#D4AF37", fontArabic: "Cairo", font: "Inter" } },
  { id: 'ica', key: 'ica', name: 'ICA', nameAr: 'الهيئة الاتحادية للهوية', category: 'identity', country: 'AE', styling: { primary: "#000000", secondary: "#CE1126", fontArabic: "Cairo", font: "Inter" } },
  { id: 'paci', key: 'paci', name: 'PACI', nameAr: 'الهيئة العامة للمعلومات المدنية', category: 'documents', country: 'KW', styling: { primary: "#003D7A", secondary: "#FFFFFF", fontArabic: "Cairo", font: "Inter" } }
];

export const getGovernmentServicesByCountry = (countryCode: string) => 
  GCC_GOVERNMENT_SERVICES.filter(s => s.country === countryCode);

export const getGovernmentServiceByKey = (key: string) => 
  GCC_GOVERNMENT_SERVICES.find(s => s.key === key);
