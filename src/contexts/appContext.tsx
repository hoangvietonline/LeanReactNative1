import React, {createContext, ReactNode, useState} from 'react';

interface RelatedContextType {
  relatedItems: any[];
  setRelatedItem: any;
}

export const RelatedContext = createContext<RelatedContextType>({
  relatedItems: [],
  setRelatedItem: () => {},
});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({children}: AppProviderProps) => {
  const [relatedItems, setRelatedItem] = useState<any[]>([]);

  return (
    <RelatedContext.Provider value={{relatedItems, setRelatedItem}}>
      {children}
    </RelatedContext.Provider>
  );
};
