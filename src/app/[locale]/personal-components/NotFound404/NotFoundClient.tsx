"use client";

import { useEffect } from "react";
import { useUserData } from "@/app/store/userdata";
import { usePathname, useRouter } from "next/navigation";

export function NotFoundClient() {
  const { previousLanguage } = useUserData();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const locale = previousLanguage || "en";
    router.replace(`/${locale}/${pathname}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previousLanguage]);

  return <></>;
}
