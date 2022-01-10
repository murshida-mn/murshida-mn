import { Link } from "react-router-dom"
import { pathList } from "./pathList"

export const Header = () => {
    return (
    <div className="header">
        {pathList.map(({ to }) => (
            <Link to={to}>{to}</Link>
        ))}
    </div>
    )
}