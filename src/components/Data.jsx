import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { DELETE_PRODUCT_PROCESS, GET_PRODUCT_PROCESS, PUT_PRODUCT_PROCESS } from './product/action/action';

const MySwal = withReactContent(Swal);

const Data = () => {
    const all_Data = useSelector((state) => state.product_reducer);
    const dispatch = useDispatch();
    const [index, setindex] = useState();
    const [view, setview] = useState({});

    useEffect(() => {
        dispatch({ type: GET_PRODUCT_PROCESS });
    }, [dispatch]);

    // delete function
    const handleDelete = (index) => {
        const data = all_Data.product_data[index];

        MySwal.fire({title: 'Are you sure?',text: 'You will not be able to recover this product!', icon: 'warning',showCancelButton: true, confirmButtonText: 'Yes, delete it!',cancelButtonText: 'Cancel', }).then((result) => {
            if (result.isConfirmed) {
                dispatch({ type: DELETE_PRODUCT_PROCESS, payload: data, index });
                MySwal.fire('Deleted!', 'Your product has been deleted.', 'success');
            }
        });
    };

    const handleUpdate = (val, ind) => {
        setview(val);
        setindex(ind);
    };

    const handleput = (e) => {
        setview({ ...view, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        dispatch({ type: PUT_PRODUCT_PROCESS, payload: view, index });
        MySwal.fire('Saved!', 'Your product has been updated.', 'success');
    };

    return (
        <>
            <div>
                <input
                    name="product_name"
                    value={view.product_name}
                    className="form-control"
                    onChange={(e) => handleput(e)}
                    placeholder="Product name"
                />
                <input
                    name="product_price"
                    value={view.product_price}
                    className="form-control mt-2"
                    onChange={(e) => handleput(e)}
                    placeholder="Product price"
                />
                <input
                    name="product_description"
                    value={view.product_description}
                    className="form-control mt-2"
                    onChange={(e) => handleput(e)}
                    placeholder="Product description"
                />
                <button onClick={handleSave} className="btn btn-primary mt-2 md-3">
                    Save
                </button>
            </div>
            <div className="row">
                {all_Data.product_data?.map((val, ind) => (
                    <div className="card ml-2 mt-3" key={ind} style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">{val.product_name}</h6>
                            <p className="card-text">{val.product_price}</p>
                            <p className="card-text">{val.product_description}</p>
                            <p className="card-text">{val.availability}</p>
                            <button className="btn btn-primary" onClick={() => handleDelete(ind)}>
                                Delete
                            </button>
                            <button className="btn btn-primary ml-3" onClick={() => handleUpdate(val, ind)}>
                                Update
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Data;
