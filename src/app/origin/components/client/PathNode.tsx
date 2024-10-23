'use client'

import { NodeSelections } from '@/types/NodeSelections'

export default function PathNode({
    name,
    nodeId,
    level,
    disabled,
    setEnabledOptions,
    selections,
    setSelections,
}: {
    name: string
    nodeId: number
    level: number
    disabled: boolean
    setEnabledOptions: React.Dispatch<React.SetStateAction<number[]>>
    selections: NodeSelections
    setSelections: React.Dispatch<React.SetStateAction<NodeSelections>>
}) {
    const getNextEnabledOptions = (n: number) => {
        const opts = []
        const max = level < 5 ? 6 : 8

        if (n - 1 > 0) opts.push(n - 1)
        opts.push(n)
        if (n + 1 < max) opts.push(n + 1)

        return opts
    }

    return (
        <div
            className={`flex-auto text-center border border-solid border-slate-500 p-4 mx-2${
                disabled ? ' disabled' : ''
            }${
                selections[level as keyof NodeSelections] === nodeId
                    ? ' selected'
                    : ''
            }`}
        >
            <input
                type="radio"
                name={`path-${level}`}
                id={`node-${name.replace(' ', '').toLowerCase()}`}
                hidden={true}
                disabled={disabled}
            />
            {name}
            <div className="flex">
                <button>[ Details ]</button> {/* This opens the modal */}
                <button
                    onClick={() => {
                        if (!disabled) {
                            setSelections({ ...selections, [level]: nodeId })
                            setEnabledOptions(getNextEnabledOptions(nodeId))
                        }
                    }}
                >
                    [ Select ]
                </button>
            </div>
        </div>
    )
}
