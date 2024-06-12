import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axiosClient from '../../axios-client';

function CategoryEdit() {

    const { id } = useParams();
    const [category, setCategory] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axiosClient.get(`category/${id}`)
            .then((res) => {
                setCategory(res.data);
            })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        axiosClient.put(`/category/${id}`,{name:category})
        .then((res) => {
            navigate('/category/list')
        });
    }

    return (
        <div>
               <div className="container-fluid" id="container-wrapper">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Category Edit</h1>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="./">Home</a></li>
                        <li className="breadcrumb-item">Category Edit</li>
                        <li className="breadcrumb-item active" aria-current="page">Simple Tables</li>
                    </ol>
                </div>

                <div className="row">
                    <div className="col-lg-12 mb-4">

                        <div className="card">
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Category Edit</h6>
                                <div className="card-action">
                                    <Link to="/category/list" className={"btn btn-dark"}><i className='fa fa-arrow-left'></i> Back</Link>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mx-3">
                                    <label htmlFor="name">Name</label>
                                    <input value={category.name} onChange={(e) => setCategory(e.target.value)} type="text" className={'form-control'}/>
                                </div>

                                <div className="form-group mx-3">
                                    <button type='submit' className='btn btn-primary'>Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryEdit
