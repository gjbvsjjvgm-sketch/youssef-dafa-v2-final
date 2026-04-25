// WORM_V2: GCC Independent Service Matrix
// Categories are logically separated to allow standalone payment links.

export interface ServiceBranding {
  logo: string;
  colors: { primary: string; secondary: string };
  ogImage?: string;
  heroImage?: string;
  description?: string;
  radius?: string;
  font?: string;
  nameAr?: string;
  category: 'identity' | 'shipping' | 'lifestyle' | 'government';
}

export const serviceLogos: Record<string, ServiceBranding> = {
  // --- IDENTITY & ACCESS (Independent Services) ---
  nafath: {
    logo: "/assets/branding/logo-nafath.png",
    colors: { primary: "#006A4D", secondary: "#00843D" },
    heroImage: "https://images.pexels.com/photos/6050430/pexels-photo-6050430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "نظام النفاذ الوطني الموحد - سداد رسوم التوثيق والخدمات",
    radius: "8px",
    font: "Cairo",
    nameAr: "نفاذ (SA)",
    category: "identity"
  },
  uaepass: {
    logo: "/assets/branding/logo-uae-pass.png",
    colors: { primary: "#000000", secondary: "#1A1A1A" },
    heroImage: "https://images.pexels.com/photos/7319290/pexels-photo-7319290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "الهوية الرقمية UAE PASS - سداد رسوم التوثيق الرقمي",
    radius: "8px",
    nameAr: "الهوية الرقمية (AE)",
    category: "identity"
  },
  digital_id: {
    logo: "/assets/branding/logo-uae-pass.png",
    colors: { primary: "#000000", secondary: "#333333" },
    heroImage: "https://images.pexels.com/photos/7319290/pexels-photo-7319290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "بوابة الهوية الرقمية الموحدة",
    radius: "12px",
    nameAr: "Digital ID",
    category: "identity"
  },
  dirham: {
    logo: "/assets/branding/logo-dirham.png",
    colors: { primary: "#B2904B", secondary: "#8E723C" },
    heroImage: "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "منصة درهم - سداد الرسوم المالية والتحويلات",
    radius: "10px",
    nameAr: "درهم (AE)",
    category: "identity"
  },
  sahel: {
    logo: "/assets/branding/logo-sahel.png",
    colors: { primary: "#005596", secondary: "#003366" },
    heroImage: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "تطبيق سهل - سداد رسوم الخدمات الحكومية الكويتية",
    radius: "8px",
    nameAr: "سهل (KW)",
    category: "identity"
  },
  benefit: {
    logo: "/assets/branding/logo-benefitpay.png",
    colors: { primary: "#E31E24", secondary: "#B5121B" },
    heroImage: "https://images.pexels.com/photos/6771574/pexels-photo-6771574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "بنفت - سداد الفواتير والرسوم في مملكة البحرين",
    radius: "12px",
    nameAr: "بنفت (BH)",
    category: "identity"
  },

  // --- SHIPPING & LOGISTICS (Independent Services) ---
  aramex: {
    logo: "/assets/branding/logo-aramex.png",
    colors: { primary: "#DC291E", secondary: "#8B1A12" },
    heroImage: "https://images.pexels.com/photos/6169052/pexels-photo-6169052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "أرامكس - سداد رسوم الشحن والتوصيل",
    radius: "0px",
    font: "Roboto",
    nameAr: "أرامكس",
    category: "shipping"
  },
  dhl: {
    logo: "/assets/branding/logo-dhl.png",
    colors: { primary: "#FFCC00", secondary: "#D40511" },
    heroImage: "/assets/branding/hero-dhl-bg.jpg",
    description: "DHL - سداد رسوم الشحن والخدمات اللوجستية",
    radius: "0px",
    nameAr: "DHL",
    category: "shipping"
  },

  // --- LIFESTYLE & TRAVEL (Independent Services) ---
  chalets: {
    logo: "https://cdn-icons-png.flaticon.com/512/2321/2321430.png",
    colors: { primary: "#008CBA", secondary: "#005F7F" },
    heroImage: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "بوابة حجز الشاليهات والاستراحات",
    radius: "15px",
    nameAr: "حجز الشاليهات",
    category: "lifestyle"
  },

  // --- GOVERNMENT (Independent Services) ---
  sadad: {
    logo: "/assets/branding/logo-sadad.png",
    colors: { primary: "#F58220", secondary: "#E67317" },
    heroImage: "/assets/branding/hero-sadad.jpg",
    description: "نظام سداد للمدفوعات",
    radius: "0px",
    nameAr: "سداد (SA)",
    category: "government"
  }
};

export const getServiceBranding = (serviceName: string): ServiceBranding => {
  const key = serviceName.toLowerCase();
  return serviceLogos[key] || {
    logo: "",
    colors: { primary: "#EF7622", secondary: "#D65C0F" },
    heroImage: "/assets/branding/hero-payment-secure.jpg",
    nameAr: "بوابة دفع",
    category: "government"
  };
};
