import { Component } from "react";
import '../css/display.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

class Display extends Component {
    render() {

        return (
            <>
                <section className="container">
                    <div className="featured-products pt-5">
                        <h3 className="">Featured Products</h3>
                        <div className="underline"></div>
                    </div>

                    <div className="cards displayCards">
                        {this.props.itemsList.map((item, index) => {
                            return (
                                <div
                                    className="col-lg-3 ">
                                    <div className="card">
                                        <Link to={{
                                            pathname: `/products/${item.id}`,
                                            SelectedObject: item
                                        }}>
                                            <img src={`img/${item.Image}`} className="card-img-top" alt={`item-0${index + 1}`} />
                                            <div className="card-body">
                                                <h5>{item.Name}</h5>
                                                <h6>${item.price}.00</h6>
                                            </div>
                                        </Link>
                                        <div className="cardFooter d-flex justify-content-between">
                                            <button className={`btn btn-outline-primary text-primary m-0 cardBtn add${item.id}`} onClick={() => this.props.addtocart(item, item.id)}> {<FontAwesomeIcon icon={faCartShopping} />} <span>Cart</span></button>
                                            <Link to={{
                                                pathname: `/order/${item.id}`,
                                                SelectedObject: item
                                            }} className="btn btn-outline-success text-success m-0 cardBtn">{<FontAwesomeIcon icon={faBagShopping} />} Order</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}





                    </div>

                </section>
            </>

        )

    }
}

export default Display;