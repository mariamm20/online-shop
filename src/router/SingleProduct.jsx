import { Component } from "react";
import '../css/singleProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


class SingleProduct extends Component {
    
    render() {
        console.log(this.props.location.SelectedObject)
        return (
            <section className="d-flex singleProduct">
                <div className="productImage">
                    <img src={`../img/${this.props.location.SelectedObject.Image}`} alt="product" />
                </div>
                <div className="productDetails">
                    <h2>
                        {this.props.location.SelectedObject.Name}
                    </h2>

                    <h5 className="productPrice">${this.props.location.SelectedObject.price}.00</h5>

                    <p className="productDescription">
                    {this.props.location.SelectedObject.description}
                    </p>
                    <p className="productCategory">
                    Category: {this.props.location.SelectedObject.category}
                    </p>
                    <h6 className="productStock">Only <span className="text-bold text-primary">{this.props.location.SelectedObject.stock}</span> in Stock. Hurry Up and Buy it. </h6>
                    <div className="cardFooter d-flex">
                        <button  className={`btn btn-outline-primary text-primary m-0 cardBtn me-3 added`} onClick={() => this.props.addtocart(this.props.location.SelectedObject, this.props.location.SelectedObject.id)}> {<FontAwesomeIcon icon={faCartShopping} />} <span>Add To Cart</span></button>
                        <Link to={{
                                                pathname: `/order/${this.props.location.SelectedObject.id}`,
                                                SelectedObject: this.props.location.SelectedObject
                                            }} className="btn btn-outline-success text-success m-0 cardBtn">{<FontAwesomeIcon icon={faBagShopping} />} Order Now</Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default SingleProduct;