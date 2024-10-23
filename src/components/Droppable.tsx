import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import { PropsWithChildren } from 'react'

type Props = {
    id: string
}

export function Droppable({ id, children }: PropsWithChildren<Props>) {
    const { isOver, setNodeRef } = useDroppable({
        id: id,
    })
    const style = {
        opacity: isOver ? 1 : 0.5,
    }

    return (
        <div ref={setNodeRef} style={style}>
            {children}
        </div>
    )
}
