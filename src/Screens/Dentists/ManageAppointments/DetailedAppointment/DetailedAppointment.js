import React from 'react';
import { Link } from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';

const DetailedAppointment = (props) => {
    return (
        <div id='detailed-ap'>
            <div className='text'>
                <div className='flow-text'>
                    <h5>Client: </h5>
                    <Link to={{
                        pathname: `/client/${props.id}`,
                        state: {
                            name: props.name,
                            number: props.num,
                            email: props.email,
                            gender: props.gender,
                            street: props.street,
                            city: props.city,
                            prov: props.province,
                            p_code: props.postal_code
                        }
                    }}>
                        {props.name}
                    </Link>
                </div>
                <div className='flow-text'>
                    <h5>Date: </h5>
                    <h3>{props.date}</h3>
                </div>
                <div className='flow-text'>
                    <h5>Proceedure: </h5>
                    <h3>{props.proceedure}</h3>
                </div>
                <h5>Appointment description:</h5>
                <p>{props.desc}</p>
            </div>
            <ReactWhatsapp
                number={props.num}
                message={"data.message"}
                type="submit"
                className="btn btn-custom btn-lg"
                style={{
                    backgroundColor: "black",
                    color: "cyan"
                }}>
                <i className='fa fa-whatsapp' style={{ color: "green" }}></i>
                Send Message
            </ReactWhatsapp>
        </div>
    )
}

export default DetailedAppointment;