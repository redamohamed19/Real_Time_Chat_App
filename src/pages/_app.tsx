import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import '@/styles/globals.css';
import '@/styles/colors.css';

import { AuthProvider } from '@/lib/AuthContext';

import ProtectedRoutes from '@/components/ProtectedRoutes';

const notAuthRequired = ['/', 'login', 'register'];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AuthProvider>
      {notAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoutes>
          <Component {...pageProps} />
        </ProtectedRoutes>
      )}
    </AuthProvider>
  );
}

export default MyApp;
