import { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction  } from "react";

interface GentlemanContextType {
    gentlemanContextValue: string;
    setGentlemanContextValue: Dispatch<SetStateAction<string>>; // Dispatch indica una función void, SetStateAction define que posiblemnte el valor de entrada va ser un string
}

const GentlemanContext = createContext<GentlemanContextType | undefined>(undefined);

interface GentlemanProviderProps {
    children: ReactNode;
}

export const GentlemanProvider = ({  children }: GentlemanProviderProps ) => {
    const [gentlemanContextValue, setGentlemanContextValue] = useState('VALOR INICIAL');

    return (
        <GentlemanContext.Provider value={{ gentlemanContextValue, setGentlemanContextValue }}>
            {children}
        </ GentlemanContext.Provider>
    )
}

export const useGentlemanContext = () => {
    const context = useContext(GentlemanContext);
    if (context === undefined) {
        throw new Error('useGentlemanContext must be used within a GentlemanProvider')
    }
    return context;
}