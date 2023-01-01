import React, { createContext, useRef, useState } from "react";

export const AppContext = createContext<any>({});

export const AppProvider: React.FC<any> = ({ children }) => {
    const [section, setSection] = useState<string>("landing");

    return (
        <AppContext.Provider value={{section, setSection}}>
            {children}
        </AppContext.Provider>
    );
};