import { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import '../css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';




class Footer extends Component {
    render() {
        return (<>   
        <div className="line"></div>         
        <div className="d-flex justify-content-between align-items-center container footer">
        <Link to='/'><img src="img/logo.png" alt="logo" className="py-4" /></Link>
            <div className="icons">
                {<FontAwesomeIcon icon={faFacebookF} />}
                {<FontAwesomeIcon icon={faTwitter} />}
                {<FontAwesomeIcon icon={faLinkedinIn} />}
                {<FontAwesomeIcon icon={faGithub} />}
            </div>

        </div>
        <p className="copyright">
                COPYRIGHT &copy;2023 DEVELOPED BY BME TEAM.
        </p>
        </>

        )
    }
}

export default Footer;