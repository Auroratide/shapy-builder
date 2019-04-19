import React, { useState, useEffect } from 'react';
import Query from './query';
import api from './api';

const ShapyOptions = {};

ShapyOptions.Context = React.createContext();

ShapyOptions.Provider = ({ children }) => {
  const [ query, setQuery ] = useState(new Query());

  useEffect(() => {
    api.get().then(data => {
      setQuery(new Query(data));
    });
  }, []);

  return <ShapyOptions.Context.Provider value={{ query }}>
    {children}
  </ShapyOptions.Context.Provider>;
};

ShapyOptions.Consumer = ShapyOptions.Context.Consumer;
ShapyOptions.Query = Query;

export default ShapyOptions;