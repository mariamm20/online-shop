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
                                <Link to={{
                                    pathname: `/products/${item.id}`,
                                    SelectedObject: item
                                }}
                                    className="col-lg-3 ">
                                    <div className="card">
                                        <img src={`img/${item.Image}`} className="card-img-top" alt={`item-0${index + 1}`} />
                                        <div className="card-body">
                                            <h5>{item.Name}</h5>
                                            <h6>${item.price}.00</h6>
                                        </div>
                                        <div className="cardFooter d-flex justify-content-between">
                                            <Link to="#" className="btn btn-outline-primary text-primary m-0 cardBtn "> {<FontAwesomeIcon icon={faCartShopping} />} Cart</Link>
                                            <Link to="#" className="btn btn-outline-success text-success m-0 cardBtn">{<FontAwesomeIcon icon={faBagShopping} />} Order</Link>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}





                    </div>
                    {/* <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav> */}
                </section>
            </>

        )
    }
}

export default Display;