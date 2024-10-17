import { promises as fs } from 'fs'
import OriginPathMap from '../client/OriginPathMap'

export default async function InitOriginPathMap() {
    const file = await fs.readFile(
        process.cwd() + '/src/data/paths.json',
        'utf8'
    )
    const levels = JSON.parse(file)

    return <OriginPathMap levels={levels} />
}
