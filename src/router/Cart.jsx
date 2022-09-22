import { Component } from "react";
import { Link } from "react-router-dom";
import '../css/cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faSquareMinus  } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faBars} />


class Cart extends Component {

    render() {
        let arr = []
        for (let i = 1; i <= 8; i++) {
            if (localStorage.getItem(`product ${i}`) !== null) {
                console.log(localStorage.getItem(`product ${i}`))
                arr.push(localStorage.getItem(`product ${i}`))
            }

        }
        console.log(arr.length)
        if (arr.length === 0) {
            return (
                <section className="container cart">
                    <div className="featured-products pt-5">
                        <h3 className="">Shopping Cart</h3>
                        <div className="underline"></div>
                    </div>
                    <div className={`my-4 big-container`}>
                        <div className="card-container p-5 my-5">
                            <h5 className="opacity-75"> Nothing Added to Cart Yet!</h5>
                        </div>
                    </div>
                </section>
            )
        } else {


            return (
                <section className="container cart">
                    <div className="featured-products pt-5">
                        <h3 className="">Shopping Cart</h3>
                        <div className="underline"></div>
                    </div>

                    {

                        arr.map((item, index) => {

                            let product = JSON.parse(item);

                            return (
                                <div className={`my-4 big-container${product['id']}`}>
                                    <div className="card-container">
                                        <img src={`img/${product['Image']}`} alt='productImage' />
                                        <div className="oneProduct">
                                            <div className="d-flex justify-content-between">
                                                <h4>{product['Name']}</h4>
                                                <button className="removeBtn" onClick={() => this.props.remove(product['id'])}> {<FontAwesomeIcon icon={faSquareMinus} size='xl' color="#dc3545" />}</button>
                                            </div>
                                            <h6 className="text-primary">${product['price']}.00</h6>
                                            <p className="mb-0">{product['description']}</p>
                                            <Link to={{
                                                pathname: `/order/${product.id}`,
                                                SelectedObject: product
                                            }} className="btn btn-outline-success text-success m-0 cardBtn">Order Now</Link>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }





                </section>
            )
        }
    }
}

export default Cart;