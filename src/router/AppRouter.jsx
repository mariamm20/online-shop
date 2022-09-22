import { Component } from "react";
import Header from './Header';
import Home from "./Home";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Footer from "./Footer";
import Display from './Display';
import SingleProduct from "./SingleProduct";
import Register from "./Register";
import Login from './Login'
import Swal from 'sweetalert2'
import Cart from './Cart'
import Order from "./Order";
import About from "./About";
import Contact from './Contact'

export default class AppRouter extends Component {
    state = {
        items: null,
        persons: null,
        userData:null,  
    }
    

    componentDidCatch() {
        this.getItems();
    }
   

    getItems() {
        fetch('http://localhost:3000/products')
            .then((data) => data.json())
            .then((res) => {
                this.setState({
                    items: res,
                });
                console.log("Res:", res);
            });
    }

    AddHandler = (_newObject) => {
        fetch("http://localhost:3000/registers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(_newObject),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
            });
    }
    
    LoginHandler = (obj) => {
        let emails = [];
        let passwords = [];
        fetch('http://localhost:3000/registers')
            .then((data) => data.json())
            .then((res) => {
                this.setState({
                    persons: res,
                });
                res.map((item) => {
                    emails.push(item['Email']);
                    passwords.push(item['Password']);
                })
                let check = emails.indexOf(obj['Email']);

                if (check !== -1) {
                    if (passwords[check] === obj['Password']) {
                        this.setState({
                            userData: res[check]
                        },()=>{console.log(this.state.loged,this.state.userData)})
                        Swal.fire({
                            icon: 'success',
                            title: 'Loged In Successfully!',
                            showConfirmButton: false,
                            timer:2000,                     
                          })
                          window.localStorage.setItem('userData',JSON.stringify(res[check]));
                          window.localStorage.setItem('logedIn','true');
                          window.location.href='/home'
                          this.handleNav();
                    }
                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Invalid Password!',
                            
                          })
                    }
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Invalid Email!',
                        
                      })
                }


            });
    }

    AddToCard = (productData , id) =>{
        if(localStorage.getItem(`product ${id}`) !== null){
            Swal.fire({
                icon: 'info',
                title: 'Already Added!',
                showConfirmButton: false,
                timer:1500,                     
              })
        }
        else{
            localStorage.setItem(`product ${id}`,JSON.stringify(productData));

            let badge = document.querySelector('.badge');
            
            badge.innerHTML = parseInt(badge.innerHTML) +1 ;

            Swal.fire({
                icon: 'success',
                title: 'Added Successfully!',
                showConfirmButton: false,
                timer:1500,                     
              })
        }
       
        
        
        
    }
    
    RemoveHandler = (id)=>{
        localStorage.removeItem(`product ${id}`);
        let contain = document.querySelector(`.big-container${id}`);
        // console.log(contain)
        contain.remove();
        let badge = document.querySelector('.badge');
        badge.innerHTML = parseInt(badge.innerHTML) - 1;
        if(badge.innerHTML === '0'){
            window.location.reload();
        }
    }
    
    render() {
        
        return (
            <div>
                <BrowserRouter>
                    <Header  userData={this.state.userData} />
                    <Route
                        component={() => {
                            return (
                                <Home itemsList={this.state.items} />
                            );
                        }}
                        path="/"
                        exact
                    />
                    <Route
                        component={() => {
                            return (
                                <Home itemsList={this.state.items} />
                            );
                        }}
                        path="/home"
                    />
                    <Route
                        component={() => {
                            return (
                                <Display itemsList={this.state.items} addtocart={this.AddToCard} />
                            );
                        }}
                        path="/products"
                        exact

                    />
                    <Route
                        component={(props) => {
                            return (
                                <SingleProduct {...props} itemsList={this.state.items} addtocart={this.AddToCard} />
                            );
                        }}
                        path="/products/:id"

                    />
                    <Route
                        component={(props) => {
                            return (
                                <Register {...props} AddHanlderRef={this.AddHandler} />
                            );
                        }}
                        path="/register"

                    />
                    <Route
                        component={(props) => {
                            return (
                                <Login {...props} LoginHanlderRef={this.LoginHandler} />
                            );
                        }}
                        path="/login"

                    />
                    <Route
                        component={() => {
                            return (
                                <Cart remove = {this.RemoveHandler} />
                            );
                        }}
                        path="/cart"

                    />
                    <Route
                        component={(props) => {
                            return (
                                <Order {...props} />
                            );
                        }}
                        path="/order/:id"

                    />
                    <Route
                        component={() => {
                            return (
                                <About  />
                            );
                        }}
                        path="/about"

                    />
                    <Route
                        component={() => {
                            return (
                                <Contact />
                            );
                        }}
                        path="/contact"

                    />
                    <Footer />
                </BrowserRouter>


            </div>
        )}
       
    
}