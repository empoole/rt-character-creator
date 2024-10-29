import { HomeworldDetails } from '@/types/HomeworldDetails'
import { promises as fs } from 'fs'

import HomeworldDetailsModal from '../client/HomeworldDetailsModal'

export default async function InitHomeworldDetailsModal() {
    const file = await fs.readFile(
        process.cwd() + '/src/data/homeworlds.json',
        'utf8'
    )
    const data: HomeworldDetails[] = JSON.parse(file)

    return <HomeworldDetailsModal homeworlds={data} />
}
