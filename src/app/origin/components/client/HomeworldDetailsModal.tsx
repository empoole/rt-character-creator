'use client'

import {
    HomeworldDetails,
    CharacteristicModifiers,
} from '@/types/HomeworldDetails'

export default function DetailsModal({ data }: { data: HomeworldDetails }) {
    return (
        <aside>
            <header>
                <h1>Home World</h1>
                <h2>{data.title}</h2>
                {data.fluff.quote && (
                    <blockquote>{data.fluff.quote}</blockquote>
                )}
                <p>{data.fluff.description}</p>
            </header>
            <section>
                <h4>Modifiers</h4>
                <ul>
                    {Object.keys(data.modifiers).map((stat, index) => {
                        return (
                            <li key={index}>
                                <strong>{stat}</strong>:
                                {
                                    data.modifiers[
                                        stat as keyof CharacteristicModifiers
                                    ]
                                }
                                )
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
                        data.skills.map(
                            (skill) => `${skill.name}, `
                        ) /* This only displays the skill name, there will need to be a subcomponent that figures out trained/basic/etc */
                    }
                </p>
                <p>
                    <strong>Talents</strong>:{' '}
                    {data.talents.map((talent) => `${talent.name}, `)}
                </p>
            </section>
            <section>
                <h4>Special Abilities</h4>
                <p>{data.special_abilities.join(', ')}</p>
            </section>
            <section>
                <h4>Bonuses and Penalties</h4>
                <p>
                    <strong>Bonuses</strong>: {data.bonuses.join(', ')}
                </p>
                <p>
                    <strong>Penalties</strong>: {data.penalties.join(', ')}
                </p>
            </section>
            <section>
                <h4>Starting Wounds</h4>
                {data.starting_wounds}
            </section>
            <section>
                <h4>Fate Points</h4>
                {data.fate_points_description}
            </section>
        </aside>
    )
}
