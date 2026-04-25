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
    { 
      id: "aramex", key: "aramex", name: "أرامكس", description: "Aramex Official Shipping",
      styling: { primary: "#DC291E", secondary: "#FFFFFF", background: "#FFFFFF", text: "#1A1A1A", textLight: "#666666", textOnPrimary: "#FFFFFF", border: "#E5E5E5", font: "Cairo", logo: "/assets/branding/logo-aramex.png",
        gradients: { primary: "linear-gradient(135deg, #DC291E 0%, #A32117 100%)", hero: "linear-gradient(to right, #DC291E 0%, #A32117 100%)" },
        shadows: { sm: "0 1px 2px 0 rgba(220, 41, 30, 0.08)", md: "0 4px 6px -1px rgba(220, 41, 30, 0.15)", lg: "0 10px 15px -3px rgba(220, 41, 30, 0.20)" },
        borderRadius: { sm: "4px", md: "8px", lg: "12px" }, website: "https://www.aramex.com"
      }
    },
    { 
      id: "smsa", key: "smsa", name: "سمسا", description: "SMSA Official Shipping",
      styling: { primary: "#004B87", secondary: "#E31E24", background: "#FFFFFF", text: "#1A1A1A", textLight: "#666666", textOnPrimary: "#FFFFFF", border: "#D0E0F0", font: "Cairo", logo: "/assets/branding/logo-smsaexpress.png",
        gradients: { primary: "linear-gradient(135deg, #004B87, #003366)", hero: "linear-gradient(90deg, #004B87 0%, #E31E24 100%)" },
        shadows: { sm: "0 1px 2px 0 rgba(0, 75, 135, 0.08)", md: "0 4px 6px -1px rgba(0, 75, 135, 0.12)", lg: "0 10px 15px -3px rgba(0, 75, 135, 0.18)" },
        borderRadius: { sm: "4px", md: "8px", lg: "12px" }, website: "https://www.smsa.com.sa"
      }
    },
    { 
      id: "naqel", key: "naqel", name: "ناقل", description: "Naqel Official Shipping",
      styling: { primary: "#00A9E0", secondary: "#003B71", background: "#FFFFFF", text: "#1A1A1A", textLight: "#666666", textOnPrimary: "#FFFFFF", border: "#C0E8F5", font: "Cairo", logo: "/assets/branding/logo-naqel.png",
        gradients: { primary: "linear-gradient(135deg, #00A9E0, #003B71)", hero: "linear-gradient(90deg, #00A9E0 0%, #003B71 100%)" },
        shadows: { sm: "0 1px 2px 0 rgba(0, 169, 224, 0.08)", md: "0 4px 6px -1px rgba(0, 169, 224, 0.12)", lg: "0 10px 15px -3px rgba(0, 169, 224, 0.18)" },
        borderRadius: { sm: "4px", md: "8px", lg: "12px" }, website: "https://www.naqelexpress.com"
      }
    },
    { id: "dhl", key: "dhl", name: "دي إتش إل", description: "DHL Express", styling: { primary: "#FFCC00", secondary: "#D2002E", font: "Cairo", logo: "/assets/branding/logo-dhl.png" } },
    { id: "fedex", key: "fedex", name: "فيديكس", description: "FedEx World", styling: { primary: "#4D148C", secondary: "#FF6200", font: "Cairo", logo: "/assets/branding/logo-fedex.png" } },
    { id: "ups", key: "ups", name: "يو بي إس", description: "UPS Logistics", styling: { primary: "#351C15", secondary: "#FFB500", font: "Cairo", logo: "/assets/branding/logo-ups.png" } }
  ],
  AE: [
    { 
      id: "empost", key: "empost", name: "البريد الإماراتي", description: "Emirates Post Official",
      styling: { primary: "#00732F", secondary: "#CE1126", background: "#FFFFFF", text: "#000000", textLight: "#666666", textOnPrimary: "#FFFFFF", border: "#C0E0C0", font: "Cairo", logo: "/assets/branding/logo-emiratespost.png",
        gradients: { primary: "linear-gradient(135deg, #00732F, #CE1126)", hero: "linear-gradient(90deg, #00732F 0%, #CE1126 100%)" },
        shadows: { sm: "0 1px 2px 0 rgba(0, 115, 47, 0.08)", md: "0 4px 6px -1px rgba(0, 115, 47, 0.12)", lg: "0 10px 15px -3px rgba(0, 115, 47, 0.18)" },
        borderRadius: { sm: "4px", md: "8px", lg: "12px" }, website: "https://www.emiratespost.ae"
      }
    }
  ]
};

export const getServicesByCountry = (countryCode: string) => GCC_SHIPPING_SERVICES[countryCode] || [];
