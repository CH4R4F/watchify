import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {getConfiguration} from '../services/tmdb';
import {MovieGenre} from '../@types';

type DataContextType = {
  base_url: string;
  sizes: string[];
  selectedCategory: keyof MovieGenre;
  setSelectedCategory: React.Dispatch<React.SetStateAction<keyof MovieGenre>>;
};

type Props = {
  children: ReactNode;
};

const DataContext = createContext<DataContextType>({
  base_url: '',
  sizes: [],
  selectedCategory: 'all',
  setSelectedCategory: () => ({}),
});

export const DataProvider = ({children}: Props) => {
  const [configuration, setConfiguration] = useState({
    base_url: '',
    sizes: [],
  });
  const [finished, setFinished] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<keyof MovieGenre>('all');

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
    <DataContext.Provider
      value={{
        base_url: configuration.base_url,
        sizes: configuration.sizes,
        selectedCategory,
        setSelectedCategory,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
