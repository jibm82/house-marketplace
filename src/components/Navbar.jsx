import { useNavigate, useLocation } from "react-router-dom"
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg"
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg"
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg"

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    return route === location.pathname
  }

  const routeFill = (route) => {
    return pathMatchRoute(route) ? "#2c2c2c" : "#8f8f8f"
  }

  const routeNameClass = (route) => {
    return pathMatchRoute(route) ? "navbarListItemNameActive" : "navbarListItemName"
  }

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <ExploreIcon fill={routeFill("/")} width="36px" height="36px"/>
            <p className={routeNameClass("/")}>Explore</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <OfferIcon fill={routeFill("/offers")} width="36px" height="36px"/>
            <p className={routeNameClass("/offers")}>Offers</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <PersonOutlineIcon fill={routeFill("/profile")} width="36px" height="36px"/>
            <p className={routeNameClass("/profile")}>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar