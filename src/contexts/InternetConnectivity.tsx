import React, {createContext, useState, useEffect, ReactNode} from 'react';
import NetInfo, {
  NetInfoState,
  useNetInfo,
} from '@react-native-community/netinfo';

type internetConnectivityContextType = {
  isConnected: boolean | null;
};

type Props = {
  children: ReactNode;
};

const InternetConnectivityContext =
  createContext<internetConnectivityContextType>({
    isConnected: false,
  });

export const InternetConnectivityProvider = ({children}: Props) => {
  const netInfo = useNetInfo();
  const [isConnected, setIsConnected] = useState<boolean | null>(
    netInfo.isConnected,
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <InternetConnectivityContext.Provider value={{isConnected}}>
      {children}
    </InternetConnectivityContext.Provider>
  );
};

export default InternetConnectivityContext;
