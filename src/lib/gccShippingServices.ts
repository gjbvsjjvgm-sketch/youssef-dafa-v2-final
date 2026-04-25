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
    { id: "saee", key: "saee", name: "ساعي - Saee", description: "Saee Logistics", styling: { primary: "#FF6B00", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "aymakan", key: "aymakan", name: "أي مكان - Aymakan", description: "Aymakan Delivery", styling: { primary: "#2D2E83", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "barq", key: "barq", name: "برق - Barq", description: "Barq Express", styling: { primary: "#000000", secondary: "#FFD700", font: "Cairo" } },
    { id: "redbox", key: "redbox", name: "ريد بوكس - Redbox", description: "Smart Lockers", styling: { primary: "#E30613", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "jt_express", key: "jt_express", name: "J&T Express", description: "J&T Saudi", styling: { primary: "#FF0000", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "imile", key: "imile", name: "آي مايل - Imile", description: "Imile Saudi", styling: { primary: "#00B050", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "speedaf", key: "speedaf", name: "سبيداف - Speedaf", description: "Speedaf Logistics", styling: { primary: "#003399", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "mylerz", key: "mylerz", name: "مايلرز - Mylerz", description: "Mylerz Saudi", styling: { primary: "#FFD400", secondary: "#000000", font: "Cairo" } },
    { id: "labaih", key: "labaih", name: "لبيك - Labaih", description: "Labaih Delivery", styling: { primary: "#00A8E1", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "torod", key: "torod", name: "طرود - Torod", description: "Torod Shipping", styling: { primary: "#000000", secondary: "#FFFFFF", font: "Cairo" } }
  ],
  AE: [
    { id: "empost", key: "empost", name: "بريد الإمارات - Emirates Post", description: "Official UAE Post", styling: { primary: "#00732F", secondary: "#CE1126", font: "Cairo", logo: "/assets/branding/logo-emiratespost.png" } },
    { id: "fetchr", key: "fetchr", name: "فيتشر - Fetchr", description: "Fetchr UAE", styling: { primary: "#F26522", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "shyft", key: "shyft", name: "شيفت - Shyft", description: "Shyft UAE", styling: { primary: "#000000", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "noon_now", key: "noon_now", name: "نون ناو - Noon Now", description: "Noon Logistics", styling: { primary: "#FFE700", secondary: "#333333", font: "Cairo" } },
    { id: "quiqup", key: "quiqup", name: "كويك اب - Quiqup", description: "Quiqup UAE", styling: { primary: "#EE2D24", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "careem_box", key: "careem_box", name: "كريم بوكس - Careem Box", description: "Careem Logistics", styling: { primary: "#00C853", secondary: "#FFFFFF", font: "Cairo" } }
  ],
  KW: [
    { id: "kwpost", key: "kwpost", name: "البريد الكويتي - Kuwait Post", description: "Official Kuwait Post", styling: { primary: "#003D7A", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "postaplus", key: "postaplus", name: "بوستا بلس - PostaPlus", description: "PostaPlus Kuwait", styling: { primary: "#005596", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "mashkoor", key: "mashkoor", name: "مشكور - Mashkoor", description: "Mashkoor Delivery", styling: { primary: "#00B9FF", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "dhl_kw", key: "dhl", name: "دي إتش إل الكويت", description: "DHL Kuwait", styling: { primary: "#D2002E", secondary: "#FFCC01", font: "Cairo" } }
  ],
  QA: [
    { id: "qpost", key: "qpost", name: "بريد قطر - QPost", description: "Official Qatar Post", styling: { primary: "#8B1F41", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "snoonu", key: "snoonu", name: "سنونو - Snoonu", description: "Snoonu Logistics", styling: { primary: "#FF0000", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "rafeeq", key: "rafeeq", name: "رفيق - Rafeeq", description: "Rafeeq Qatar", styling: { primary: "#7F3F98", secondary: "#FFFFFF", font: "Cairo" } }
  ],
  BH: [
    { id: "bahpost", key: "bahpost", name: "بريد البحرين - Bahrain Post", description: "Official Bahrain Post", styling: { primary: "#E31E24", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "talabat_bh", key: "talabat", name: "طلبات البحرين", description: "Talabat Logistics", styling: { primary: "#FF5A00", secondary: "#FFFFFF", font: "Cairo" } }
  ],
  OM: [
    { id: "omanpost", key: "omanpost", name: "بريد عمان - Oman Post", description: "Official Oman Post", styling: { primary: "#003D7A", secondary: "#C8102E", font: "Cairo" } },
    { id: "asayad", key: "asayad", name: "أسياد - Asyad", description: "Asyad Logistics Official", styling: { primary: "#003D7A", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "otaxi", key: "otaxi", name: "أو تاكسي - O-Taxi", description: "O-Taxi Logistics", styling: { primary: "#F7941D", secondary: "#FFFFFF", font: "Cairo" } }
  ]
};

export const getServicesByCountry = (countryCode: string) => GCC_SHIPPING_SERVICES[countryCode] || [];
