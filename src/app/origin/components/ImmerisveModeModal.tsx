import Link from 'next/link'
import { useState } from 'react'

export default function ImmersiveModeModal() {
    const [visible, setVisible] = useState(true)
    return (
        visible && (
            <aside>
                <h3>Try Immersive Mode</h3>
                <p>
                    Immersive mode provides a way to develop your character
                    while completing the origin path.
                </p>
                <p>
                    You'll answer a collection of multiple choice and open-ended
                    questions to help get a feel for your character's unique
                    backstory.
                </p>
                <p>
                    <Link href="./immersive">Try Immersive Mode</Link>
                    <button onClick={() => setVisible(!visible)}>Close</button>
                </p>
            </aside>
        )
    )
}
