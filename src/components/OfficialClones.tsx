import React from 'react';
import { Shield, Lock, Globe, CreditCard, ChevronLeft, Menu, CheckCircle2 } from 'lucide-react';

interface CloneProps {
  children: React.ReactNode;
  amount?: string;
  serviceName?: string;
  trackingNumber?: string;
}

export const SADADOfficialClone: React.FC<CloneProps> = ({ children, amount }) => (
  <div className="min-h-screen bg-[#F7F7F7] font-sans" dir="rtl">
    <nav className="bg-white border-b-4 border-[#EB7625] px-6 py-4 flex items-center justify-between shadow-md">
      <img src="/assets/branding/logo-sadad.png" alt="SADAD" className="h-14" />
      <div className="flex items-center gap-4">
        <div className="text-green-600 font-bold text-sm bg-green-50 px-3 py-1 rounded-full flex items-center gap-2 border border-green-100"><Lock className="w-4 h-4" /> اتصال آمن</div>
      </div>
    </nav>
    <main className="container mx-auto px-4 py-10 max-w-4xl">
      <div className="bg-white rounded-none shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-[#EB7625] p-8 text-white flex justify-between items-center">
          <h2 className="text-2xl font-black">تفاصيل الفاتورة</h2>
          <div className="text-3xl font-black">{amount}</div>
        </div>
        <div className="p-10">{children}</div>
      </div>
    </main>
  </div>
);

export const KNETOfficialClone: React.FC<CloneProps> = ({ children, amount }) => (
  <div className="min-h-screen bg-[#F0F2F5]" dir="rtl">
    <header className="bg-white p-6 border-b flex flex-col items-center">
      <img src="/assets/branding/logo-knet.png" alt="KNET" className="h-16 mb-4" />
      <div className="w-full h-1 bg-gradient-to-r from-green-600 via-blue-600 to-red-600 rounded-full max-w-md" />
    </header>
    <main className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white shadow-xl">
        <div className="bg-[#007A33] p-6 text-white text-center">
          <h2 className="text-xl font-bold">بوابة الدفع الإلكتروني</h2>
          <div className="text-3xl font-black mt-2">{amount}</div>
        </div>
        <div className="p-8">{children}</div>
      </div>
    </main>
  </div>
);

export const NafathOfficialClone: React.FC<CloneProps> = ({ children }) => (
  <div className="min-h-screen bg-[#F4F7F9]" dir="rtl">
    <header className="bg-white border-b-2 border-[#1A3B77] px-6 h-20 flex items-center justify-between">
      <img src="/assets/branding/logo-nafath.png" alt="Nafath" className="h-12" />
      <img src="/assets/branding/logo-vision-2030.png" alt="Vision 2030" className="h-10 opacity-30 grayscale" />
    </header>
    <main className="container mx-auto px-4 py-12 flex justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border overflow-hidden">
        <div className="bg-[#1A3B77] p-8 text-white text-center">
          <Shield className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-xl font-bold">تسجيل الدخول الآمن</h2>
        </div>
        <div className="p-8">{children}</div>
      </div>
    </main>
  </div>
);

export const UaePassOfficialClone: React.FC<CloneProps> = ({ children }) => (
  <div className="min-h-screen bg-black" dir="rtl">
    <header className="bg-white/5 border-b border-white/10 px-6 h-16 flex items-center justify-between">
      <img src="/assets/branding/logo-uae-gov.png" alt="UAE" className="h-10 invert" />
      <Menu className="text-white w-6 h-6" />
    </header>
    <main className="container mx-auto px-4 py-20 flex flex-col items-center">
      <h1 className="text-4xl font-black text-white mb-10">UAE PASS</h1>
      <div className="w-full max-w-md bg-white p-10 rounded-[40px] shadow-2xl">{children}</div>
    </main>
  </div>
);

export const GenericMinistryClone: React.FC<CloneProps & { primary: string }> = ({ children, amount, serviceName, primary }) => (
  <div className="min-h-screen bg-gray-50" dir="rtl">
    <header className="bg-white border-b-4 h-24 flex items-center px-10" style={{ borderBottomColor: primary }}>
       <h1 className="text-2xl font-black" style={{ color: primary }}>{serviceName}</h1>
    </header>
    <main className="container mx-auto px-4 py-12 flex justify-center">
       <div className="w-full max-w-3xl bg-white shadow-lg border border-gray-100">
         <div className="p-6 text-white flex justify-between items-center" style={{ background: primary }}>
           <span className="font-bold">المبلغ المطلوب:</span>
           <span className="text-2xl font-black">{amount}</span>
         </div>
         <div className="p-10">{children}</div>
       </div>
    </main>
  </div>
);

export const FedExOfficialClone: React.FC<CloneProps> = ({ children, amount }) => (
  <div className="min-h-screen bg-white" dir="ltr">
    <header className="px-10 py-6 border-b-8 border-[#4D148C]">
      <img src="/assets/branding/logo-fedex.png" alt="FedEx" className="h-10" />
    </header>
    <main className="container mx-auto px-4 py-12 flex justify-center">
      <div className="w-full max-w-2xl border shadow-lg p-10">
        <h2 className="text-2xl font-bold text-[#4D148C] mb-6">Complete Your Payment</h2>
        {children}
      </div>
    </main>
  </div>
);

export const JaywanOfficialClone: React.FC<CloneProps> = ({ children, amount }) => (
  <div className="min-h-screen bg-[#F0F2F5]" dir="rtl">
    <header className="bg-white px-6 py-6 flex items-center justify-between border-b shadow-sm">
      <img src="/assets/branding/logo-jaywan.png" alt="Jaywan" className="h-12" />
      <div className="text-green-600 font-bold text-sm bg-green-50 px-3 py-1 rounded-full flex items-center gap-2 border border-green-100"><Lock className="w-4 h-4" /> Secure Connection</div>
    </header>
    <main className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white shadow-xl">
        <div className="bg-[#CE1126] p-6 text-white text-center">
          <h2 className="text-xl font-bold">بوابة الدفع الإلكتروني | Payment Portal</h2>
          {amount && <div className="text-3xl font-black mt-2">{amount}</div>}
        </div>
        <div className="p-8">{children}</div>
      </div>
    </main>
  </div>
);
