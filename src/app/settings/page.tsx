import { useAppSettings } from '@/context/AppSettingsContext'

export default function Page() {
    const settings = useAppSettings()

    return (
        <>
            <h1>Application Settings</h1>
        </>
    )
}
