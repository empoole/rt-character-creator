import { useState, createContext, useContext } from 'react'

type DetailsSelections = {
    homeworldId: number
}

interface DetailsSelectionsContextType {
    homeworldId: number
    updateDetailsSelections: (newSettings: Partial<DetailsSelections>) => void
}

const defaultSelections: DetailsSelections = {
    homeworldId: 1,
}

const DetailsSelectionsContext = createContext<DetailsSelectionsContextType>({
    ...defaultSelections,
    updateDetailsSelections: () => {},
})

export const DetailsSelectionsProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [selections, setSelections] = useState(defaultSelections)

    const updateDetailsSelections = (
        newSelections: Partial<DetailsSelections>
    ) => {
        setSelections({ ...selections, ...newSelections })
    }

    return (
        <DetailsSelectionsContext.Provider
            value={{ ...selections, updateDetailsSelections }}
        >
            {children}
        </DetailsSelectionsContext.Provider>
    )
}

export const useDetailsSelections = () => useContext(DetailsSelectionsContext)
