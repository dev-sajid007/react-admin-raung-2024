import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import axiosClient from "../../axios-client.js";
import {useStateContext} from "../../contexts/ContextProvider.jsx";

function Register() {

  const  nameRef = useRef();
  const  emailRef = useRef();
  const  passwordRef = useRef();
  const  confirmPasswordRef = useRef();
  const  {setUser,setToken} = useStateContext();
  const [errors, setErrors] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      password_confirmation:confirmPasswordRef.current.value,
    }

    axiosClient.post('/register',payload)
    .then(({ data }) => {
      setUser(data.user);
      setToken(data.token);
    })
    .catch(err => {
      const response = err.response;
      if (response && response.status === 422) {
        console.log(response.data.errors);
        setErrors(response.data.errors);
      }
    });
  }

  return (
    <div>
      <div className="container-login">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card shadow-sm my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="login-form">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Register</h1>
                      </div>
                      {errors &&
                          <div className="alert alert-danger">
                            {Object.keys(errors).map(key => (
                                <p key={key}>{errors[key][0]}</p>
                            ))}
                          </div>
                      }
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label>Name</label>
                          <input ref={nameRef} type="text" className="form-control" id="exampleInputFirstName" placeholder="Enter  Name" />
                        </div>

                        <div className="form-group">
                          <label>Email</label>
                          <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address" />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
                        </div>
                        <div className="form-group">
                          <label>Password Confirmation</label>
                          <input ref={confirmPasswordRef} type="password" className="form-control" id="exampleInputPasswordRepeat" placeholder="Repeat Password" />
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary btn-block">Register</button>
                        </div>
                        <hr />
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link className="font-weight-bold small" to='/login'>Already have an account?</Link>
                      </div>
                      <div className="text-center">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Register
