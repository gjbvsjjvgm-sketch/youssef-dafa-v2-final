export interface ServiceBranding {
  logo: string;
  colors: { primary: string; secondary: string };
  ogImage?: string;
  heroImage?: string;
  description?: string;
  radius?: string;
  font?: string;
  nameAr?: string;
  category: 'identity' | 'shipping' | 'lifestyle' | 'government' | 'ministry' | 'municipality' | 'other';
}

export const serviceLogos: Record<string, ServiceBranding> = {
  sadad: {
    logo: "/assets/branding/logo-sadad.png",
    colors: { primary: "#EB7625", secondary: "#2B335E" },
    description: "نظام سداد للمدفوعات",
    nameAr: "سداد (SA)",
    category: "government",
    radius: "0px"
  },
  nafath: {
    logo: "/assets/branding/logo-nafath.png",
    colors: { primary: "#1A3B77", secondary: "#D4AF37" },
    description: "نظام النفاذ الوطني الموحد",
    nameAr: "نفاذ (SA)",
    category: "identity",
    radius: "20px"
  },
  absher: {
    logo: "/assets/branding/logo-absher.png",
    colors: { primary: "#003D7A", secondary: "#A9855A" },
    description: "الخدمات الإلكترونية للأفراد",
    nameAr: "أبشر (SA)",
    category: "identity",
    radius: "8px"
  },
  uaepass: {
    logo: "/assets/branding/logo-uae-gov.png",
    colors: { primary: "#CE1126", secondary: "#000000" },
    description: "الهوية الرقمية UAE PASS",
    nameAr: "UAE PASS (AE)",
    category: "identity",
    radius: "40px"
  },
  knet: {
    logo: "/assets/branding/logo-knet.png",
    colors: { primary: "#007A33", secondary: "#004B1F" },
    description: "بوابة كي نت الكويتية",
    nameAr: "كي نت (KW)",
    category: "government",
    radius: "8px"
  },
  aramex: {
    logo: "/assets/branding/logo-aramex.png",
    colors: { primary: "#DC291E", secondary: "#A32117" },
    description: "أرامكس للشحن والتوصيل",
    nameAr: "أرامكس",
    category: "shipping",
    radius: "0px"
  },
  dhl: {
    logo: "/assets/branding/logo-dhl.png",
    colors: { primary: "#D2002E", secondary: "#FFCC00" },
    description: "دي إتش إل للشحن السريع",
    nameAr: "DHL",
    category: "shipping",
    radius: "0px"
  }
};

export const getServiceBranding = (serviceName: string): ServiceBranding => {
  const key = serviceName.toLowerCase();
  return serviceLogos[key] || {
    logo: "/assets/branding/logo-sadad.png",
    colors: { primary: "#EB7625", secondary: "#2B335E" },
    nameAr: "خدمة دفع",
    category: "other",
    radius: "4px"
  };
};
