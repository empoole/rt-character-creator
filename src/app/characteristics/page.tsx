import { useState } from 'react'

import DicePool from './components/DicePool'
import CharacteristicsTable from './components/CharacteristicsTable'

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
