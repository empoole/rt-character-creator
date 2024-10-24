import { useState, createContext, useContext } from 'react'

type Settings = {
    displayMode: 'themed' | 'light' | 'dark'
}

interface AppSettingsContextType {
    displayMode: 'themed' | 'light' | 'dark'
    updateAppSettings: (newSettings: Partial<Settings>) => void
}

const defaultAppSettings: Settings = {
    displayMode: 'themed',
}

const AppSettingsContext = createContext<AppSettingsContextType>({
    ...defaultAppSettings,
    updateAppSettings: () => {},
})

export const AppSettingsProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [settings, setSettings] = useState(defaultAppSettings)

    const updateAppSettings = (newSettings: Partial<Settings>) => {
        setSettings({ ...settings, ...newSettings })
    }

    return (
        <AppSettingsContext.Provider value={{ ...settings, updateAppSettings }}>
            {children}
        </AppSettingsContext.Provider>
    )
}

export const useAppSettings = () => useContext(AppSettingsContext)
