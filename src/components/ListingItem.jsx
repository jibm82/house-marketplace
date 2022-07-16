import { Link } from "react-router-dom"
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg"
import bedIcon from "../assets/svg/bedIcon.svg"
import bathtubIcon from "../assets/svg/bathtubIcon.svg"

function ListingItem({listing, id}) {
  return (
    <li className="categoryListing">
      <Link to={`/category/${listing.type}/${id}`} className="categoryListingLink">
        <img src={listing.imageUrls[0]} alt={listing.name} className="categoryListingImg" />

        <div className="categoryListingDetails">
          <p className="categoryListingLocation">
            {listing.location}
          </p>
          <p className="categoryListingName">{listing.name}</p>
          <p className="categoryListingPrice">
            ${(listing.offer ? listing.discountedPrice : listing.regularPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            { listing.type === 'rent' && " / Month"}
          </p>
        </div>

        <div className="categoryListingInfoDiv">
          
        </div>
      </Link>
    </li>
  )
}

export default ListingItem