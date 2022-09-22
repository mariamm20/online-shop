import React, { Component } from 'react'
import '../css/About.css'

export class About extends Component {
    render() {
        return (
            <div className='container'>
                <div className="mt-5 mb-3 about ">
                    <h2>About Us</h2>
                    <div className="underline"></div>
                </div>
                <div class="left">
                    <div class="picture">
                        <div>
                            <img src="img/About.jpeg" id='picture' alt='aboutImage' />
                        </div>
                    </div>
                    <div class="abotttt">

                        <div id='about'>
                            <h2 id="first-line">Phasellus vel interdum elit</h2>
                            <ul>
                                <li> Photo Credit goes to Pexels.com website. Aliquam erat volutpat. Pellentesque fringilla, ligula consectetur cursus scelerisque, leo elit pellentesque sapien, et pharetra arcu elit vitae sem. Suspendisse erat dui, condimentum in mi ac, varius tempor sapien. Donec in justo sit amet ex aliquet maximus ac quis erat.</li>
                                <li>Donec fermentum tincidunt tellus quis fermentum. Proin eget imperdiet purus. Nulla facilisi. Aliquam tincidunt porttitor dui sed euismod. Duis est libero, rhoncus fermentum turpis id, tempus fringilla ipsum. Nullam venenatis tincidunt neque vel hendrerit. Suspendisse porta pretium porttitor. </li>
                                <li>Sed purus quam, ultricies eu leo in, sollicitudin varius quam. Proin dictum urna ac diam fermentum tempus. Pellentesque urna urna, ullamcorper a tincidunt dignissim, venenatis in nisi. Vivamus in volutpat tellus. Etiam fermentum luctus posuere.</li>
                                <li> BME HTML Template can be converted into your desired CMS theme. You can use this Bootstrap v4.1.3 layout for any online shop. Please tell your friends about Tooplate. Thank you.</li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>



        );
    }
}

export default About;
