"use client";
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
} from "lucide-react";
import Image from "next/image";
import { useWindowSize } from "usehooks-ts";

const techCircles = [
  {
    tech: [
      "html.svg",
      "typescript.svg",
      "android.svg",
      "react.svg",
      "css.svg",
      "javascript.svg",
      "ios.svg",
      "python.svg",
    ],
  },
  {
    tech: [
      "nextjs.svg",
      "expo.svg",
      "tailwind.svg",
      "mobx.svg",
      "mongodb.svg",
      "nestjs.svg",
      "redux.svg",
      "cypress.svg",
      "django.svg",
      "express.svg",
      "graphql.svg",
    ],
  },
  {
    tech: [
      "aws.svg",
      "datadog.svg",
      "docker.svg",
      "git.svg",
      "github.svg",
      "gitlab.svg",
      "firebase.svg",
      "kubernetes.svg",
      "nginx.svg",
      "openai.svg",
      "postgresql.svg",
      "stripe.svg",
      "redis.svg",
      "bnb.svg",
      "btc.svg",
      "rabbitmq.svg",
      "light.svg",
      "theatre.svg",
      "fastapi.svg",
    ],
  },
];
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
            <Link href="">إدارة الإشتراك</Link>
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
      </div>

      {/* how we can help you section */}
      <div className="flex flex-col gap-10 min-h-[40vh] items-center p-4">
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
      </div>

      {/* tech stack */}
      <div className="flex flex-col gap-10 min-h-[70vh] justify-center items-center p-4">
        <div className="relative flex h-[500px] w-full lg:max-w-[32rem] items-center justify-center rounded-lg bg-background">
          <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl lg:text-8xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10  z-50">
            التقنيات اللي نستخدمها
          </p>

          {techCircles.map((circle, circleIndex) => (
            <>
              {circle.tech.map((tech, techIndex) => (
                <OrbitingCircles
                  key={techIndex + circleIndex}
                  className="h-[24px] lg:h-[40px] w-[24px] lg:w-[40px] border-none bg-transparent"
                  duration={30}
                  delay={100 + circle.tech.length * techIndex}
                  radius={(isMobile ? 50 : 80) * (circleIndex + 1)}
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
      </div>
    </>
  );
}
