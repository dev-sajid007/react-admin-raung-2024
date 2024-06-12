import {useEffect, useRef, useState} from "react";
import axiosClient from "../../axios-client.js";
import {Link,useNavigate} from "react-router-dom";
import Toast from "../../Toaster.js";


const CategoryCreate = () => {

    const  nameRef = useRef(null);
    const navigate = useNavigate();
    const  handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            name:nameRef.current.value
        }
        axiosClient.post('/category',payload)
            .then((res ) => {
                Toast.fire({
                    icon: "success",
                    title: res.data.message
                });
                navigate("/category/list");
            });
    }

    return (
        <>
            <div className="container-fluid" id="container-wrapper">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Category Create</h1>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="./">Home</a></li>
                        <li className="breadcrumb-item">Category Create</li>
                        <li className="breadcrumb-item active" aria-current="page">Simple Tables</li>
                    </ol>
                </div>

                <div className="row">
                    <div className="col-lg-12 mb-4">

                        <div className="card">
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Category Create</h6>
                                <div className="card-action">
                                    <Link to="/category/list" className={"btn btn-dark"}><i className='fa fa-arrow-left'></i> Back</Link>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mx-3">
                                    <label htmlFor="name">Name</label>
                                    <input ref={nameRef} type="text" className={'form-control'}/>
                                </div>

                                <div className="form-group mx-3">
                                    <button type='submit' className='btn btn-primary'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryCreate;