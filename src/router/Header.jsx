import { Component } from "react";
import { Link } from "react-router-dom";
import '../css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faBars} />


class Header extends Component {


    render() {
        
        return (


                <div className="contaier header">
                    <div className="menudiv">
                    <img src="img/logo.png" alt="logo" className="py-4" />
                    <button className="btn btn-primary d-none menu" onClick={
                        () => {
                            let nav = document.querySelector('.header ul');
                            if (nav.style.display === 'none') {
                                nav.style.display = 'block';
                            }
                            else {
                                nav.style.display = 'none'
                            }
                        }
                    } >
                       {element}
                    </button>
                    </div>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/home">HOME</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/products">PRODUCTS</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/register">REGISTER</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/login">LOGIN</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/about">ABOUT US</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/contact">CONTACT US</Link>
                        </li>
                    </ul>
                </div>


        )
    }
}

export default Header;