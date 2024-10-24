'use client'

import rollDice from '@/lib/rollDice'
import { useState } from 'react'
import { useCharacteristicsSettings } from '@/context/CharacteristicsSettingsContext'

export default function DicePool() {
    // As an alternative to rolling each stat separately players may
    // opt to roll a set of values then choose which to assign to
    // each stat

    const { totalRollsInPool, rollsPerStat, updateSettings } =
        useCharacteristicsSettings()

    const [dicePool, setDicePool] = useState(new Int32Array(totalRollsInPool))

    return (
        <>
            <label htmlFor="dicePoolSize">
                Dice to roll
                <input
                    type="number"
                    name="dicePoolSize"
                    onChange={(e) => {
                        updateSettings({
                            rollsPerStat: parseInt(e.target.value),
                        })
                    }}
                />
                <button
                    onClick={() => {
                        setDicePool(
                            new Int32Array(
                                rollDice(rollsPerStat, 10, false) as number[]
                            )
                        )
                    }}
                >
                    Roll
                </button>
            </label>
            <div>
                <p>Rolls:</p>
                <p>
                    {Array(dicePool).map((roll, index) => (
                        <span key={index}>{`${roll}, `}</span>
                    ))}
                </p>
            </div>
        </>
    )
}
