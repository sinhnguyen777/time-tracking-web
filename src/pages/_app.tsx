import "@/styles/globals.css";
import { isTokenExpired } from "@/utils/jwt";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      if (token && isTokenExpired(token)) {
        localStorage.removeItem("token");
        localStorage.removeItem("user-info");
        router.push("/login");
      }
    } else {
      router.push("/login");
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}
