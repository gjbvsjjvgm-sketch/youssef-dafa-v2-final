export interface ServiceBranding {
  logo: string;
  colors: { primary: string; secondary: string };
  nameAr: string;
  category: string;
  font?: string;
  radius?: string;
}

export const serviceLogos: Record<string, ServiceBranding> = {
  sadad: { logo: "/assets/branding/logo-sadad.png", colors: { primary: "#F58220", secondary: "#E67317" }, nameAr: "سداد (SA)", category: "government" },
  jaywan: { logo: "/assets/branding/logo-jaywan.png", colors: { primary: "#CE1126", secondary: "#00732F" }, nameAr: "جيوان (AE)", category: "government" },
  knet: { logo: "/assets/branding/logo-knet.png", colors: { primary: "#007A33", secondary: "#004B1F" }, nameAr: "كي نت (KW)", category: "government" },
  qpay: { logo: "/assets/branding/logo-qpay-com-qa.png", colors: { primary: "#8B1F41", secondary: "#C8102E" }, nameAr: "بوابة الدفع القطرية (QA)", category: "government" },
  oman_net: { logo: "/assets/branding/logo-oman-net.png", colors: { primary: "#003D7A", secondary: "#C8102E" }, nameAr: "عُمان نت (OM)", category: "government" },
  benefit: { logo: "/assets/branding/logo-benefit-bh.png", colors: { primary: "#E31E24", secondary: "#B5121B" }, nameAr: "بنفت (BH)", category: "government" },
  aramex: { logo: "/assets/branding/logo-aramex.png", colors: { primary: "#DC291E", secondary: "#FFFFFF" }, nameAr: "Aramex", category: "shipping" },
  dhl: { logo: "/assets/branding/logo-dhl.png", colors: { primary: "#D2002E", secondary: "#FFCC01" }, nameAr: "DHL", category: "shipping" },
  nafath: { logo: "/assets/branding/logo-nafath.png", colors: { primary: "#1A3B77", secondary: "#D4AF37" }, nameAr: "نفاذ (SA)", category: "identity" },
  absher: { logo: "/assets/branding/logo-absher.png", colors: { primary: "#003D7A", secondary: "#A9855A" }, nameAr: "أبشر (SA)", category: "identity" },
  uaepass: { logo: "/assets/branding/logo-uae-gov.png", colors: { primary: "#CE1126", secondary: "#000000" }, nameAr: "UAE PASS (AE)", category: "identity" }
};

export const getServiceBranding = (serviceKey: string): ServiceBranding => {
  return serviceLogos[serviceKey.toLowerCase()] || serviceLogos['sadad'];
};
