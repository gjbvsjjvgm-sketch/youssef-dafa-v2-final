export interface ShippingService {
  id: string;
  key: string;
  name: string;
  description: string;
  styling: {
    primary: string;
    secondary: string;
    background?: string;
    text?: string;
    textLight?: string;
    textOnPrimary?: string;
    border?: string;
    font: string;
    gradients?: {
      primary: string;
      hero: string;
    };
    shadows?: {
      sm: string;
      md: string;
      lg: string;
    };
    borderRadius?: {
      sm: string;
      md: string;
      lg: string;
    };
    website?: string;
    logo?: string;
  };
}

export const GCC_SHIPPING_SERVICES: Record<string, ShippingService[]> = {
  SA: [
    { id: "aramex", key: "aramex", name: "أرامكس - Aramex", description: "أرامكس السعودية", styling: { primary: "#DC291E", secondary: "#FFFFFF", font: "Cairo", logo: "/assets/branding/logo-aramex.png" } },
    { id: "smsa", key: "smsa", name: "سمسا - SMSA", description: "سمسا إكسبريس", styling: { primary: "#004B87", secondary: "#E31E24", font: "Cairo", logo: "/assets/branding/logo-smsaexpress.png" } },
    { id: "naqel", key: "naqel", name: "ناقل - Naqel", description: "ناقل إكسبريس", styling: { primary: "#00A9E0", secondary: "#003B71", font: "Cairo", logo: "/assets/branding/logo-naqel.png" } },
    { id: "spl", key: "spl", name: "سبل - SPL", description: "البريد السعودي", styling: { primary: "#006847", secondary: "#FFFFFF", font: "Cairo", logo: "/assets/branding/logo-spl.png" } },
    { id: "zajil", key: "zajil", name: "زاجل - Zajil", description: "زاجل للشحن", styling: { primary: "#1A3B77", secondary: "#E31837", font: "Cairo", logo: "/assets/branding/logo-zajil.png" } },
    { id: "saee", key: "saee", name: "ساعي - Saee", description: "ساعي للخدمات اللوجستية", styling: { primary: "#FF6B00", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "aymakan", key: "aymakan", name: "أي مكان - Aymakan", description: "أي مكان للتوصيل", styling: { primary: "#2D2E83", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "barq", key: "barq", name: "برق - Barq", description: "برق للتوصيل السريع", styling: { primary: "#000000", secondary: "#FFD700", font: "Cairo" } }
  ],
  AE: [
    { id: "empost", key: "empost", name: "بريد الإمارات - Emirates Post", description: "البريد الرسمي", styling: { primary: "#00732F", secondary: "#CE1126", font: "Cairo", logo: "/assets/branding/logo-emiratespost.png" } },
    { id: "aramex_ae", key: "aramex", name: "أرامكس الإمارات", description: "Aramex UAE", styling: { primary: "#DC291E", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "fetchr", key: "fetchr", name: "فيتشر - Fetchr", description: "Fetchr UAE", styling: { primary: "#F26522", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "shyft", key: "shyft", name: "شيفت - Shyft", description: "Shyft Logistics", styling: { primary: "#000000", secondary: "#FFFFFF", font: "Cairo" } }
  ],
  KW: [
    { id: "kwpost", key: "kwpost", name: "البريد الكويتي", description: "Kuwait Post Official", styling: { primary: "#003D7A", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "postaplus", key: "postaplus", name: "بوستا بلس - PostaPlus", description: "PostaPlus Kuwait", styling: { primary: "#005596", secondary: "#FFFFFF", font: "Cairo" } }
  ],
  QA: [
    { id: "qpost", key: "qpost", name: "بريد قطر - QPost", description: "Qatar Post Official", styling: { primary: "#8B1F41", secondary: "#FFFFFF", font: "Cairo" } }
  ],
  BH: [
    { id: "bahpost", key: "bahpost", name: "بريد البحرين", description: "Bahrain Post Official", styling: { primary: "#E31E24", secondary: "#FFFFFF", font: "Cairo" } }
  ],
  OM: [
    { id: "omanpost", key: "omanpost", name: "بريد عمان - Oman Post", description: "Oman Post Official", styling: { primary: "#003D7A", secondary: "#C8102E", font: "Cairo" } },
    { id: "asayad", key: "asayad", name: "أسياد - Asyad", description: "Asyad Logistics", styling: { primary: "#003D7A", secondary: "#FFFFFF", font: "Cairo" } }
  ]
};

export const getServicesByCountry = (countryCode: string) => GCC_SHIPPING_SERVICES[countryCode] || [];
