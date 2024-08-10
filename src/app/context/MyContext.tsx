'use client'
import { createContext, useState, useContext, ReactNode } from 'react';

// Define the type for your context (optional, if you're using TypeScript)
interface MyContextType {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}

// Provide a default value (could be null or a default object)
const MyContext = createContext<MyContextType | undefined>(undefined);

// Create a provider component
export function MyProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState(false);

    return (
        <MyContext.Provider value={{ state, setState }}>
            {children}
        </MyContext.Provider>
    );
}

// Custom hook to use the context
export function useMyContext() {
    const context = useContext(MyContext);
    if (context === undefined) {
        throw new Error("useMyContext must be used within a MyProvider");
    }
    return context;
}
