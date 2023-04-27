import React, { createContext, useState } from 'react';
export const SpinContext = createContext();

const SpinProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const spinner = {
        isLoading,
        setIsLoading,
    };
    return (
        <SpinContext.Provider value={spinner}>
            {children}
        </SpinContext.Provider>
    );
};

export default SpinProvider;