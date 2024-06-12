import DataTable from 'react-data-table-component';
import {useEffect, useRef, useState} from "react";
import axiosClient from "../../axios-client.js";
import {Link, useNavigate} from "react-router-dom";
import Toast from "../../Toaster.js";





const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [pending, setPending] = useState(true);
    const navigate = useNavigate();

    

    const CustomLoader = () => {
        return (
            <i className={'fa fa-spinner fa-spin'}></i>
        )
    }

    const editHandler = (id) => {
        navigate(`/category/${id}`);
    }

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Edit',
            button: true,
            cell: (row) => <button onClick={(e) => editHandler(row.id)}  className={"btn btn-info"}><i className='fa fa-edit'></i></button> ,
        },
        {
            name: 'Delete',
            button: true,
            cell: (row) => <button  onClick={(e) => deleteHandler(row.id)} className={"btn btn-danger"}><i className={'fa fa-trash'}></i></button> ,
        },
    ];

    useEffect(() => {
        axiosClient.get('/category')
            .then((response)=> {
                setCategories(response.data);
                setPending(false);
            });
    }, []);

    const deleteHandler = (id) => {


        axiosClient.delete(`/category/${id}`)
            .then((res)=> {
                Toast.fire({
                    icon: "success",
                    title: res.data.message
                });
                const newCategories = categories.filter(category => category.id !== id);
                setCategories(newCategories);
            });
    }



    return (
        <>
            <div className="container-fluid" id="container-wrapper">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Category List</h1>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="./">Home</a></li>
                        <li className="breadcrumb-item">Category List</li>
                        <li className="breadcrumb-item active" aria-current="page">Simple Tables</li>
                    </ol>
                </div>

                <div className="row">
                    <div className="col-lg-12 mb-4">

                        <div className="card">
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Category List</h6>
                                <div className="card-action">
                                    <Link to="/category/create" className={"btn btn-primary"}><i className='fa fa-plus'></i> Add New</Link>
                                </div>
                            </div>
                            <div className="table-responsive">

                                <DataTable
                                    columns={columns}
                                    data={categories}
                                    progressPending={pending}
                                    progressComponent={<CustomLoader />}
                                />
                            </div>
                            <div className="card-footer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryList;