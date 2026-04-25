export interface Bank {
  id: string;
  nameAr: string;
  nameEn: string;
  logo: string;
  color: string;
}

export const GULF_BANKS: Record<string, Bank[]> = {
  SA: [
    { id: "alrajhi", nameAr: "مصرف الراجحي", nameEn: "Al Rajhi Bank", logo: "/assets/branding/logo-alrajhibank-com-sa.png", color: "#006C35" },
    { id: "snb", nameAr: "البنك الأهلي السعودي", nameEn: "SNB", logo: "/assets/branding/logo-snb.png", color: "#00843D" },
    { id: "riyad", nameAr: "بنك الرياض", nameEn: "Riyad Bank", logo: "/assets/branding/logo-riyadbank.png", color: "#0066B2" },
    { id: "sab", nameAr: "البنك السعودي الأول", nameEn: "SAB", logo: "/assets/branding/logo-sab.png", color: "#004B87" },
    { id: "fransi", nameAr: "البنك السعودي الفرنسي", nameEn: "Banque Saudi Fransi", logo: "/assets/branding/logo-alfransi-com-sa.png", color: "#ED1C24" },
    { id: "alinma", nameAr: "مصرف الإنماء", nameEn: "Alinma Bank", logo: "/assets/branding/logo-alinma.png", color: "#00A650" },
    { id: "albilad", nameAr: "بنك البلاد", nameEn: "Bank Albilad", logo: "/assets/branding/logo-bankalbilad.png", color: "#1C4587" },
    { id: "stcbank", nameAr: "stc bank", nameEn: "stc bank", logo: "/assets/branding/logo-stcbank-com-sa.png", color: "#6C1D8F" }
  ],
  AE: [
    { id: "fab", nameAr: "بنك أبوظبي الأول", nameEn: "FAB", logo: "/assets/branding/logo-bankfab.png", color: "#E0004D" },
    { id: "enbd", nameAr: "بنك الإمارات دبي الوطني", nameEn: "Emirates NBD", logo: "/assets/branding/logo-emiratesnbd.png", color: "#003D7A" },
    { id: "adcb", nameAr: "بنك أبوظبي التجاري", nameEn: "ADCB", logo: "/assets/branding/logo-adcb.png", color: "#004B87" },
    { id: "mashreq", nameAr: "بنك المشرق", nameEn: "Mashreq Bank", logo: "/assets/branding/logo-mashreq.png", color: "#E31E24" },
    { id: "dib", nameAr: "بنك دبي الإسلامي", nameEn: "DIB", logo: "/assets/branding/logo-dib-ae.png", color: "#00923F" },
    { id: "wio", nameAr: "Wio Bank", nameEn: "Wio Bank", logo: "/assets/branding/logo-wio.png", color: "#6C1D8F" }
  ],
  KW: [
    { id: "nbk", nameAr: "بنك الكويت الوطني", nameEn: "NBK", logo: "/assets/branding/logo-nbk.png", color: "#003D7A" },
    { id: "kfh", nameAr: "بيت التمويل الكويتي", nameEn: "KFH", logo: "/assets/branding/logo-kfh.png", color: "#006847" },
    { id: "boubyan", nameAr: "بنك بوبيان", nameEn: "Boubyan Bank", logo: "/assets/branding/logo-boubyan-bank.png", color: "#4B2A7B" },
    { id: "gulf", nameAr: "بنك الخليج", nameEn: "Gulf Bank", logo: "/assets/branding/logo-gulfbank.png", color: "#C8102E" }
  ],
  QA: [
    { id: "qnb", nameAr: "بنك قطر الوطني", nameEn: "QNB", logo: "/assets/branding/logo-qnb.png", color: "#8B1F41" },
    { id: "cbq", nameAr: "البنك التجاري", nameEn: "CBQ", logo: "/assets/branding/logo-cbq-qa.png", color: "#C8102E" },
    { id: "qib", nameAr: "مصرف قطر الإسلامي", nameEn: "QIB", logo: "/assets/branding/logo-qib-com-qa.png", color: "#00447C" }
  ],
  BH: [
    { id: "nbb", nameAr: "بنك البحرين الوطني", nameEn: "NBB", logo: "/assets/branding/logo-nbbonline.png", color: "#003D7A" },
    { id: "bbk", nameAr: "بنك البحرين والكويت", nameEn: "BBK", logo: "/assets/branding/logo-bbk.png", color: "#00447C" },
    { id: "benefit", nameAr: "بنفت", nameEn: "Benefit", logo: "/assets/branding/logo-benefit-bh.png", color: "#CE1126" }
  ],
  OM: [
    { id: "muscat", nameAr: "بنك مسقط", nameEn: "Bank Muscat", logo: "/assets/branding/logo-bankmuscat.png", color: "#003D7A" },
    { id: "nbo", nameAr: "البنك الوطني العماني", nameEn: "NBO", logo: "/assets/branding/logo-nbo-om.png", color: "#C8102E" }
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
