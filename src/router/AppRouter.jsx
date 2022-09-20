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


export default class AppRouter extends Component {
    state = {
        items: null,
        persons: null,
        loged: false,
        userData:null,
        localEmail: localStorage.getItem('Email'),
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
    handleNav(){
        let p = document.querySelector('.header .profile');
        let r = document.querySelector('.header .reg');
        let lon = document.querySelector('.header .lon');
        if(p.innerHTML !== ''){
            p.style.display = 'block'
            r.style.display = 'none'
            lon.style.display = 'none'
        }
        else{
            p.style.display = 'none'
            r.style.display = 'block'
            lon.style.display = 'block'
        }
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
                            loged: true,
                            userData: res[check]
                        },()=>{console.log(this.state.loged,this.state.userData)})
                        Swal.fire({
                            icon: 'success',
                            title: 'Loged In Successfully!',
                            showConfirmButton: false,
                            timer:2000,                     
                          })
                          window.localStorage.setItem('userData',JSON.stringify(res[check]))
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
    render() {
        
        return (
            <div>
                <BrowserRouter>
                    <Header loginState= {this.state.loged} userData={this.state.userData} />
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
                                <Display itemsList={this.state.items} />
                            );
                        }}
                        path="/products"
                        exact

                    />
                    <Route
                        component={(props) => {
                            return (
                                <SingleProduct {...props} itemsList={this.state.items} />
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
                    <Footer />
                </BrowserRouter>


            </div>
        )}
       
    
}