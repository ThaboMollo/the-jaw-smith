import React from 'react';

const Home = () => {
    return (
        <div id='home' className='container text-center'>
            <div className='section-title'>
                <h2>Welcome Home</h2>
            </div>
            <div className='row'>
                <a href='/patients-home' className='btn btn-default submit'>
                    Patient
                </a>
                <a href='/dentist-home' className='btn btn-default submit'>
                    Dentist
                </a>
            </div>
        </div>
    )
}

export default Home;