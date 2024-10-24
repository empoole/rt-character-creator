'use client'

import rollStat from '@/lib/rollStat'
import { StatBlock } from '@/types/StatBlock'
import { useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import { Droppable } from '@/components/Droppable'
import { useCharacteristicsSettings } from '@/context/CharacteristicsSettingsContext'

// TODO:
// Needs some work to get the drag and drop working:
// https://dndkit.com/
// There should be some kind of handle drag end event at least
// Drag end removes the number from the pool and sets the value

export default function CharacteristicsTable() {
    const [stats, setStats] = useState(new StatBlock())
    const {
        rollsPerStat,
        rollsTakenPerStat,
        takeHighestRollsPerStat,
        useDicePool,
    } = useCharacteristicsSettings()

    const rollAll = () => {
        const rolls = new StatBlock()
        Object.keys(stats).forEach((stat) => {
            rolls[stat as keyof StatBlock] = rollStat(
                rollsPerStat,
                rollsTakenPerStat,
                takeHighestRollsPerStat
            )
        })

        setStats({ ...rolls })
    }

    return (
        <>
            <table className="table-fixed border-collapse border border-slate-400 mb-4">
                <thead>
                    <tr>
                        <th colSpan={useDicePool ? 3 : 2} className="p-4">
                            Characteristics
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(stats).map((stat, i) => {
                        const labelText = stat.replace('_', ' ')

                        return (
                            <tr key={i}>
                                <DndContext>
                                    <Droppable id={crypto.randomUUID()}>
                                        <td className="capitalize border border-slate-400 p-2">
                                            {labelText}
                                        </td>
                                        <td className="border border-slate-400 p-2">
                                            {stats[stat as keyof StatBlock]}
                                        </td>
                                    </Droppable>
                                    {!useDicePool && (
                                        <td className="border border-slate-400 p-2">
                                            <button
                                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                                                onClick={() =>
                                                    setStats({
                                                        ...stats,
                                                        [stat]: rollStat(),
                                                    })
                                                }
                                            >
                                                Roll
                                            </button>
                                        </td>
                                    )}
                                </DndContext>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {!useDicePool && (
                <button
                    className="btn btn-blue bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => rollAll()}
                >
                    Roll All
                </button>
            )}
        </>
    )
}
