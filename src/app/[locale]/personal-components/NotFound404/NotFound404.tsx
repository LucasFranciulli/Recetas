import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const NotFound404 = () => {
  const t = useTranslations("NotFound404");
  return (
    <div>
      <p>{t("notFound")}</p>
      <Button>
        <Link href="/es/home">{t("goHome")}</Link>
      </Button>
    </div>
  );
};
