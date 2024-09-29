"use client";
import { MenuProvider } from "kmenu";

import SearchKmenu from "@/components/layout/header/search-kmenu";
import AuthProvider from "@/providers/auth-provider";
import ReactQueryProvider from "@/providers/react-query-provider";

interface Properties {
  children: React.ReactNode;
}

export default function Providers({ children }: Properties): JSX.Element {
  return (
    <AuthProvider>
      <MenuProvider>
        <ReactQueryProvider>
          {children}
          <SearchKmenu />
        </ReactQueryProvider>
      </MenuProvider>
    </AuthProvider>
  );
}
