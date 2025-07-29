import { useTranslations } from "next-intl";
import { Title } from "./Sections/Title";
import { SearchBar } from "../personal-components";

export default function HomePage() {
  const t = useTranslations("Home");
  return (
    <div className="h-screen grid items-center justify-items-center">
      <div className="flex flex-col items-center gap-25 w-150">
        <Title
          words={[t("title1"), t("title2")]}
          description={t("description")}
          madeBy={t("madeBy")}
        />
        <SearchBar />
      </div>
    </div>
  );
}
