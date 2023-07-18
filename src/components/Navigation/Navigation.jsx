import Link from "next/link"

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-3">
            <div className="container-fluid">
                <Link href={'/'} className="navbar-brand">MOVIES APP</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-2">

                        <li className="nav-item">
                            <Link href={'/'}>HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/movies'}>MOVIES</Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/about'}>ABOUT</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation