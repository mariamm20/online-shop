import { useRef } from "react";
import '../css/order.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


const Order = (props) => {


    let product = props.location.SelectedObject;
    let user = JSON.parse(localStorage.getItem('userData'))
    const form = useRef();

    const sendemail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dolmpz6', 'template_d949zb9', form.current, 'MXABmTDfS_8HIBjMn')
            .then((result) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Invoice Send Successfully!',
                    text: 'Check Your Email',
                    showConfirmButton: 'OK',

                }).then((result) => {
                    if (result.isConfirmed) {
                        window.localStorage.removeItem(`product ${product.id}`)
                        window.location.href = '/products';
                    }
                }

                )
            }, (error) => {
                console.log(error.text);
            });
        e.target.rest();
    }

    if (localStorage.getItem('logedIn') === 'true') {
        return (
            <section className="container">
                <div className="mt-5 invoice">
                    <h2>Purchase Invoice</h2>
                    <div className="underline"></div>
                </div>
                <div className="order-details my-3">
                    <img src={`/img/${product.Image}`} alt="productImage" />
                    <div>
                        <h4>{product.Name}</h4>
                        <h6 className="text-primary">${product.price}.00</h6>
                    </div>
                </div>
                <div className="customer-details my-3 mb-5">
                    <form ref={form} onSubmit={sendemail}>
                        <h5>Customer Details</h5>
                        <div className="underline"></div>
                        <input type='text' value={product.Name} name="product_name" className="form-control d-none" />
                        <input type='text' value={product.price} name="product_price" className="form-control d-none" />
                        <p>Name</p>
                        <input type='text' value={user.Name} name="user_name" readOnly className="form-control read" />
                        <p>Email</p>
                        <input type='email' value={user.Email} name="user_email" readOnly className="form-control read" />
                        <p>Phone</p>
                        <input type='text' value={user.Phone} name="user_phone" readOnly className="form-control read" />
                        <p>Address</p>
                        <input type='text' name="user_address" placeholder="Type your address" className="form-control" required />
                        <p>Choose Payment Method</p>
                        <div class="form-check ">
                            <input class="form-check-input" type="radio" name="payment" id="inlineRadio1" onClick={() => {
                                let input = document.querySelector('.visa');

                                input.disabled = true;

                            }} value="cash" />
                            <label class="form-check-label" for="inlineRadio1"><FontAwesomeIcon icon={faSackDollar} /> Cash</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="payment" onClick={() => {
                                let input = document.querySelector('.visa');

                                input.disabled = false;

                            }} id="inlineRadio2" value="Visa, Visa Number :  " />
                            <label class="form-check-label" for="inlineRadio2" > <FontAwesomeIcon icon={faCcVisa} /> Visa</label>
                        </div>
                        <input type='text' placeholder="Visa Number" name="payment" disabled className="form-control my-3 visa" />

                        <input type="submit" className="btn btn-success p-2 m-0 cardBtn w-100" value={`Order Now`} />
                    </form>
                </div>
            </section>
        )
    } else {

        window.location.href = '/register'

    }

}

export default Order;