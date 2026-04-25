// GCC Government and Public Services by Country

export interface GovernmentService {
  id: string;
  key: string;
  name: string;
  nameAr: string;
  category: string;
  description?: string;
}

export const getGovernmentServicesByCountry = (countryCode: string): GovernmentService[] => {
  const services: Record<string, GovernmentService[]> = {
    SA: [
      { id: 'nafath', key: 'nafath', name: 'Nafath', nameAr: 'نفاذ', category: 'identity', description: 'النفاذ الوطني الموحد' },
      { id: 'absher', key: 'absher', name: 'Absher', nameAr: 'أبشر', category: 'identity', description: 'الخدمات الإلكترونية للأفراد' },
      { id: 'tawakkalna', key: 'tawakkalna', name: 'Tawakkalna', nameAr: 'توكلنا', category: 'identity', description: 'الهوية الرقمية المعتمدة' },
      { id: 'eithaq', key: 'eithaq', name: 'Eithaq', nameAr: 'إيثاق', category: 'identity', description: 'خدمات التوثيق الإلكتروني' },
      { id: 'etimad', key: 'etimad', name: 'Etimad', nameAr: 'اعتماد', category: 'identity', description: 'منصة الخدمات المالية الحكومية' },
      { id: 'mol', key: 'mol', name: 'Ministry of Labor', nameAr: 'وزارة الموارد البشرية', category: 'work_permits', description: 'تصاريح العمل والخدمات العمالية' },
      { id: 'moh', key: 'moh', name: 'Ministry of Health', nameAr: 'وزارة الصحة', category: 'medical', description: 'الخدمات الطبية والصحية' },
      { id: 'moe', key: 'moe', name: 'Ministry of Education', nameAr: 'وزارة التعليم', category: 'education', description: 'الخدمات التعليمية والأكاديمية' },
      { id: 'moi', key: 'moi', name: 'Ministry of Interior', nameAr: 'وزارة الداخلية', category: 'documents', description: 'الهوية الوطنية والوثائق' },
      { id: 'moj', key: 'moj', name: 'Ministry of Justice', nameAr: 'وزارة العدل', category: 'legal', description: 'الخدمات العدلية والقانونية' },
      { id: 'mcit', key: 'mcit', name: 'Ministry of Communications', nameAr: 'وزارة الاتصالات', category: 'telecom', description: 'خدمات الاتصالات والتقنية' },
      { id: 'moci', key: 'moci', name: 'Ministry of Commerce', nameAr: 'وزارة التجارة', category: 'business', description: 'السجل التجاري والتراخيص' },
      { id: 'hail', key: 'hail', name: 'Hail Municipality', nameAr: 'بلدية حائل', category: 'municipal', description: 'الخدمات البلدية' },
      { id: 'riyadh', key: 'riyadh', name: 'Riyadh Municipality', nameAr: 'بلدية الرياض', category: 'municipal', description: 'الخدمات البلدية' },
      { id: 'jeddah', key: 'jeddah', name: 'Jeddah Municipality', nameAr: 'بلدية جدة', category: 'municipal', description: 'الخدمات البلدية' }
    ],
    AE: [
      { id: 'uaepass', key: 'uaepass', name: 'UAE PASS', nameAr: 'UAE PASS', category: 'identity', description: 'الهوية الرقمية الوطنية' },
      { id: 'edirham', key: 'edirham', name: 'eDirham', nameAr: 'درهم إلكتروني', category: 'identity', description: 'منظومة الجيل القادم للتحصيل' },
      { id: 'ad-pay', key: 'ad-pay', name: 'Abu Dhabi Pay', nameAr: 'سداد أبوظبي', category: 'identity', description: 'منصة الدفع الرقمية الموحدة' },
      { id: 'dubai-pay', key: 'dubai-pay', name: 'Dubai Pay', nameAr: 'هوية دبي الرقمية', category: 'identity', description: 'بوابة الدفع الإلكتروني الموحدة' },
      { id: 'mohre', key: 'mohre', name: 'Ministry of Human Resources', nameAr: 'وزارة الموارد البشرية', category: 'work_permits', description: 'تصاريح العمل والموارد البشرية' },
      { id: 'mohap', key: 'mohap', name: 'Ministry of Health', nameAr: 'وزارة الصحة', category: 'medical', description: 'الخدمات الصحية والطبية' },
      { id: 'moe', key: 'moe', name: 'Ministry of Education', nameAr: 'وزارة التربية والتعليم', category: 'education', description: 'الخدمات التعليمية' },
      { id: 'ica', key: 'ica', name: 'Federal Authority for Identity', nameAr: 'الهيئة الاتحادية للهوية والجنسية', category: 'documents', description: 'الهوية والجنسية' },
      { id: 'dubai-municipality', key: 'dubai-municipality', name: 'Dubai Municipality', nameAr: 'بلدية دبي', category: 'municipal', description: 'الخدمات البلدية' },
      { id: 'abu-dhabi-municipality', key: 'abu-dhabi-municipality', name: 'Abu Dhabi Municipality', nameAr: 'بلدية أبوظبي', category: 'municipal', description: 'الخدمات البلدية' }
    ],
    KW: [
      { id: 'kuwait-mobile-id', key: 'kuwait-mobile-id', name: 'Kuwait Mobile ID', nameAr: 'هويتي', category: 'identity', description: 'الهوية الرقمية المعتمدة' },
      { id: 'sahel', key: 'sahel', name: 'Sahel', nameAr: 'سهل', category: 'identity', description: 'التطبيق الحكومي الموحد' },
      { id: 'tasdeed', key: 'tasdeed', name: 'Tasdeed', nameAr: 'تسديد', category: 'identity', description: 'نظام تسديد الخدمات الحكومية' },
      { id: 'mol-kw', key: 'mol-kw', name: 'Ministry of Labor', nameAr: 'وزارة العمل', category: 'work_permits', description: 'تصاريح العمل' },
      { id: 'moh-kw', key: 'moh-kw', name: 'Ministry of Health', nameAr: 'وزارة الصحة', category: 'medical', description: 'الخدمات الصحية' },
      { id: 'moe-kw', key: 'moe-kw', name: 'Ministry of Education', nameAr: 'وزارة التربية', category: 'education', description: 'الخدمات التعليمية' },
      { id: 'moi-kw', key: 'moi-kw', name: 'Ministry of Interior', nameAr: 'وزارة الداخلية', category: 'documents', description: 'الأمن العام والخدمات' },
      { id: 'moci-kw', key: 'moci-kw', name: 'Ministry of Commerce', nameAr: 'وزارة التجارة والصناعة', category: 'business', description: 'التجارة والشركات' },
      { id: 'paci', key: 'paci', name: 'Public Authority for Civil Information', nameAr: 'هيئة المعلومات المدنية', category: 'documents', description: 'البطاقة المدنية والوثائق' },
      { id: 'kuwait-municipality', key: 'kuwait-municipality', name: 'Kuwait Municipality', nameAr: 'بلدية الكويت', category: 'municipal', description: 'الخدمات البلدية' }
    ],
    QA: [
      { id: 'qdi', key: 'qdi', name: 'QDI', nameAr: 'QDI', category: 'identity', description: 'الهوية الرقمية القطرية' },
      { id: 'hukoomi', key: 'hukoomi', name: 'Hukoomi', nameAr: 'حكومي', category: 'identity', description: 'بوابة الخدمات الحكومية' },
      { id: 'mol-qa', key: 'mol-qa', name: 'Ministry of Labor', nameAr: 'وزارة العمل', category: 'work_permits', description: 'تصاريح العمل' },
      { id: 'moph', key: 'moph', name: 'Ministry of Public Health', nameAr: 'وزارة الصحة العامة', category: 'medical', description: 'الخدمات الصحية' },
      { id: 'moehe', key: 'moehe', name: 'Ministry of Education', nameAr: 'وزارة التعليم والتعليم العالي', category: 'education', description: 'الخدمات التعليمية' },
      { id: 'moi-qa', key: 'moi-qa', name: 'Ministry of Interior', nameAr: 'وزارة الداخلية', category: 'documents', description: 'الهوية والوثائق' },
      { id: 'moci-qa', key: 'moci-qa', name: 'Ministry of Commerce', nameAr: 'وزارة التجارة والصناعة', category: 'business', description: 'التجارة والصناعة' },
      { id: 'doha-municipality', key: 'doha-municipality', name: 'Doha Municipality', nameAr: 'بلدية الدوحة', category: 'municipal', description: 'الخدمات البلدية' }
    ],
    OM: [
      { id: 'rop-id', key: 'rop-id', name: 'ROP Digital ID', nameAr: 'ROP Digital ID', category: 'identity', description: 'الهوية الرقمية للشرطة' },
      { id: 'thiqah', key: 'thiqah', name: 'Thiqah', nameAr: 'ثقة', category: 'identity', description: 'نظام التصديق الإلكتروني' },
      { id: 'momr', key: 'momr', name: 'Ministry of Manpower', nameAr: 'وزارة القوى العاملة', category: 'work_permits', description: 'تصاريح العمل' },
      { id: 'moh-om', key: 'moh-om', name: 'Ministry of Health', nameAr: 'وزارة الصحة', category: 'medical', description: 'الخدمات الصحية' },
      { id: 'moe-om', key: 'moe-om', name: 'Ministry of Education', nameAr: 'وزارة التربية والتعليم', category: 'education', description: 'الخدمات التعليمية' },
      { id: 'roi', key: 'roi', name: 'Royal Oman Police', nameAr: 'شرطة عمان السلطانية', category: 'documents', description: 'الهوية والوثائق' },
      { id: 'moci-om', key: 'moci-om', name: 'Ministry of Commerce', nameAr: 'وزارة التجارة والصناعة', category: 'business', description: 'التجارة والصناعة' },
      { id: 'muscat-municipality', key: 'muscat-municipality', name: 'Muscat Municipality', nameAr: 'بلدية مسقط', category: 'municipal', description: 'الخدمات البلدية' }
    ],
    GEN: [
      { id: "chalets", key: "chalets", name: "Chalet Booking", nameAr: "حجز الشاليهات", category: "lifestyle" },
      { id: "contracts", key: "contracts", name: "Contracts & Agreements", nameAr: "العقود والاتفاقيات", category: "legal" },
      { id: "health", key: "health", name: "Health Services", nameAr: "الخدمات الصحية", category: "medical" },
      { id: "bills", key: "bills", name: "Local Bills", nameAr: "الفواتير المحلية", category: "finance" },
      { id: "logistics", key: "logistics", name: "Logistics Services", nameAr: "الخدمات اللوجستية", category: "shipping" }
    ],
    BH: [
      { id: 'ekey', key: 'ekey', name: 'eKey 2.0', nameAr: 'eKey 2.0', category: 'identity', description: 'المفتاح الإلكتروني' },
      { id: 'bahrain-hukoomti', key: 'bahrain-hukoomti', name: 'Hukoomti', nameAr: 'حكومتي', category: 'identity', description: 'بوابة الخدمات الإلكترونية' },
      { id: 'mol-bh', key: 'mol-bh', name: 'Ministry of Labor', nameAr: 'وزارة العمل', category: 'work_permits', description: 'تصاريح العمل' },
      { id: 'moh-bh', key: 'moh-bh', name: 'Ministry of Health', nameAr: 'وزارة الصحة', category: 'medical', description: 'الخدمات الصحية' },
      { id: 'moe-bh', key: 'moe-bh', name: 'Ministry of Education', nameAr: 'وزارة التربية والتعليم', category: 'education', description: 'الخدمات التعليمية' },
      { id: 'moi-bh', key: 'moi-bh', name: 'Ministry of Interior', nameAr: 'وزارة الداخلية', category: 'documents', description: 'الأمن والوثائق' },
      { id: 'moic-bh', key: 'moic-bh', name: 'Ministry of Industry', nameAr: 'وزارة الصناعة والتجارة', category: 'business', description: 'الصناعة والتجارة' },
      { id: 'iop', key: 'iop', name: 'Information & eGovernment Authority', nameAr: 'هيئة المعلومات والحكومة الإلكترونية', category: 'documents', description: 'الهوية والوثائق' },
      { id: 'manama-municipality', key: 'manama-municipality', name: 'Manama Municipality', nameAr: 'بلدية المنامة', category: 'municipal', description: 'الخدمات البلدية' }
    ]
  };

  return services[countryCode] || [];
};

export const getGovernmentServiceByKey = (key: string): GovernmentService | undefined => {
  const allServices = Object.values(getGovernmentServicesByCountry('SA'))
    .concat(Object.values(getGovernmentServicesByCountry('AE')))
    .concat(Object.values(getGovernmentServicesByCountry('KW')))
    .concat(Object.values(getGovernmentServicesByCountry('QA')))
    .concat(Object.values(getGovernmentServicesByCountry('OM')))
    .concat(Object.values(getGovernmentServicesByCountry('BH')));
  
  return allServices.find(s => s.key === key);
};
