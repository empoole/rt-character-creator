export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="flex">
            <span>Histrinomicon</span>
            <span>&copy; 2024 - {year}</span>
        </footer>
    )
}
