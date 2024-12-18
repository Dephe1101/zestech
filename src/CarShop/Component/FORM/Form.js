import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_URL } from '../../../config';

export default function Form() {
    const dispatch = useDispatch()
    const carList = useSelector(state => state.CarReducers)
    console.log('demo', carList.carList);
    const [state, setState] = useState({
        tenSP: '',
        giaTien: '',
        hinhAnh: '',
        loai: '',
        content: '',

    })

    const handleChange = (e) => {
        let { value, name } = e.target
        // console.log({ value, name });
        setState({
            ...state,
            [name]: value
        })
    }


    const sendItem = (e) => {
        e.preventDefault()
        if (state.tenSP === "" || state.loai === "") {
            return alert("Tên SP và loại SP không được để trống")
        } else {
            let promise = axios({
                url: API_URL,
                method: "POST",
                data: state
            })
            promise.then(alert("Tạo sản phảm thành công")).catch("Tạo sản phẩm thất bại")
        }
    }

    const renderDemoReducers = () => {
        return carList.carList.map((item, index) => {
            return <div className='col-3'>
                <div className="card text-start">
                    <img className="card-img-top" src={item.hinhAnh} alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">{item.tenSP}</h4>
                        <h4 className="card-title">{item.loai}</h4>
                        <h4 className="card-title">{item.giaTien}</h4>
                        <h4 className="card-title">{item.content}</h4>
                    </div>
                </div>
            </div>
        })
    }

    console.log(state);

    return (
        <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration" style={{ borderRadius: 15 }}>
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="firstName"  >TenSP</label>
                                                    <input onChange={handleChange} name='tenSP' type="text" id="firstName" className="form-control form-control-lg" required />

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="firstName"  >GiamGia</label>
                                                    <input onChange={handleChange} name='giamGia' type="text" id="firstName" className="form-control form-control-lg" required />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 d-flex align-items-center">
                                                <div className="form-outline datepicker w-100">
                                                    <label htmlFor="birthdayDate" className="form-label">Gia Tien</label>
                                                    <input onChange={handleChange} name='giaTien' type="text" className="form-control form-control-lg" id="birthdayDate" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4 d-flex align-items-center">
                                                <div className="form-outline datepicker w-100">
                                                    <label htmlFor="birthdayDate" className="form-label">Hinh Anh</label>
                                                    <input onChange={handleChange} name='hinhAnh' required type="text" className="form-control form-control-lg" id="birthdayDate" />

                                                </div>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="emailAddress">Loai</label>
                                                    <input onChange={handleChange} name='loai' type="email" id="emailAddress" className="form-control form-control-lg" />

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="phoneNumber">Content</label>
                                                    <input onChange={handleChange} name='content' type="tel" id="phoneNumber" className="form-control form-control-lg" />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-2">
                                            <button className='btn btn-primary' type='submit' onClick={sendItem}>Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='row'>
                        {renderDemoReducers()}
                    </div>
                </div>
            </section>
        </div>
    )
}
