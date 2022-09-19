import { Component } from "react";
import { Link } from "react-router-dom";
import '../css/home.css'
class Home extends Component {
    render() {
        return (
            <>
                <section className="home">

                    <div className="homeText">
                        <h1>BME Online Shop</h1>
                        <div className="underline"></div>
                        <p className="mt-3">
                            Here, You can find the most
                            elegent and fashionable clothes
                            with the best qualities, best price
                            and best offers.
                        </p>
                        <button className="btn btn-primary mt-3">SHOP NOW</button>
                    </div>
                </section>
                <section className="homeProducts container">
                    <div className="featured-products">
                        <h3 className="">Featured Products</h3>
                        <div className="underline"></div>
                    </div>
                    <div className="cards">
                        {this.props.itemsList.slice(0,4).map((item,index) => {
                            return (
                                <Link to="#">
                                    <div className="card">
                                        <img src={`img/${item.Image}`} className="card-img-top" alt={`item-0${index+1}`}/>
                                        <div className="card-body">
                                            <h5>{item.Name}</h5>
                                            <h6>${item.price}.00</h6>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}



                    </div>


                </section>
                <div className="discover">

                    <h3>Discover Products</h3>
                    <p>
                        Let's discove more fashionable and elegent clothes
                        with best prices EVER!
                    </p>
                    <button className="btn btn-outline-primary btn-light  mt-3">Discover</button>

                </div>
            </>

        )
    }
}

export default Home;