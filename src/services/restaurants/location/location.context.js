import React, { useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setisLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      // don't do anything
      return;
    }

    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setisLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setisLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
