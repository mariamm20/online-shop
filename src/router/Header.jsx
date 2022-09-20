import { Component } from "react";
import { Link } from "react-router-dom";
import '../css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faBars} />


class Header extends Component {


    render() {
        if(this.props.loginState){
        return (

                <div className="contaier header">
                    <div className="menudiv">
                    <Link to='/'><img src="img/logo.png" alt="logo" className="py-4" /></Link>
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
                            <Link className="nav-link profile text-primary" to="/profile">{this.props.userData['Name'].toUpperCase()}</Link>
                        </li>
                        
                        <li class="nav-item">
                            <Link className="nav-link" to="/about">ABOUT US</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/contact">CONTACT US</Link>
                        </li>
                    </ul>
                </div>


        )}else{
            return (

                <div className="contaier header">
                    <div className="menudiv">
                    <Link to='/'><img src="img/logo.png" alt="logo" className="py-4" /></Link>
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
                            <Link className="nav-link reg" to="/register">REGISTER</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link lon" to="/login">LOGIN</Link>
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
}

export default Header;