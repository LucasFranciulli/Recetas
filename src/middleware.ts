import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const segments = pathname.split("/").filter(Boolean);

  const response = createMiddleware(routing)(req);
  console.log("segments: ", segments)
  if (segments.length === 1) {
    return NextResponse.redirect(new URL(`/${segments[0]}/home`, req.url));
  }

  return response;
}

export const config = {
  matcher: ["/", "/(es|en)/:path*"],
};
