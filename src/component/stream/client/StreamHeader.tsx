import { Link } from "react-router-dom"
import GoogleAuth from "../Authentication/GoogleAuth"
import { nav } from "./nav"

export const StreamHeader = () => {
    return (
    <div className="header">
        {nav.map(({ Route }) => Route.map(({to, title}) => (
            <Link key={to} to={to}>{title}</Link>
        )))}
        <GoogleAuth />
    </div>
    )
}