import React from 'react';

import Layout from '../../../Components/Layout/Layout';
import AppointmentCard from '../../../Components/UI/AppointmentCard/AppointmentCard';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import DetailedAppointment from './DetailedAppointment/DetailedAppointment';

const ManageAppointments = (props) => {

    return (
        <Layout>
            <div id='man-ap' className='text-center'>
                <div className='container'>
                    <div className='section-title'>
                        <h4>Appointments</h4>
                    </div>
                    <div className='row'>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            {
                                props.data
                                    ? props.data.map((d, i) => (
                                        <AppointmentCard
                                            key={i}
                                            subject={d.subject}
                                            date={d.date}
                                            children={
                                                <DetailedAppointment
                                                    id={d.client.id}
                                                    name={`${d.client.first_name} ${d.client.last_name}`}
                                                    date={d.date}
                                                    proceedure={d.proceedure}
                                                    desc={d.appointment_description}
                                                    num={d.client.cell_number}
                                                    email={d.client.email}
                                                    gender={d.client.sex}
                                                    street={d.client.street}
                                                    city={d.client.city}
                                                    province={d.client.province}
                                                    postal_code={d.client.postal_code}
                                                />
                                            }
                                        />
                                    ))
                                    : <Spinner />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ManageAppointments;