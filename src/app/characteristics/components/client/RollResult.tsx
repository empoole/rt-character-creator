import { Draggable } from '@/components/Draggable'

export function RollResult({ rollValue }: { rollValue: number }) {
    return (
        <Draggable id={crypto.randomUUID()}>
            <span className="border border-slate-500 rounded p-2 hover:pointer-cursor">
                {rollValue}
            </span>
        </Draggable>
    )
}
