import InitOriginPathMap from './components/server/InitOriginPathMap'
import InitImmerisveModeModal from './components/server/InitImmerisveModeModal'

export default function Page() {
    return (
        <>
            <InitOriginPathMap />
            <InitImmerisveModeModal />
        </>
    )
}

/*
Players have two options for thier origin path
"Classic" is the one from the book
"Immersive" is the questionnaire
*/
