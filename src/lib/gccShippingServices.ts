export interface ShippingService {
  id: string;
  key: string;
  name: string;
  description: string;
  styling: {
    primary: string;
    secondary: string;
    font: string;
  };
}

export const GCC_SHIPPING_SERVICES: Record<string, ShippingService[]> = {
  SA: [
    { id: "aramex", key: "aramex", name: "أرامكس - Aramex", description: "توصيل محلي ودولي سريع", styling: { primary: "#DC291E", secondary: "#FFFFFF", font: "Aramex Font" } },
    { id: "dhl", key: "dhl", name: "دي إتش إل - DHL", description: "شحن دولي إكسبريس", styling: { primary: "#D2002E", secondary: "#FFCC01", font: "DHL Sans" } },
    { id: "fedex", key: "fedex", name: "فيديكس - FedEx", description: "توصيل طرود عالمية", styling: { primary: "#4D148C", secondary: "#FF6200", font: "FedEx Sans" } },
    { id: "ups", key: "ups", name: "يو بي إس - UPS", description: "حلول لوجستية متكاملة", styling: { primary: "#351C15", secondary: "#FFB500", font: "UPS Sans" } },
    { id: "smsa", key: "smsa", name: "سمسا - SMSA", description: "أكبر شبكة توصيل في المملكة", styling: { primary: "#004B87", secondary: "#E31E24", font: "SMSA Font" } },
    { id: "naqel", key: "naqel", name: "ناقل - Naqel", description: "خدمات النقل والخدمات اللوجستية", styling: { primary: "#00A9E0", secondary: "#003B71", font: "Naqel Sans" } },
    { id: "zajil", key: "zajil", name: "زاجل - Zajil", description: "شحن اقتصادي وسريع", styling: { primary: "#1A3B77", secondary: "#E31837", font: "Zajil Font" } },
    { id: "saudipost", key: "saudipost", name: "سبل - SPL", description: "البريد السعودي الرسمي", styling: { primary: "#006847", secondary: "#FFFFFF", font: "Saudi Post Font" } },
    { id: "bahri", key: "bahri", name: "البحري - Bahri", description: "خدمات النقل البحري واللوجستيات", styling: { primary: "#003366", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "hellmann", key: "hellmann", name: "Hellmann", description: "خدمات الشحن العالمية", styling: { primary: "#0C4DA2", secondary: "#FFFFFF", font: "Inter" } },
    { id: "dsv", key: "dsv", name: "DSV", description: "حلول سلاسل الإمداد العالمية", styling: { primary: "#0056A6", secondary: "#FFFFFF", font: "Inter" } },
    { id: "genacom", key: "genacom", name: "جيناكم - Genacom", description: "توصيل الطلبات والمتاجر", styling: { primary: "#E82424", secondary: "#F7C24A", font: "Cairo" } },
    { id: "shipco", key: "shipco", name: "Shipco", description: "الشحن الجوي والبحري", styling: { primary: "#0A5FB4", secondary: "#FFFFFF", font: "Inter" } },
    { id: "baraka", key: "baraka", name: "مجموعة البركة", description: "حلول تجارية ولوجستية", styling: { primary: "#D89A00", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "futtaim", key: "futtaim", name: "مجموعة الفطيم", description: "توزيع ولوجستيات متطورة", styling: { primary: "#00559B", secondary: "#FFFFFF", font: "Cairo" } },
    { id: "shaya", key: "shaya", name: "مجموعة الشايع", description: "خدمات التوريد والشحن", styling: { primary: "#D71920", secondary: "#000000", font: "Inter" } }
  ],
  AE: [
    { id: "empost", key: "empost", name: "بريد الإمارات - Emirates Post", description: "مزود الخدمات البريدية الرسمي", styling: { primary: "#00732F", secondary: "#CE1126", font: "Cairo" } },
    { id: "aramex", key: "aramex", name: "Aramex AE", description: "خدمات لوجستية في الإمارات", styling: { primary: "#DC291E", secondary: "#FFFFFF", font: "Cairo" } }
  ],
  KW: [
    { id: "kwpost", key: "kwpost", name: "البريد الكويتي", description: "خدمات البريد في الكويت", styling: { primary: "#003D7A", secondary: "#FFFFFF", font: "Cairo" } }
  ]
};

export const getServicesByCountry = (countryCode: string) => GCC_SHIPPING_SERVICES[countryCode] || [];
