import { Draggable } from '@/components/Draggable'

export function RollResult({ rollValue }: { rollValue: number }) {
    return (
        <Draggable id={crypto.randomUUID()}>
            <span>{rollValue}</span>
        </Draggable>
    )
}
