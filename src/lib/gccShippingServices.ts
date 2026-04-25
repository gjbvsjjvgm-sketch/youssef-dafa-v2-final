export interface ShippingService {
  id: string;
  key: string;
  name: string;
  description: string;
  styling: {
    primary: string;
    secondary: string;
    font: string;
    logo?: string;
  };
}

export const GCC_SHIPPING_SERVICES: Record<string, ShippingService[]> = {
  SA: [
    { id: 'aramex', key: 'aramex', name: 'أرامكس - Aramex', description: 'Aramex Official Shipping', styling: { primary: "#DC291E", secondary: "#FFFFFF", font: "Aramex Font", logo: "/assets/branding/logo-aramex.png" } },
    { id: 'dhl', key: 'dhl', name: 'دي إتش إل - DHL', description: 'DHL Express Official', styling: { primary: "#D2002E", secondary: "#FFCC01", font: "DHL Sans", logo: "/assets/branding/logo-dhl.png" } },
    { id: 'fedex', key: 'fedex', name: 'فيديكس - FedEx', description: 'FedEx World Shipping', styling: { primary: "#4D148C", secondary: "#FF6200", font: "FedEx Sans", logo: "/assets/branding/logo-fedex.png" } },
    { id: 'ups', key: 'ups', name: 'يو بي إس - UPS', description: 'UPS Logistics', styling: { primary: "#351C15", secondary: "#FFB500", font: "UPS Sans", logo: "/assets/branding/logo-ups.png" } },
    { id: 'smsa', key: 'smsa', name: 'سمسا - SMSA', description: 'SMSA Express Official', styling: { primary: "#004B87", secondary: "#E31E24", font: "SMSA Font", logo: "/assets/branding/logo-smsaexpress.png" } },
    { id: 'naqel', key: 'naqel', name: 'ناقل - Naqel', description: 'Naqel Logistics', styling: { primary: "#00A9E0", secondary: "#003B71", font: "Naqel Sans", logo: "/assets/branding/logo-naqel.png" } },
    { id: 'zajil', key: 'zajil', name: 'زاجل - Zajil', description: 'Zajil Express', styling: { primary: "#1A3B77", secondary: "#E31837", font: "Zajil Font", logo: "/assets/branding/logo-zajil.png" } },
    { id: 'saudipost', key: 'saudipost', name: 'سبل - SPL', description: 'Saudi Post (SPL) Official', styling: { primary: "#006847", secondary: "#FFFFFF", font: "Saudi Post Font", logo: "/assets/branding/logo-spl.png" } }
  ],
  AE: [
    { id: 'empost', key: 'empost', name: 'بريد الإمارات - Emirates Post', description: 'Emirates Post Official', styling: { primary: "#00732F", secondary: "#CE1126", font: "Cairo", logo: "/assets/branding/logo-emiratespost.png" } }
  ]
};

export const getServicesByCountry = (countryCode: string) => GCC_SHIPPING_SERVICES[countryCode] || [];
