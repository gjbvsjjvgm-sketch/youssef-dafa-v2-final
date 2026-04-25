export interface BankBranding {
  id: string;
  nameAr: string;
  nameEn: string;
  logo: string;
  color: string;
  secondaryColor?: string;
  font?: string;
  radius?: string;
}

export const GULF_BANKS: Record<string, BankBranding[]> = {
  SA: [
    { id: "alrajhi", nameAr: "مصرف الراجحي", nameEn: "Al Rajhi Bank", logo: "/assets/branding/logo-alrajhibank-com-sa.png", color: "#006C35" },
    { id: "snb", nameAr: "البنك الأهلي السعودي", nameEn: "SNB", logo: "/assets/branding/logo-snb.png", color: "#00843D" },
    { id: "alinma", nameAr: "مصرف الإنماء", nameEn: "Alinma Bank", logo: "/assets/branding/logo-alinma.png", color: "#00A650" },
    { id: "albilad", nameAr: "بنك البلاد", nameEn: "Bank Albilad", logo: "/assets/branding/logo-bankalbilad.png", color: "#1C4587" },
    { id: "riyad", nameAr: "بنك الرياض", nameEn: "Riyad Bank", logo: "/assets/branding/logo-riyadbank.png", color: "#0066B2" },
    { id: "sab", nameAr: "البنك السعودي الأول", nameEn: "SAB", logo: "/assets/branding/logo-sab.png", color: "#004B87" },
    { id: "fransi", nameAr: "البنك السعودي الفرنسي", nameEn: "Banque Saudi Fransi", logo: "/assets/branding/logo-alfransi-com-sa.png", color: "#ED1C24" },
    { id: "jazira", nameAr: "بنك الجزيرة", nameEn: "Bank AlJazira", logo: "/assets/branding/logo-aljazirabank-com-sa.png", color: "#005EB8" },
    { id: "anb", nameAr: "البنك العربي الوطني", nameEn: "ANB", logo: "/assets/branding/logo-anb-com-sa.png", color: "#0066A1" },
    { id: "stcbank", nameAr: "stc bank", nameEn: "stc bank", logo: "/assets/branding/logo-stcbank-com-sa.png", color: "#6C1D8F" },
    { id: "d360", nameAr: "D360 Bank", nameEn: "D360 Bank", logo: "/assets/branding/logo-d360.png", color: "#00A9E0" }
  ],
  AE: [
    { id: "fab", nameAr: "بنك أبوظبي الأول", nameEn: "FAB", logo: "/assets/branding/logo-bankfab.png", color: "#E0004D" },
    { id: "adcb", nameAr: "بنك أبوظبي التجاري", nameEn: "ADCB", logo: "/assets/branding/logo-adcb.png", color: "#004B87" },
    { id: "enbd", nameAr: "بنك الإمارات دبي الوطني", nameEn: "Emirates NBD", logo: "/assets/branding/logo-emiratesnbd.png", color: "#003D7A" },
    { id: "dib", nameAr: "بنك دبي الإسلامي", nameEn: "DIB", logo: "/assets/branding/logo-dib-ae.png", color: "#00923F" },
    { id: "mashreq", nameAr: "بنك المشرق", nameEn: "Mashreq Bank", logo: "/assets/branding/logo-mashreq.png", color: "#E31E24" },
    { id: "adib", nameAr: "مصرف أبوظبي الإسلامي", nameEn: "ADIB", logo: "/assets/branding/logo-adib-ae.png", color: "#005B96" },
    { id: "wio", nameAr: "Wio Bank", nameEn: "Wio Bank", logo: "/assets/branding/logo-wio.png", color: "#6C1D8F" },
    { id: "sib", nameAr: "مصرف الشارقة الإسلامي", nameEn: "SIB", logo: "/assets/branding/logo-sib-ae.png", color: "#1C2B39" },
    { id: "ajman", nameAr: "مصرف عجمان", nameEn: "Ajman Bank", logo: "/assets/branding/logo-ajman.png", color: "#00A88C" }
  ],
  KW: [
    { id: "nbk", nameAr: "بنك الكويت الوطني", nameEn: "NBK", logo: "/assets/branding/logo-nbk.png", color: "#003D7A" },
    { id: "kfh", nameAr: "بيت التمويل الكويتي", nameEn: "KFH", logo: "/assets/branding/logo-kfh.png", color: "#006847" },
    { id: "boubyan", nameAr: "بنك بوبيان", nameEn: "Boubyan Bank", logo: "/assets/branding/logo-boubyan-bank.png", color: "#4B2A7B" },
    { id: "gulf", nameAr: "بنك الخليج", nameEn: "Gulf Bank", logo: "/assets/branding/logo-gulfbank.png", color: "#C8102E" },
    { id: "burgan", nameAr: "بنك برقان", nameEn: "Burgan Bank", logo: "/assets/branding/logo-burgan.png", color: "#8B1F41" },
    { id: "warba", nameAr: "بنك وربة", nameEn: "Warba Bank", logo: "/assets/branding/logo-warbabank.png", color: "#00A9E0" }
  ],
  QA: [
    { id: "qnb", nameAr: "بنك قطر الوطني", nameEn: "QNB", logo: "/assets/branding/logo-qnb.png", color: "#8B1F41" },
    { id: "cbq", nameAr: "البنك التجاري", nameEn: "CBQ", logo: "/assets/branding/logo-cbq-qa.png", color: "#C8102E" },
    { id: "doha", nameAr: "بنك الدوحة", nameEn: "Doha Bank", logo: "/assets/branding/logo-dohabank.png", color: "#003D7A" },
    { id: "qib", nameAr: "مصرف قطر الإسلامي", nameEn: "QIB", logo: "/assets/branding/logo-qib-com-qa.png", color: "#00447C" },
    { id: "dukhan", nameAr: "بنك دخان", nameEn: "Dukhan Bank", logo: "/assets/branding/logo-dukhanbank.png", color: "#006847" }
  ],
  BH: [
    { id: "nbb", nameAr: "بنك البحرين الوطني", nameEn: "NBB", logo: "/assets/branding/logo-nbbonline.png", color: "#003D7A" },
    { id: "bbk", nameAr: "بنك البحرين والكويت", nameEn: "BBK", logo: "/assets/branding/logo-bbk.png", color: "#00447C" },
    { id: "bisb", nameAr: "بنك البحرين الإسلامي", nameEn: "BisB", logo: "/assets/branding/logo-bisb.png", color: "#1F6F42" },
    { id: "alsalam", nameAr: "مصرف السلام", nameEn: "Al Salam Bank", logo: "/assets/branding/logo-alsalambank.png", color: "#003F72" },
    { id: "khaleeji", nameAr: "بنك خليجي", nameEn: "Khaleeji Bank", logo: "/assets/branding/logo-khaleeji-bank.png", color: "#8B1F41" }
  ],
  OM: [
    { id: "muscat", nameAr: "بنك مسقط", nameEn: "Bank Muscat", logo: "/assets/branding/logo-bankmuscat.png", color: "#003D7A" },
    { id: "nbo", nameAr: "البنك الوطني العماني", nameEn: "NBO", logo: "/assets/branding/logo-nbo-om.png", color: "#C8102E" },
    { id: "dhofar", nameAr: "بنك ظفار", nameEn: "Bank Dhofar", logo: "/assets/branding/logo-bankdhofar.png", color: "#1A3B77" },
    { id: "sohar", nameAr: "بنك صحار الدولي", nameEn: "Sohar International", logo: "/assets/branding/logo-soharinternational.png", color: "#006847" }
  ]
};

export const getBanksByCountry = (countryCode: string) => GULF_BANKS[countryCode] || [];
export const getBankById = (bankId: string) => {
  for (const country in GULF_BANKS) {
    const bank = GULF_BANKS[country].find(b => b.id === bankId);
    if (bank) return bank;
  }
  return null;
};
