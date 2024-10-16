import Link from 'next/link'

export default async function Home() {
    return (
        <>
            <section>
                <h4>Jump to step</h4>
                <p>
                    Jump to a specific step of the character creation process.
                </p>
                <ol>
                    <li>
                        <Link href="/characteristics">
                            Roll Characteristics
                        </Link>
                    </li>
                    <li>
                        <Link href="/origin">Origin Path</Link>
                    </li>
                    <li>Spend Experience Points</li>
                </ol>
            </section>
        </>
    )
}
