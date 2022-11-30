import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';

import { auth } from '@/firebase';

export const AuthContext = createContext({ user: null });
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const subscription = onAuthStateChanged(auth, (user: any) => {
      setUser(user);
    });
    // we use this to clean the subscription (its realtime operation so it will cause perforemnce issues)
    return subscription();
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
