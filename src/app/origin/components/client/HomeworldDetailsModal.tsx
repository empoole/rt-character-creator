'use client'
import { useState } from 'react'
import {
    HomeworldDetails,
    CharacteristicModifiers,
} from '@/types/HomeworldDetails'

export default function HomeworldDetailsModal({
    homeworlds,
}: {
    homeworlds: HomeworldDetails[]
}) {
    const selected = homeworlds.find((world) => world.id === selectedId)

    const [selectedId, setSelectedId] = useState(1)

    return (
        <aside>
            <header>
                <h1>Home World</h1>
                <h2>{selected?.title}</h2>
                {selected?.fluff.quote && (
                    <blockquote>{selected.fluff.quote}</blockquote>
                )}
                <p>{selected?.fluff.description}</p>
            </header>
            <section>
                <h4>Modifiers</h4>
                <ul>
                    {selected &&
                        Object.keys(selected.modifiers).map((stat, index) => {
                            return (
                                <li key={index}>
                                    <strong>{stat}</strong>:
                                    {
                                        selected.modifiers[
                                            stat as keyof CharacteristicModifiers
                                        ]
                                    }
                                </li>
                            )
                        })}
                </ul>
            </section>
            <section>
                <h4>Skills and Talents</h4>
                <p>
                    <strong>Skills</strong>:{' '}
                    {
                        selected?.skills.map(
                            (skill) => `${skill.name}, `
                        ) /* This only displays the skill name, there will need to be a subcomponent that figures out trained/basic/etc */
                    }
                </p>
                <p>
                    <strong>Talents</strong>:{' '}
                    {selected?.talents.map((talent) => `${talent.name}, `)}
                </p>
            </section>
            <section>
                <h4>Special Abilities</h4>
                <p>{selected?.special_abilities.join(', ')}</p>
            </section>
            <section>
                <h4>Bonuses and Penalties</h4>
                <p>
                    <strong>Bonuses</strong>: {selected?.bonuses.join(', ')}
                </p>
                <p>
                    <strong>Penalties</strong>: {selected?.penalties.join(', ')}
                </p>
            </section>
            <section>
                <h4>Starting Wounds</h4>
                {selected?.starting_wounds}
            </section>
            <section>
                <h4>Fate Points</h4>
                {selected?.fate_points_description}
            </section>
        </aside>
    )
}
