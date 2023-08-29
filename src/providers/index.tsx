import AuthProvider from './auth-provider';
import ReactQueryProvider from './react-query-provider';

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
