import { OriginPath } from './OriginPath'
import { StatBlock } from './StatBlock'

export type Character = {
    name: string
    player_name: string
    exp: number
    stats: StatBlock
    origin: OriginPath
}
