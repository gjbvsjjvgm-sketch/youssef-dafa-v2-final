import React from 'react';
import { getServiceBranding } from '@/lib/serviceLogos';
import { 
  SADADOfficialClone, 
  KNETOfficialClone, 
  NafathOfficialClone, 
  UaePassOfficialClone,
  GenericMinistryClone 
} from "./OfficialClones";

interface CompanyLayoutProps {
  companyKey: string;
  children: React.ReactNode;
  amount?: string;
}

export const getCompanyLayout = (companyKey: string) => {
  const key = companyKey.toLowerCase();
  const branding = getServiceBranding(key);

  if (key === 'sadad') return SADADOfficialClone;
  if (key === 'knet') return KNETOfficialClone;
  if (key === 'nafath') return NafathOfficialClone;
  if (key === 'uaepass') return UaePassOfficialClone;
  
  // Generic Ministry/Government Fallback
  return (props: any) => (
    <GenericMinistryClone 
      {...props} 
      primary={branding.colors.primary} 
      serviceName={branding.nameAr} 
    />
  );
};

const CompanyLayout: React.FC<CompanyLayoutProps> = ({ companyKey, children, amount }) => {
  const Layout = getCompanyLayout(companyKey);
  return <Layout amount={amount} serviceName={companyKey}>{children}</Layout>;
};

export default CompanyLayout;
