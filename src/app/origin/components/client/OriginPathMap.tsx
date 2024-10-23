'use client'

import { useState } from 'react'
import PathNode from '@/app/origin/components/client/PathNode'
import { LevelData } from '@/types/LevelData'
import { NodeSelections } from '@/types/NodeSelections'

export default function OriginPathMap({ levels }: { levels: LevelData[] }) {
    const [selections, setSelections] = useState({} as NodeSelections)
    const [nextLevelOptions, setNextLevelOptions] = useState([1, 2, 3, 4, 5, 6])

    /**
     * When you select a node the options for the next node are
     * determined as follows:
     *
     * next_node_id = one of - [node_id - 1, node_id, node_id + 1]
     *
     * If node_id - 1 < 1 or node_id + 1 > level_length (6) no option for that side
     */

    return (
        <div className="w-9/12 text-center m-auto">
            {levels.map((level: LevelData, i: number) => (
                <section key={i} className="my-4">
                    <h3 className="text-center font-bold">{level.name}</h3>
                    <div className="flex justify-around content-center items-center">
                        <form action="">
                            {level.options.map((node) => {
                                return (
                                    <PathNode
                                        key={node.id}
                                        nodeId={node.id}
                                        name={node.name}
                                        level={level.level}
                                        setSelections={setSelections}
                                        selections={selections}
                                        disabled={nextLevelOptions.includes(
                                            node.id
                                        )}
                                        setEnabledOptions={setNextLevelOptions}
                                    />
                                )
                            })}
                        </form>
                    </div>
                </section>
            ))}
        </div>
    )
}
