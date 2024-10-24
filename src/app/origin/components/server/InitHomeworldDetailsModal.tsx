import { HomeworldDetails } from '@/types/HomeworldDetails'
import HomeworldDetailsModal from '../client/HomeworldDetailsModal'

export default function InitHomeworldDetailsModal({
    data,
}: {
    data: HomeworldDetails
}) {
    return <HomeworldDetailsModal data={data} />
}
