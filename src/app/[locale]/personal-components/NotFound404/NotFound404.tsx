import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const NotFound404 = () => {
  const t = useTranslations("NotFound404");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <Image
        src="/icons/monkey.svg"
        alt="Monkey"
        width={220}
        height={220}
        className="invert"
      />
      <p className="mt-6 text-lg">{t("notFound")}</p>
      <Button asChild className="mt-4">
        <Link href="/es/home">{t("goHome")}</Link>
      </Button>
    </div>
  );
};
