import { Button } from "@/components/ui/button";
import Link from "next/link";

// icons
import {
  SmartphoneIcon,
  LaptopIcon,
  ServerIcon,
  CloudIcon,
  BrainIcon,
  BlocksIcon,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <main className="flex min-h-screen flex-col p-4 pt-0">
        <div className="flex justify-between items-center gap-12 px-8">
          <Link
            href="/"
            className="cursor-pointer flex items-center justify-center"
          >
            <p className="text-5xl mb-5 font-bold">ض</p>
          </Link>
          <Button asChild>
            <Link href="">إدارة الإشتراك</Link>
          </Button>
        </div>
        <div className="grow flex flex-col items-center justify-center">
          <h1 className="text-6xl font-extrabold tracking-tight lg:text-8xl">
            أستديو تطوير منتجات رقمية
          </h1>
          <p className=" text-center mt-8 text-zinc-500 text-xl max-w-[40vw]">
            نسرع تطوير المنتجات الرقمية باشتراك شهري لتنفيذ مهام لا نهائية، نبدأ
            مباشرة بعد الإشتراك وتقدر توقفه وتلغيه في أي وقت
          </p>
          <div className="mt-4 flex gap-4">
            <Button asChild>
              <Link href="">خطط الأسعار</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="">إحجز إجتماع لـ ٢٠ دقيقة</Link>
            </Button>
          </div>
        </div>
      </main>

      {/* how we can help you section */}
      <div className="flex flex-col gap-8 min-h-[70vh] items-center p-4">
        <p className="text-4xl">كيف ممكن نساعدكم</p>
        <div className="grid gap-4 grid-cols-12 w-2/3">
          <div className="col-span-4 border rounded-md p-4 flex flex-col gap-1">
            <SmartphoneIcon />
            <p className="text-lg">تطبيقات الجوال</p>
            <p className="text-sm text-gray-500">
              تطبيقات الشركات، المستهلكين، الخدمات العامة، الرعاية الصحية و
              التعليم
            </p>
          </div>
          <div className="col-span-4 border rounded-md p-4 flex flex-col gap-1">
            <LaptopIcon />
            <p className="text-lg">تطبيقات المتصفح</p>
            <p className="text-sm text-gray-500">
              تطبيقات التجارة الإلكترونية، أنظمة إدارة المحتوى و أنظمة إدارة
              العلاقات مع العملاء
            </p>
          </div>
          <div className="col-span-4 border rounded-md p-4 flex flex-col gap-1">
            <ServerIcon />
            <p className="text-lg">تطبيقات الخادم</p>
            <p className="text-sm text-gray-500">
              تطوير الواجهة البرمجية، إدارة قواعد البيانات، تطوير الأمان، تطوير
              الأداء و تطوير البنية التحتية
            </p>
          </div>
          <div className="col-span-4 border rounded-md p-4 flex flex-col gap-1">
            <CloudIcon />
            <p className="text-lg">الحوسبة السحابية</p>
            <p className="text-sm text-gray-500">
              تصميم، نشر وإدارة البنية التحتية، الأتمتة، الأمان و الأداء
            </p>
          </div>
          <div className="col-span-4 border rounded-md p-4 flex flex-col gap-1">
            <BrainIcon />
            <p className="text-lg">الذكاء التوليدي</p>
            <p className="text-sm text-gray-500">
              تطوير تقنيات توليد النص، الصوت، الصور و الفيديو
            </p>
          </div>
          <div className="col-span-4 border rounded-md p-4 flex flex-col gap-1">
            <BlocksIcon />
            <p className="text-lg">البلوك تشين</p>
            <p className="text-sm text-gray-500">
              تطوير تطبيقات البلوك تشين، العقود الذكية و العملات الرقمية
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
