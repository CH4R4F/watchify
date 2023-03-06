import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {getConfiguration} from '../services/tmdb';

type DataContextType = {
  base_url: string;
  sizes: string[];
};

type Props = {
  children: ReactNode;
};

const DataContext = createContext<DataContextType>({
  base_url: '',
  sizes: [],
});

export const DataProvider = ({children}: Props) => {
  const [configuration, setConfiguration] = useState({
    base_url: '',
    sizes: [],
  });
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    getConfiguration().then(res => {
      const {poster_sizes, base_url} = res.images;
      setConfiguration({
        base_url,
        sizes: poster_sizes,
      });
      setFinished(true);
    });
  }, []);

  if (!finished) {
    return null;
  }

  return (
    <DataContext.Provider value={configuration}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
