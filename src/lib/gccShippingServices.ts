export interface ShippingService {
  id: string;
  key: string;
  name: string;
  description: string;
  styling: {
    primary: string;
    secondary: string;
    font: string;
  };
}

export const GCC_SHIPPING_SERVICES: Record<string, ShippingService[]> = {
  SA: [
    { id: 'aramex', key: 'aramex', name: 'Aramex', description: 'الشحن مع أرامكس', styling: { primary: "#DC291E", secondary: "#FFFFFF", font: "Aramex Font" } },
    { id: 'dhl', key: 'dhl', name: 'DHL', description: 'الشحن مع دي إتش إل', styling: { primary: "#D2002E", secondary: "#FFCC01", font: "DHL Sans" } },
    { id: 'fedex', key: 'fedex', name: 'FedEx', description: 'الشحن مع فيديكس', styling: { primary: "#4D148C", secondary: "#FF6200", font: "FedEx Sans" } },
    { id: 'ups', key: 'ups', name: 'UPS', description: 'الشحن مع يو بي إس', styling: { primary: "#351C15", secondary: "#FFB500", font: "UPS Sans" } },
    { id: 'smsa', key: 'smsa', name: 'SMSA', description: 'الشحن مع سمسا', styling: { primary: "#004B87", secondary: "#E31E24", font: "SMSA Font" } },
    { id: 'naqel', key: 'naqel', name: 'Naqel', description: 'الشحن مع ناقل', styling: { primary: "#00A9E0", secondary: "#003B71", font: "Naqel Sans" } },
    { id: 'zajil', key: 'zajil', name: 'Zajil', description: 'الشحن مع زاجل', styling: { primary: "#1A3B77", secondary: "#E31837", font: "Zajil Font" } },
    { id: 'saudipost', key: 'saudipost', name: 'Saudi Post', description: 'الشحن مع البريد السعودي', styling: { primary: "#006847", secondary: "#FFFFFF", font: "Saudi Post Font" } }
  ],
  AE: [
    { id: 'empost', key: 'empost', name: 'Emirates Post', description: 'الشحن مع بريد الإمارات', styling: { primary: "#00732F", secondary: "#CE1126", font: "Cairo" } }
  ]
};

export const getServicesByCountry = (countryCode: string) => GCC_SHIPPING_SERVICES[countryCode] || [];
