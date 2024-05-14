import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <div className="flex min-h-screen flex-col p-4">
        <h2 className="text-4xl font-bold">كيف ممكن نساعدك</h2>
        <div className="flex gap-8">
          <div className="flex flex-col items-center justify-center">
            <img src="/images/idea.svg" alt="idea" />
            <h3 className="text-2xl font-bold">أفكار جديدة</h3>
            <p className="text-center text-zinc-500">
              نساعدك في تحويل أفكارك إلى منتجات رقمية
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/images/development.svg" alt="development" />
            <h3 className="text-2xl font-bold">تطوير</h3>
            <p className="text-center text-zinc-500">
              نقوم بتطوير المنتجات الرقمية بأحدث التقنيات
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/images/launch.svg" alt="launch" />
            <h3 className="text-2xl font-bold">إطلاق</h3>
            <p className="text-center text-zinc-500">
              نساعدك في إطلاق المنتجات الرقمية بنجاح
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
