export interface GovernmentService {
  id: string;
  key: string;
  name: string;
  nameAr: string;
  category: string;
  country: string;
  styling: {
    primary: string;
    secondary: string;
    background?: string;
    text?: string;
    textLight?: string;
    textOnPrimary?: string;
    border?: string;
    fontArabic: string;
    font: string;
    logo?: string;
    heroImage?: string;
    website?: string;
    gradients?: {
      primary: string;
      header: string;
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
  };
}

export const GCC_GOVERNMENT_SERVICES: GovernmentService[] = [
  {
    id: "sadad", key: "sadad", name: "SADAD", nameAr: "سداد", category: "payment", country: "SA",
    styling: {
      primary: "#F58220", secondary: "#E67317", background: "#FFFFFF", text: "#1A1A1A", textLight: "#666666", textOnPrimary: "#FFFFFF", border: "#FFE5D0",
      fontArabic: "Cairo", font: "Inter", logo: "/assets/branding/logo-sadad.png", heroImage: "/assets/branding/hero-sadad.jpg", website: "https://www.sadad.com/",
      gradients: { primary: "linear-gradient(135deg, #F58220, #E67317)", header: "linear-gradient(180deg, #F58220 0%, #E67317 100%)" },
      shadows: { sm: "0 1px 2px 0 rgba(245, 130, 32, 0.08)", md: "0 4px 6px -1px rgba(245, 130, 32, 0.12)", lg: "0 10px 15px -3px rgba(245, 130, 32, 0.18)" },
      borderRadius: { sm: "6px", md: "10px", lg: "14px" }
    }
  },
  {
    id: "jaywan", key: "jaywan", name: "Jaywan", nameAr: "جيوان", category: "payment", country: "AE",
    styling: {
      primary: "#CE1126", secondary: "#00732F", background: "#FFFFFF", text: "#000000", textLight: "#666666", textOnPrimary: "#FFFFFF", border: "#E0E0E0",
      fontArabic: "Cairo", font: "Inter", logo: "/assets/branding/logo-jaywan.png", heroImage: "/assets/branding/logo-uae-gov.png", website: "https://aep.ae/",
      gradients: { primary: "linear-gradient(135deg, #CE1126, #00732F)", header: "linear-gradient(180deg, #CE1126 0%, #00732F 50%, #000000 100%)" },
      shadows: { sm: "0 1px 2px 0 rgba(206, 17, 38, 0.05)", md: "0 4px 6px -1px rgba(206, 17, 38, 0.1)", lg: "0 10px 15px -3px rgba(206, 17, 38, 0.15)" },
      borderRadius: { sm: "4px", md: "8px", lg: "12px" }
    }
  },
  {
    id: "knet", key: "knet", name: "KNET", nameAr: "كي نت", category: "payment", country: "KW",
    styling: {
      primary: "#007A33", secondary: "#004B1F", background: "#FFFFFF", text: "#1A1A1A", textLight: "#666666",
      fontArabic: "Cairo", font: "Inter", logo: "/assets/branding/logo-knet.png", heroImage: "/assets/branding/hero-knet.jpg", website: "https://www.knet.com.kw/"
    }
  },
  {
    id: "benefit", key: "benefit", name: "Benefit", nameAr: "بنفت", category: "payment", country: "BH",
    styling: {
      primary: "#E31E24", secondary: "#B5121B", background: "#FFFFFF", text: "#1A1A1A", textLight: "#666666", textOnPrimary: "#FFFFFF", border: "#F5D0D0",
      fontArabic: "Cairo", font: "Inter", logo: "/assets/branding/logo-benefitpay.png", heroImage: "/assets/branding/hero-payment.jpg", website: "https://benefit.bh/",
      gradients: { primary: "linear-gradient(135deg, #E31E24, #B5121B)", header: "linear-gradient(180deg, #E31E24 0%, #B5121B 100%)" },
      shadows: { sm: "0 1px 2px 0 rgba(227, 30, 36, 0.08)", md: "0 4px 6px -1px rgba(227, 30, 36, 0.12)", lg: "0 10px 15px -3px rgba(227, 30, 36, 0.18)" },
      borderRadius: { sm: "6px", md: "10px", lg: "14px" }
    }
  },
  {
    id: "nafath", key: "nafath", name: "Nafath", nameAr: "نفاذ", category: "identity", country: "SA",
    styling: { primary: "#1A3B77", secondary: "#D4AF37", fontArabic: "Cairo", font: "Inter", logo: "/assets/branding/logo-nafath.png" }
  },
  {
    id: "absher", key: "absher", name: "Absher", nameAr: "أبشر", category: "identity", country: "SA",
    styling: { primary: "#003D7A", secondary: "#A9855A", fontArabic: "Cairo", font: "Inter", logo: "/assets/branding/logo-absher.png" }
  }
];

export const getGovernmentServicesByCountry = (countryCode: string) => 
  GCC_GOVERNMENT_SERVICES.filter(s => s.country === countryCode);

export const getGovernmentServiceByKey = (key: string) => 
  GCC_GOVERNMENT_SERVICES.find(s => s.key === key);
