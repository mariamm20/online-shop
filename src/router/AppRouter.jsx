import { Component } from "react";
import Header from './Header';
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./Footer";
import Display from './Display';
import SingleProduct from "./SingleProduct";

export default class AppRouter extends Component {
    state = {
        staticItems:[
            {
                "Name": "Proin vel ligula",
                "Image": "item-01.jpg",
                "price": 15
              },
              {
                "Name": "Erat odio rhoncus",
                "Image": "item-02.jpg",
                "price": 25
              },
              {
                "Name": "Sed purus quam",
                "Image": "item-03.jpg",
                "price": 45
              },
              {
                "Name": "Morbi aliquet",
                "Image": "item-04.jpg",
                "price": 55
              },
        ],
        items:null,
    }
    
    componentDidCatch(){
        this.getItems();
    }
    getItems(){
        fetch('http://localhost:3000/products')
        .then((data) => data.json())
        .then((res) => {
          this.setState({
            items: res,
          });
          console.log("Res:", res);
        });
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />       
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
                                <Home itemsList={this.state.items}/>
                            );
                        }}
                        path="/home"
                    />
                    <Route
                        component={() => {
                            return (
                                <Display itemsList={this.state.items}/>
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
                    <Footer />
                </BrowserRouter>
                

            </div>
        )
    }
}