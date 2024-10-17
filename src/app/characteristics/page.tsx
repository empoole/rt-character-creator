'use client'

import { useState } from 'react'

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

/*
TODO: Context API for settings
*/

export default function Page({
    totalStatRolls = 9,
}: {
    totalStatRolls: number
}) {
    const [rolls, setRolls] = useState(new Int32Array(totalStatRolls))
    const [statRollsCount, setStatRollsCount] = useState(totalStatRolls)

    return (
        <>
            <div>
                <input
                    type="number"
                    name="stat-rolls-count"
                    value={statRollsCount}
                    onChange={(e) =>
                        setStatRollsCount(parseInt(e.target.value))
                    }
                />
            </div>
            <DicePool
                totalStatRolls={statRollsCount}
                rolls={rolls}
                setRolls={setRolls}
            />
            <CharacteristicsTable rolls={rolls} setRolls={setRolls} />
        </>
    )
}
