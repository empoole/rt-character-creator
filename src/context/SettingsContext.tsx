import { useState, createContext, useContext } from 'react'

type Settings = {
    rollsPerStat: number
    rollsTakenPerStat: number
    takeHighestRollsPerStat: boolean
    totalRollsInPool: number
    reRollsPerStatRoll: number
    reRollsPerPool: number
}

interface CharacteristicsSettingsContextType {
    rollsPerStat: number
    rollsTakenPerStat: number
    takeHighestRollsPerStat: boolean
    totalRollsInPool: number
    reRollsPerStatRoll: number
    reRollsPerPool: number
    updateSettings: (newSettings: Settings) => void
}

const defaultSettings = {
    rollsPerStat: 2, // Number of dice rolled to generate a stat (min 2)
    rollsTakenPerStat: 2, // Number of dice rolls used in calculating the final charactersitic score
    takeHighestRollsPerStat: true, // Take the highest or lowest of the rolls (assuming rolls taken < dice rolled)
    totalRollsInPool: 9, // Number of stat rolls the player can choose from (min 9)
    reRollsPerStatRoll: 0, // Number of rerolls allow for each stat
    reRollsPerPool: 0, // Number of times players can reroll dice from their pool
}

const CharacteristicsSettingsContext =
    createContext<CharacteristicsSettingsContextType>({
        ...defaultSettings,
        updateSettings: () => {},
    })

export const CharacteristicsSettingsProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [settings, setSettings] = useState(defaultSettings)

    const updateSettings = (newSettings: Partial<Settings>) => {
        setSettings({ ...settings, ...newSettings })
    }

    return (
        <CharacteristicsSettingsContext.Provider
            value={{ ...settings, updateSettings }}
        >
            {children}
        </CharacteristicsSettingsContext.Provider>
    )
}

export const useCharacteristicsSettings = () =>
    useContext(CharacteristicsSettingsContext)
