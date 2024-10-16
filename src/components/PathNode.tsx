export default function PathNode({
    name,
    level,
}: {
    name: string
    level: number
}) {
    return (
        <div
            className="flex-auto text-center border border-solid border-slate-500 p-4 mx-2"
            data-level={level} // this just stops typescript from complaining, probably safe to remove at some point
        >
            {name}
            <button>[ Details ]</button> {/* This opens the modal */}
        </div>
    )
}
