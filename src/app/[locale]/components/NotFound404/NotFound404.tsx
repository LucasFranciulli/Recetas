import { useTranslations } from "next-intl";


export const NotFound404 = () => {
    const t = useTranslations("NotFound404");
    return (
        <div>
            <p>{t("notFound")}</p>
            <p>{t("goHome")}</p>
        </div>
    );
}