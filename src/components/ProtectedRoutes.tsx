import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { useAuth } from '@/lib/AuthContext';

function ProtectedRoutes({ children }: { children: JSX.Element }) {
  const router = useRouter();
  const { user } = useAuth();
  useEffect(() => {
    //
    if (!user) {
      router.push('./login');
    } else {
      router.push('./dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return <div>{children}</div>;
}

export default ProtectedRoutes;
