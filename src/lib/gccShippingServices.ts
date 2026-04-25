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
    { id: "aramex", key: "aramex", name: "أرامكس - Aramex", description: "Aramex Saudi Official", styling: { primary: "#DC291E", secondary: "#FFFFFF", font: "Cairo", logo: "/assets/branding/logo-aramex.png" } },
    { id: "smsa", key: "smsa", name: "سمسا - SMSA", description: "SMSA Express Official", styling: { primary: "#004B87", secondary: "#E31E24", font: "Cairo", logo: "/assets/branding/logo-smsaexpress.png" } },
    { id: "naqel", key: "naqel", name: "ناقل - Naqel", description: "Naqel Express Official", styling: { primary: "#00A9E0", secondary: "#003B71", font: "Cairo", logo: "/assets/branding/logo-naqel.png" } },
    { id: "spl", key: "spl", name: "سبل - SPL", description: "Saudi Post Official", styling: { primary: "#006847", secondary: "#FFFFFF", font: "Cairo", logo: "/assets/branding/logo-spl.png" } },
    { id: "zajil", key: "zajil", name: "زاجل - Zajil", description: "Zajil Express Official", styling: { primary: "#1A3B77", secondary: "#E31837", font: "Cairo", logo: "/assets/branding/logo-zajil.png" } },
    { id: "saudipost", key: "saudipost", name: "البريد السعودي", description: "SPL Logistics", styling: { primary: "#006847", secondary: "#FFFFFF", font: "Cairo" } }
  ],
  AE: [
    { id: "empost", key: "empost", name: "بريد الإمارات - Emirates Post", description: "Official UAE Post", styling: { primary: "#00732F", secondary: "#CE1126", font: "Cairo", logo: "/assets/branding/logo-emiratespost.png" } },
    { id: "albaraka", key: "albaraka", name: "مجموعة البركة", description: "Al Baraka AE", styling: { primary: "#D89A00", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "alfuttaim", key: "alfuttaim", name: "مجموعة الفطيم", description: "Al Futtaim AE", styling: { primary: "#00559B", secondary: "#FFFFFF", font: "Cairo" } }
  ],
  KW: [
    { id: "kwpost", key: "kwpost", name: "البريد الكويتي - Kuwait Post", description: "Official Kuwait Post", styling: { primary: "#003D7A", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "agility", key: "agility", name: "أجيليتي - Agility", description: "Agility Logistics KW", styling: { primary: "#000000", secondary: "#FFFFFF", font: "Cairo" } }
  ],
  QA: [
    { id: "qpost", key: "qpost", name: "بريد قطر - QPost", description: "Official Qatar Post", styling: { primary: "#8B1F41", secondary: "#FFFFFF", font: "Cairo" } }
  ],
  OM: [
    { id: "omanpost", key: "omanpost", name: "بريد عمان - Oman Post", description: "Official Oman Post", styling: { primary: "#003D7A", secondary: "#C8102E", font: "Cairo" } },
    { id: "jinaken", name: "Genacom", key: "genacom", description: "Genacom Logistics OM", styling: { primary: "#E82424", secondary: "#F7C24A", font: "Cairo" } }
  ],
  BH: [
    { id: "bahpost", key: "bahpost", name: "بريد البحرين - Bahrain Post", description: "Official Bahrain Post", styling: { primary: "#E31E24", secondary: "#FFFFFF", font: "Cairo" } }
  ]
};

export const getServicesByCountry = (countryCode: string) => GCC_SHIPPING_SERVICES[countryCode] || [];
