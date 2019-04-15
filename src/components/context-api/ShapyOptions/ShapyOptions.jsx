import React, { useState, useEffect } from 'react';
import * as api from './api';

const ShapyOptions = {};

ShapyOptions.Context = React.createContext();

ShapyOptions.Provider = ({ children }) => {
  const [ shapes, setShapes ] = useState([]);
  const [ eyes, setEyes ] = useState([]);

  useEffect(() => {
    api.get().then(data => {
      setShapes(data.shapes);
      setEyes(data.eyes);
    });
  }, []);

  return <ShapyOptions.Context.Provider value={{ shapes, eyes }}>
    {children}
  </ShapyOptions.Context.Provider>;
};

ShapyOptions.Consumer = ShapyOptions.Context.Consumer;

export default ShapyOptions;