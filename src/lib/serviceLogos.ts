// WORM_V2: FULL GCC UNIFIED SERVICE MATRIX
// This file centralizes ALL services: Identity, Shipping, Lifestyle, and Government.
export const serviceLogos: Record<string, { 
  logo: string; 
  colors: { primary: string; secondary: string }; 
  ogImage?: string; 
  heroImage?: string; 
  description?: string; 
  radius?: string; 
  font?: string; 
  nameAr?: string;
  category: 'identity' | 'shipping' | 'lifestyle' | 'government' 
}> = {
  // --- SAUDI ARABIA SERVICES ---
  sadad: {
    logo: "/assets/branding/logo-sadad.png",
    colors: { primary: "#F58220", secondary: "#E67317" },
    heroImage: "/assets/branding/hero-sadad.jpg",
    description: "نظام سداد للمدفوعات - بوابة السداد الرسمية للمملكة العربية السعودية",
    radius: "0px",
    font: "Neo Sans Arabic",
    nameAr: "نظام سداد",
    category: "government"
  },
  nafath: {
    logo: "/assets/branding/logo-nafath.png",
    colors: { primary: "#006A4D", secondary: "#00843D" },
    heroImage: "https://images.pexels.com/photos/6050430/pexels-photo-6050430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "نظام النفاذ الوطني الموحد - بوابة تسجيل الدخول الآمن للخدمات الحكومية",
    radius: "8px",
    font: "Cairo",
    nameAr: "نفاذ",
    category: "identity"
  },
  madmoun: {
    logo: "/assets/branding/logo-madmoun.png",
    colors: { primary: "#006A4D", secondary: "#00843D" },
    description: "منصة مضمون - لتوثيق العقود والتعاملات المالية الآمنة",
    radius: "8px",
    nameAr: "منصة مضمون",
    category: "government"
  },
  spl: {
    logo: "/assets/branding/logo-spl.png",
    colors: { primary: "#003D71", secondary: "#002A4E" },
    description: "سبل - البريد السعودي المطور والحلول اللوجستية",
    radius: "10px",
    nameAr: "سبل (البريد السعودي)",
    category: "shipping"
  },

  // --- UNITED ARAB EMIRATES SERVICES ---
  digital_id: {
    logo: "/assets/branding/logo-uae-pass.png",
    colors: { primary: "#000000", secondary: "#333333" },
    heroImage: "https://images.pexels.com/photos/7319290/pexels-photo-7319290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "الهوية الرقمية UAE PASS - الدخول الآمن للخدمات الحكومية والخاصة في الإمارات",
    radius: "12px",
    nameAr: "الهوية الرقمية",
    category: "identity"
  },
  dirham: {
    logo: "/assets/branding/logo-dirham.png",
    colors: { primary: "#B2904B", secondary: "#8E723C" },
    heroImage: "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "منصة درهم - حلول الدفع الرقمي والتحويلات المالية في الإمارات",
    radius: "10px",
    nameAr: "درهم",
    category: "identity"
  },
  jaywan: {
    logo: "/assets/branding/logo-uae-gov.png",
    colors: { primary: "#CE1126", secondary: "#00732F" },
    description: "جوان - بوابة الدفع الوطنية لدولة الإمارات",
    radius: "0px",
    nameAr: "جوان",
    category: "government"
  },

  // --- KUWAIT SERVICES ---
  knet: {
    logo: "/assets/branding/logo-knet.png",
    colors: { primary: "#007A33", secondary: "#004B1F" },
    heroImage: "/assets/branding/hero-knet.jpg",
    description: "كي نت - شركة شبكة المعلومات القانونية للدفع الإلكتروني",
    radius: "4px",
    nameAr: "كي نت",
    category: "government"
  },
  sahel: {
    logo: "/assets/branding/logo-sahel.png",
    colors: { primary: "#005596", secondary: "#003366" },
    heroImage: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "تطبيق سهل - المنصة الموحدة للخدمات الحكومية الكويتية",
    radius: "8px",
    nameAr: "سهل",
    category: "government"
  },

  // --- BAHRAIN SERVICES ---
  benefit: {
    logo: "/assets/branding/logo-benefitpay.png",
    colors: { primary: "#E31E24", secondary: "#B5121B" },
    heroImage: "https://images.pexels.com/photos/6771574/pexels-photo-6771574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "شركة بنفت - الحل الأمثل للمدفوعات الإلكترونية في مملكة البحرين",
    radius: "12px",
    nameAr: "بنفت",
    category: "government"
  },

  // --- SHIPPING & LOGISTICS (Original Cloned Styles) ---
  aramex: {
    logo: "/assets/branding/logo-aramex.png",
    colors: { primary: "#DC291E", secondary: "#8B1A12" },
    heroImage: "https://images.pexels.com/photos/6169052/pexels-photo-6169052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "أرامكس - توصيل سريع، تتبع دقيق، وحلول لوجستية متكاملة",
    radius: "0px",
    font: "Roboto",
    nameAr: "أرامكس",
    category: "shipping"
  },
  dhl: {
    logo: "/assets/branding/logo-dhl.png",
    colors: { primary: "#FFCC00", secondary: "#D40511" },
    heroImage: "/assets/branding/hero-dhl-bg.jpg",
    description: "DHL - التميز في الخدمات اللوجستية، توصيل عالمي موثوق",
    radius: "0px",
    font: "Delivery",
    nameAr: "DHL",
    category: "shipping"
  },
  fedex: {
    logo: "/assets/branding/logo-fedex.png",
    colors: { primary: "#4D148C", secondary: "#FF6600" },
    heroImage: "/assets/branding/hero-fedex-bg.jpg",
    description: "فيديكس - العالم في الوقت المحدد، شحن دولي ومحلي فائق السرعة",
    radius: "4px",
    font: "FedEx Sans",
    nameAr: "فيديكس",
    category: "shipping"
  },
  ups: {
    logo: "/assets/branding/logo-ups.png",
    colors: { primary: "#351C15", secondary: "#FFB500" },
    description: "UPS - شحن، تتبع، وتوصيل طرود بكفاءة عالية",
    radius: "4px",
    nameAr: "UPS",
    category: "shipping"
  },

  // --- LIFESTYLE & TRAVEL ---
  chalets: {
    logo: "https://cdn-icons-png.flaticon.com/512/2321/2321430.png",
    colors: { primary: "#008CBA", secondary: "#005F7F" },
    heroImage: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "بوابة حجز الشاليهات والاستراحات - سدد قيمة حجزك بأمان",
    radius: "15px",
    nameAr: "حجز الشاليهات",
    category: "lifestyle"
  }
};

export const getServiceBranding = (serviceName: string) => {
  const key = serviceName.toLowerCase();
  return serviceLogos[key] || {
    logo: "",
    colors: { primary: "#EF7622", secondary: "#D65C0F" },
    heroImage: "/assets/branding/hero-payment-secure.jpg",
    nameAr: "بوابة دفع آمنة",
    category: "government"
  };
};
