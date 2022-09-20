import { Component } from "react";
import { Link } from "react-router-dom";
import '../css/login.css'




class Register extends Component {
    state = {
        userEmail: '',
        userPassword: ''
    }
    InputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    saveData = () => {
        this.props.LoginHanlderRef({
            Email: this.state.userEmail,
            Password: this.state.userPassword,
            
        });

    }
    render() {
        
        return (
            
                <div className="register login d-flex justify-content-center ">
                     <h2>Login Form </h2>
                    <div className="underline"></div>
                    <form className="d-flex flex-column needs-validation mt-4" novalidate>
                        
                        <div className="">
                            <label for="validationCustomUsername" className="form-label">Email</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" className="form-control" name="userEmail" onChange={this.InputHandler} placeholder="mariam@yahoo.com" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <label for="validationCustom02" className="form-label">Password</label>
                            <input type="password" className="form-control" name="userPassword" onChange={this.InputHandler} placeholder="****************" id="validationCustom02" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div className="mt-3 text-center">
                            <Link to='/profile' className="btn btn-primary" type="submit" onClick={this.saveData} >Login</Link>
                        </div>
                    </form> 

                    
                </div>
           
        )
    }
}

export default Register;