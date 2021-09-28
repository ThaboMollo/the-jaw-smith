import React, { useState } from 'react';
import ModernDatepicker from 'react-modern-datepicker';

import Layout from '../../Components/Layout/Layout';
import "react-datepicker/dist/react-datepicker.css";

const Appointments = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        sex: "",
        email: "",
        cell_number: "",
        street: "",
        city: "",
        province: "",
        postal_code: "",
        ap_type: "",
        proceedure: "",
        symptom: "",
        pro_other: "",
        ap_other: "",
        pay_type: "",
        pay_other: "",
        time: "",
        p_details: false,
        ap_details: false,
        pay: false,
    });

    const pInfoValid = () => {
        if (data.first_name === "" && data.last_name === "" && data.sex === "" && data.email === "" && data.cell_number === "" && data.street === "" && data.city === "" && data.province === "" && data.postal_code === "") {
            alert("Form Invalid: Please fill in all the details correctly");
            return false;
        }
        else {
            return true;
        }
    }
    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };
    const submitAp = (e) => {
        setData({
            ...data,
            pay: true
        })
        e.preventDefault();
        alert("Appointment request sent. Please await confirmation email.")
    }
    const pDetailsNext = () => {
        if (pInfoValid) {
            setData({
                ...data,
                p_details: true
            })
        }
        else {
            console.log('Shit');
        }
    };
    const paymentBack = () => {
        setData({
            ...data,
            p_details: true,
            ap_details: false
        })
    }
    const proceedureNext = () => {
        setData({
            ...data,
            ap_details: true
        });
        console.log(data);
    }
    const proceedureBack = () => {
        setData({
            ...data,
            p_details: false
        })
    }
    const patientForm = (
        <form className='AppForm' onSubmit={pDetailsNext} validate="true">
            <input
                type="text"
                name='first_name'
                className='form-control'
                placeholder=' * First Name'
                required
                value={data.first_name}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name='last_name'
                className='form-control'
                placeholder=' * Last Name'
                required
                value={data.last_name}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name='sex'
                className='form-control'
                placeholder=' * Gender'
                required
                value={data.sex}
                onChange={handleInputChange}
            />
            <input
                type="email"
                name='email'
                className='form-control'
                placeholder=' * E-Mail'
                required
                value={data.email}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name='cell_number'
                className='form-control'
                placeholder=' * Cell Number'
                required
                value={data.cell_number}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name='street'
                className='form-control'
                placeholder=' * Street'
                required
                value={data.street}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name='city'
                className='form-control'
                placeholder=' * City'
                required
                value={data.city}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name='province'
                className='form-control'
                placeholder=' * Province'
                required
                value={data.province}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name='postal_code'
                className='form-control'
                placeholder=' * Postal Code'
                required
                value={data.postal_code}
                onChange={handleInputChange}
            />
            {
                data.postal_code === ""
                    ? ""
                    : <div className='btn-pair'>
                        <a href='/patients-home' className='secondary-btn'>Back</a>
                        <button className='btn'>NEXT</button>
                    </div>
            }

        </form>
    )
    const appointmentForm = (
        <form className='AppForm' onSubmit={proceedureNext} validate="true">
            <select className='form-control' name='ap_type' id='ap_type' required value={data.ap_type} onChange={handleInputChange}>
                <option value="None">* Please Choose</option>
                <option value="Consultation">Consultation</option>
                <option value="Follow up">Follow Up</option>
                <option value="Self-prescribed">Self-prescribed Proceedure</option>
                <option value="Other">Other</option>
            </select>
            {
                data.ap_type === "Other"
                    ? <div className='op-sec'>
                        <input
                            id='ap_other'
                            name='ap_other'
                            type='text'
                            placeholder='* Other'
                            className='form-control'
                            required
                            value={data.ap_other}
                            onChange={handleInputChange}
                        />
                    </div>
                    : <br />
            }
            <select className='form-control' name='proceedure' id='proceedure' required value={data.proceedure} onChange={handleInputChange}>
                <option value="None">* Please Choose</option>
                <option value="Fillings">Fillings</option>
                <option value="Crowns">Crowns</option>
                <option value="Braces">Braces</option>
                <option value="Teeth Cleaning">Teeth Cleaning</option>
                <option value="Teeth Whitening">Teeth Whitening</option>
                <option value="Extractions">Extractions</option>
                <option value="Veneers">Veneers</option>
                <option value="Other">Other</option>
            </select>
            {
                data.proceedure === "Other"
                    ? <div className='op-sec'>
                        <input
                            id='pro_other'
                            name='pro_other'
                            type='text'
                            placeholder='* Other'
                            className='form-control'
                            required
                            value={data.pro_other}
                            onChange={handleInputChange}
                        />
                    </div>
                    : <br />
            }
            <textarea
                name="symptom"
                id="symptom"
                className="form-control"
                rows="3"
                placeholder="Symptom Description, Character LIMIT: 200"
                maxLength="200"
                value={data.symptom}
                onChange={handleInputChange}
            />
            <br />
            <ModernDatepicker
                date={startDate}
                format={'DD-MM-YYYY'}
                showBorder
                onChange={date => setStartDate(date)}
                placeholder={'Select a date'}
            />
            <input
                id='time'
                name='time'
                type='text'
                placeholder='* Time'
                className='form-control'
                maxLength="5"
                onChange={handleInputChange}
                required
                value={data.time}
            />
            {
                data.time === "" && data.ap_type === "None" && data.proceedure === "None" 
                    ? ""
                    : <div className='btn-pair'>
                        <button onClick={proceedureBack} className='secondary-btn'>Back</button>
                        <button className='btn'>NEXT</button>
                    </div>
            }
        </form>
    )
    const paymentForm = (
        <form className='AppForm' onSubmit={submitAp} validate="true">
            <h5>Please seclect your payment method</h5>
            <select className='form-control' name='pay_type' id='pay_type' required value={data.pay_type} onChange={handleInputChange}>
                <option value="None">* Please choose</option>
                <option value="Cash At Office">Cash At Office</option>
                <option value="EFT At Office">EFT At Office</option>
                <option value="Medical Aid">Medical Aid</option>
                <option value="Other">Other</option>
            </select>
            {
                data.pay_type === "Other"
                    ? <div className='op-sec'>
                        <input
                            id='pay_other'
                            name='pay_other'
                            type='text'
                            placeholder='* Other'
                            className='form-control'
                            required
                            value={data.pay_other}
                            onChange={handleInputChange}
                        />
                    </div>
                    : <br />
            }
            {
                data.pay_type === "" && data.pay_type === "None"
                    ? ""
                    : <div className='btn-pair'>
                        <button onClick={paymentBack} className='secondary-btn'>Back</button>
                        <button className='btn'>Submit Request for Appointment</button>
                    </div>
            }
        </form>
    )
    const doneCompo = (
        <div className="text-center">
            <h2>All Done.</h2>
            <p>Please keep an eye open on your emails for the confirmation of you appointment.</p>
            <a href='/patients-home' className="btn" >Done</a>
        </div>
    )
    return (
        <Layout>
            <div style={{ marginTop: "80px" }} className='container text-center'>
                <div className='section-title'>
                    <h3>Set An Appointment</h3>
                </div>
                <div>
                    {!data.p_details && !data.ap_details && !data.pay && patientForm}
                    {!data.ap_details && data.p_details && !data.pay && appointmentForm}
                    {data.p_details && data.ap_details && !data.pay && paymentForm}
                    {data.p_details && data.ap_details && data.pay && doneCompo}
                </div>
            </div>
        </Layout>
    )
}

export default Appointments;