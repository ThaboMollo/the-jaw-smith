import React from 'react';

import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import Layout from '../../Components/Layout/Layout';

const DentistsHome = () => {
    return (
        <Layout>
            <div id='dentists-home' className='text-center'>
                <div className='img-slider'>
                    <HomeSlider />
                </div>
                <div className='column-btns'>
                    <a href='/manage-appointments' className='btn btn-custom btn-lg'>My Appointments</a>
                    <a href='/manage-patients' className='btn btn-custom btn-lg'>My Patients</a>
                    <a href='/referals' className='btn btn-custom btn-lg'>Referals</a>
                    <a href='/manage-business' className='btn btn-custom btn-lg'>Business</a>
                </div>
            </div>
        </Layout>
    )
}

export default DentistsHome;