import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import axiosClient from "../../axios-client.js";
import {useStateContext} from "../../contexts/ContextProvider.jsx";

function Login() {
  const  [errors,SetErrors] = useState(null);
  const {setUser,setToken} = useStateContext();

  const  emailRef = useRef();
  const  passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email:emailRef.current.value,
      password:passwordRef.current.value,
    };
    SetErrors(null);
    axiosClient.post('/login',payload)
        .then(({ data }) => {
          setUser(data.user);
          setToken(data.token);
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            if (response.data.errors){
              SetErrors(response.data.errors);
            }
            else{
              SetErrors({
                errors: [response.data.message],
              })
            }
          }
        });
  }

  return (
    <div>
      <div className="container-login">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-12 col-md-9">
            <div className="card shadow-sm my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="login-form">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Login</h1>
                      </div>
                      {errors &&
                          <div className="alert alert-danger">
                            {Object.keys(errors).map(key => (
                                <p key={key}>{errors[key][0]}</p>
                            ))}
                          </div>
                      }
                      <form className="user" onSubmit={handleSubmit} >
                        <div className="form-group">
                          <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address" />
                        </div>
                        <div className="form-group">
                          <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small" style={{ lineHeight: '1.5rem' }}>
                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                            <label className="custom-control-label" htmlFor="customCheck">Remember
                              Me</label>
                          </div>
                        </div>
                        <div className="form-group">
                          <button type={"submit"} className="btn btn-primary btn-block">Login</button>
                        </div>
                        <hr />
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link className="font-weight-bold small" to="/register">Create an Account!</Link>
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

export default Login
