import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/Contact.css'
export class contact extends Component {
    render() {
        return (
            <div className='my-5 container'>
            
            <div class="contact">
                <div class="contact-info ">
                <h3 class="title">Let's get in touch</h3>
                <div class="info">
                    <div class="information">
                    <img src= 'img/location.png' class="icon" alt="" />
                    <p>92 Cherry Drive Uniondale, NY 11553</p>
                    </div>
                    <div class="information">
                    <img src='img/email.png' class="icon" alt="" />
                    <p>lorem@ipsum.com</p>
                    </div>
                    <div class="information">
                    <img src='img/phone.png' class="icon" alt="" />
                    <p>123-456-789</p>
                    </div>
                </div>
    
                <div class="social-media">
                    
                    <div className="icons2">
                    {<FontAwesomeIcon icon={faFacebookF} />}
                    {<FontAwesomeIcon icon={faTwitter} />}
                    {<FontAwesomeIcon icon={faLinkedinIn} />}
                    {<FontAwesomeIcon icon={faGithub} />}
                    </div>
    
                </div>
            </div>
    
                <div class="contact-form">

                <form action="index.html" autocomplete="off" className='theForm'>
                    <h3 id='con' class="">Contact us</h3>
                
                    <div class="input-container">
                    <input type="" name="name" class="input" placeholder='Username' required/>
                
                    </div>
                    <div class="input-container">
                    <input type="email" name="email" class="input" placeholder='email' required/>
        
                    </div>
                    <div class="input-container">
                    <input type="tel" name="phone" class="input" placeholder='phone' required/>
                    
                    </div>
                    <div class="input-container textarea">
                    <textarea name="message" class="input" placeholder='message' required></textarea>
                
                    </div>
                    <input type="submit" value="Send"  id="btn" />
                </form>
                </div>
            </div>
            </div>    
        );
    }
}

export default contact
