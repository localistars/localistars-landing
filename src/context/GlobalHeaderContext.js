import React from "react";
import headerDefaultConfig from "~data/headerDefaultConfig"
export const headerDefault = headerDefaultConfig;
const GlobalHeaderContext = React.createContext();

const GlobalHeaderProvider = ({children}) =>{
  const [header , setHeader] = React.useState(headerDefault);

  const changeHeader = (headerConfig = headerDefault) => {
    setHeader({
      ...header,
      ...headerConfig,
    });
  };
  // console.log(GlobalHeaderContext);
  return (<GlobalHeaderContext.Provider value={{header,changeHeader}}>
    {children}
  </GlobalHeaderContext.Provider>)
}

export default GlobalHeaderContext;
export { GlobalHeaderProvider };