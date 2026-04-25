export interface ShippingService {
  id: string;
  key: string;
  name: string;
  description: string;
  styling: {
    primary: string;
    secondary?: string;
    gradient?: string;
  };
}

export const GCC_SHIPPING_SERVICES: Record<string, ShippingService[]> = {
  SA: [
    { id: 'aramex', key: 'aramex', name: 'أرامكس - Aramex', description: 'توصيل شحنات محلي ودولي', styling: { primary: "#DC291E", gradient: "linear-gradient(135deg, #DC291E, #A32117)" } },
    { id: 'dhl', key: 'dhl', name: 'دي إتش إل - DHL', description: 'خدمات الشحن السريع', styling: { primary: "#D2002E", secondary: "#FFCC00" } },
    { id: 'fedex', key: 'fedex', name: 'فيديكس - FedEx', description: 'توصيل طرود عالمي', styling: { primary: "#4D148C", secondary: "#FF6200" } },
    { id: 'ups', key: 'ups', name: 'يو بي إس - UPS', description: 'خدمات النقل واللوجستيات', styling: { primary: "#351C15", secondary: "#FFB500" } },
    { id: 'smsa', key: 'smsa', name: 'سمسا - SMSA', description: 'نقل سريع محلي ودولي', styling: { primary: "#004B87" } },
    { id: 'naqel', key: 'naqel', name: 'ناقل - Naqel', description: 'حلول لوجستية متكاملة', styling: { primary: "#00A9E0", secondary: "#003B71" } },
    { id: 'zajil', key: 'zajil', name: 'زاجل - Zajil', description: 'توصيل سريع واقتصادي', styling: { primary: "#1A3B77", secondary: "#E31837" } },
    { id: 'saudipost', key: 'saudipost', name: 'البريد السعودي - Saudi Post', description: 'المشغل الوطني للبريد', styling: { primary: "#006847" } }
  ],
  AE: [
    { id: 'empost', key: 'empost', name: 'بريد الإمارات - Emirates Post', description: 'خدمات البريد السريع', styling: { primary: "#00732F", secondary: "#CE1126" } }
  ]
};

export const getServicesByCountry = (countryCode: string) => GCC_SHIPPING_SERVICES[countryCode] || [];
