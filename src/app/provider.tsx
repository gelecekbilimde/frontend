import AuthProvider from "@/providers/auth-provider";
import ReactQueryProvider from "@/providers/react-query-provider";

interface Properties {
  children: React.ReactNode;
}

export default function Providers({ children }: Properties): JSX.Element {
  return (
    <AuthProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </AuthProvider>
  );
}
