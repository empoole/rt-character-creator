import { useCharacteristicsSettings } from '@/context/SettingsContext'

export default function Page() {
    const settings = useCharacteristicsSettings()

    return (
        <>
            <label htmlFor="totalRollsInPool">
                Total compelete stat rolls in dice pool
                <input
                    type="number"
                    name="totalRollsInPool"
                    value={settings.totalRollsInPool}
                    onChange={(e) => {}}
                />
            </label>
            <label htmlFor="totalRollsInPool">
                Total compelete stat rolls in dice pool
                <input type="number" name="totalRollsInPool" />
            </label>
        </>
    )
}

/*

TODO:

At some point this is only accessible if the GM has allowed it or
if there is no GM / group.

Allow players to configure the stat rolls, how many dice, how many re-rolls, etc

 */
