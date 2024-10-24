'use client'

import {
    CharacteristicsSettingsProvider,
    useCharacteristicsSettings,
} from '@/context/CharacteristicsSettingsContext'

import DicePool from './components/client/DicePool'
import CharacteristicsTable from './components/client/CharacteristicsTable'

// TODO:
// players can roll all stats at once, or one at a time
// players can assign rolls as soon as they're rolled or once all rolls are completed

// alternate
/**
An alternate method for generating
Characteristic scores is to give each player a
number of Characteristic points that he may assign as
he wishes. In this case, the player begins with a score
of 25 in each Characteristic and may allocate a total of
100 additional points to his Characteristics, adding no
more than 20 to any one Characteristic. This method
will generate characters with slightly higher than
average scores.
   */

export default function Page() {
    const settings = useCharacteristicsSettings()

    return (
        <CharacteristicsSettingsProvider>
            {settings.useDicePool && <DicePool />}
            <CharacteristicsTable />
        </CharacteristicsSettingsProvider>
    )
}
