import { Component } from "react";
import { Link } from "react-router-dom";
import '../css/register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faBars} />


class Register extends Component {
    state = {
        userName: '',
        userEmail: '',
        userPassword: '',
        userPhone: ''
    }
    InputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    saveData = () => {
        this.props.AddHanlderRef({
            Name: this.state.userName,
            Email: this.state.userEmail,
            Password: this.state.userPassword,
            Phone: this.state.userPhone
        });

    }
    render() {

        return (
            <div className="registerSection">
                <div className="register d-flex justify-content-center ">
                    <h2>Registration Form </h2>
                    <div className="underline"></div>
                    <form className="d-flex flex-column needs-validation mt-4" novalidate>
                        <div className="">
                            <label for="validationCustom01" className="form-label">Name</label>
                            <input type="text" className="form-control" name="userName" onChange={this.InputHandler} placeholder="Mariam Mohamed" id="validationCustom01" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
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

                        <div className="">
                            <label for="validationCustom05" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" name="userPhone" onChange={this.InputHandler} id="validationCustom05" placeholder="01091857132" required />
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>
                        <p className="mt-3">Already Have Account. <a className="text-primary" href="/login">LOG IN</a></p>

                        <div className="mt-3 text-center">
                            <Link to='/login' className="btn btn-primary" type="submit" onClick={this.saveData} >Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;