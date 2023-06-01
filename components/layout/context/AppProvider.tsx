import React, { createContext, useRef, useState } from "react";

export const AppContext = createContext<any>({});

export const AppProvider: React.FC<any> = ({ children }) => {
    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

    return (
        <AppContext.Provider value={{isDrawerOpen, setDrawerOpen}}>
            {children}
        </AppContext.Provider>
    );
};