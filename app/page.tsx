"use client";

// data
import techCircles from "./techCircles";

// components
import Link from "next/link";
import { Button } from "@/components/ui/button";
import OrbitingCircles from "@/components/magicui/orbiting-circles";

// icons
import {
  SmartphoneIcon,
  LaptopIcon,
  ServerIcon,
  CloudIcon,
  BrainIcon,
  BlocksIcon,
  LinkIcon,
  KanbanIcon,
  RocketIcon,
  ChevronDownIcon,
} from "lucide-react";
import Image from "next/image";
import { useWindowSize } from "usehooks-ts";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import faqs from "./faqs";

export default function Home() {
  const { width = 0, height = 0 } = useWindowSize();

  const isMobile = width < 1024;
  return (
    <>
      {/* hero section */}
      <main className="flex min-h-screen flex-col lg:p-4 pt-0">
        <div className="flex justify-between items-center lg:gap-12 px-8">
          <Link
            href="/"
            className="cursor-pointer flex items-center justify-center"
          >
            <p className="text-5xl mb-5 font-bold">ض</p>
          </Link>
          <Button asChild>
            <Link href="https://manage.dhad.studio">إدارة الإشتراك</Link>
          </Button>
        </div>
        <div className="grow flex flex-col items-center justify-center">
          <h1 className="text-6xl font-extrabold tracking-tight lg:text-8xl text-center">
            أستديو تطوير منتجات رقمية
          </h1>
          <p className=" text-center mt-8 text-zinc-500 text-xl lg:max-w-[40vw]">
            نسرع تطوير المنتجات الرقمية باشتراك شهري لتنفيذ مهام لا نهائية، نبدأ
            مباشرة بعد الإشتراك وتقدر توقفه وتلغيه في أي وقت
          </p>
          <div className="mt-4 flex gap-4">
            <Button asChild>
              <Link href="#pricing">الأسعار</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://cal.com/dhad-studio/15min">
                إحجز إجتماع لـ ١٥ دقيقة
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* how we can help you section */}
      <section className="flex flex-col gap-8 min-h-[70vh] items-center p-4">
        <p className="text-4xl">كيف ممكن نساعدكم</p>
        <div className="grid gap-4 grid-cols-12 lg:w-2/3">
          <div className="col-span-6 lg:col-span-4 border rounded-md p-4 flex flex-col gap-1">
            <SmartphoneIcon />
            <p className="text-lg">تطبيقات الجوال</p>
            <p className="text-sm text-gray-500">
              تطبيقات الشركات، المستهلكين، الخدمات العامة، الرعاية الصحية و
              التعليم
            </p>
          </div>
          <div className="col-span-6 lg:col-span-4 border rounded-md p-4 flex flex-col gap-1">
            <LaptopIcon />
            <p className="text-lg">تطبيقات المتصفح</p>
            <p className="text-sm text-gray-500">
              تطبيقات التجارة الإلكترونية، أنظمة إدارة المحتوى و أنظمة إدارة
              العلاقات مع العملاء
            </p>
          </div>
          <div className="col-span-6 lg:col-span-4 border rounded-md p-4 flex flex-col gap-1">
            <ServerIcon />
            <p className="text-lg">تطبيقات الخادم</p>
            <p className="text-sm text-gray-500">
              تطوير الواجهة البرمجية، إدارة قواعد البيانات، تطوير الأمان، تطوير
              الأداء و تطوير البنية التحتية
            </p>
          </div>
          <div className="col-span-6 lg:col-span-4 border rounded-md p-4 flex flex-col gap-1">
            <CloudIcon />
            <p className="text-lg">الحوسبة السحابية</p>
            <p className="text-sm text-gray-500">
              تصميم، نشر وإدارة البنية التحتية، الأتمتة، الأمان و الأداء
            </p>
          </div>
          <div className="col-span-6 lg:col-span-4 border rounded-md p-4 flex flex-col gap-1">
            <BrainIcon />
            <p className="text-lg">الذكاء التوليدي</p>
            <p className="text-sm text-gray-500">
              تطوير تقنيات توليد النص، الصوت، الصور و الفيديو
            </p>
          </div>
          <div className="col-span-6 lg:col-span-4 border rounded-md p-4 flex flex-col gap-1">
            <BlocksIcon />
            <p className="text-lg">البلوك تشين</p>
            <p className="text-sm text-gray-500">
              تطوير تطبيقات البلوك تشين، العقود الذكية و العملات الرقمية
            </p>
          </div>
        </div>
      </section>

      {/* how we can help you section */}
      <section className="flex flex-col gap-10 min-h-[40vh] items-center p-4">
        <p className="text-4xl text-center">
          بسطنا العمليات لتنفيذ المهام في وقت قياسي وباشتراك مرن
        </p>
        <div className="grid gap-4 gap-y-8 grid-cols-12 w-2/3">
          <div className="col-span-full lg:col-span-4 p-4 flex items-center justify-center gap-2">
            <LinkIcon size={48} />
            <div className="pb-2 flex flex-col gap-1">
              <p className="text-2xl">بدون إجتماعات</p>
              <p className="text-sm text-gray-500">
                مثلك ما نحب الإجتماعات، خلنا نركز على تنفيذ المهام
              </p>
            </div>
          </div>
          <div className="col-span-full lg:col-span-4 p-4 flex items-center justify-center lg:justify-start gap-2">
            <KanbanIcon size={48} />
            <div className="pb-2 flex flex-col gap-1">
              <p className="text-2xl">لوحة كانبان لمتابعة المهام</p>
              <p className="text-sm text-gray-500">
                إدارة ومتابعة تقدم المهام بسهولة
              </p>
            </div>
          </div>
          <div className="col-span-full lg:col-span-4 p-4 flex items-center justify-center gap-2">
            <RocketIcon size={48} />
            <div className="pb-2 flex flex-col gap-1">
              <p className="text-2xl">نبدأ التنفيذ مباشرة</p>
              <p className="text-sm text-gray-500">
                تحديثات يومية وتنفيذ خلال أيام في المتوسط
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* tech stack */}
      <section className="flex flex-col gap-10 min-h-[70vh] justify-center items-center p-4">
        <div className="relative flex h-[600px] w-full lg:max-w-[32rem] items-center justify-center rounded-lg bg-background">
          <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl lg:text-8xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10  z-50">
            التقنيات اللي نستخدمها
          </p>

          {techCircles.map((circle, circleIndex) => (
            <>
              {circle.tech.map((tech, techIndex) => (
                <OrbitingCircles
                  key={techIndex + circleIndex}
                  className="h-[24px] lg:h-[32px] w-[24px] lg:w-[32px] border-none bg-transparent"
                  duration={30}
                  delay={100 + circle.tech.length * techIndex}
                  radius={(isMobile ? 50 : 85) * (circleIndex + 1)}
                >
                  <Image
                    key={techIndex}
                    src={`/svg/${tech}`}
                    alt="tech"
                    width={52}
                    height={52}
                  />
                </OrbitingCircles>
              ))}
            </>
          ))}
        </div>
      </section>

      {/* pricing */}
      <section
        id="pricing"
        className="flex flex-col gap-10 min-h-[70vh] justify-center items-center p-4"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            الأسعار
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 col-span-full lg:col-span-6">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col items-center justify-between">
                <h3 className="text-2xl font-bold">الأساسية</h3>
                <div className="text-4xl font-bold">٦٠٠٠ ريال سعودي</div>
              </div>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400 grow">
                <li className="flex items-center gap-2">
                  عدد لا محدود من المهام
                </li>
                <li className="flex items-center gap-2">١ مهمة نشطة</li>
                <li className="flex items-center gap-2">
                  تحديثات يومية وتنفيذ خلال ٢ - ٣ أيام
                </li>
                <li className="flex items-center gap-2">مشروع واحد فقط</li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="https://manage.dhad.studio/services/5a06254ff605922fc16c827ee8444f99/checkouts">
                  إشتراك
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 col-span-full lg:col-span-6">
            <div className="space-y-4">
              <div className="flex flex-col items-center justify-between">
                <h3 className="text-2xl font-bold">المتقدمة</h3>
                <div className="text-4xl font-bold">١٠٠٠٠ ريال سعودي</div>
              </div>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  عدد لا محدود من المهام
                </li>
                <li className="flex items-center gap-2">٢ مهمة نشطة</li>
                <li className="flex items-center gap-2">
                  تحديثات يومية وتنفيذ خلال ١ - ٢ أيام
                </li>
                <li className="flex items-center gap-2">
                  عدد لا محدود من المشاريع
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="https://manage.dhad.studio/services/241dc16712a42669b3a40001e85103c3/checkouts">
                  إشتراك
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 col-span-12 flex flex-col lg:flex-row justify-between gap-4">
            <p className="text-2xl">غير متأكد؟ إحجز إجتماع لـ ١٥</p>
            <Button asChild>
              <Link href="https://cal.com/dhad-studio/15min">إحجز إجتماع</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* faq section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container max-w-4xl px-4 md:px-6">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                الأسئلة الأكثر شيوعاً
              </h2>
            </div>
            <div className="space-y-4">
              {faqs?.map((faq) => (
                <Collapsible key={faq.title}>
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border border-gray-200 bg-white px-6 py-4 text-left transition-colors hover:bg-gray-100 focus:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus:bg-gray-800">
                    <h3 className="text-lg font-medium">
                      {faq.title || "Untitled FAQ"}
                    </h3>
                    <ChevronDownIcon className="h-5 w-5 transition-transform group-[data-state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pt-4 pb-6 text-gray-500 dark:text-gray-400">
                    <p>
                      {faq.description ||
                        "This FAQ does not have a description."}
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* call to action section */}
      <section className="flex flex-col gap-2 min-h-[50vh] justify-center items-center p-4">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ببساطة، ما بتلقى خيار أفضل
          </h2>
          <p className="text-lg text-gray-500">
            خدمتنا تستبدل الخيارات غير الثابتة والغالية باشتراك شهري يخلي
            منتجاتك يتم اطلاقها بشكل اسرع
          </p>
        </div>
        <div className="mt-4 flex gap-4">
          <Button asChild>
            <Link href="#pricing">الأسعار</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://cal.com/dhad-studio/15min">
              إحجز إجتماع لـ ١٥ دقيقة
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
