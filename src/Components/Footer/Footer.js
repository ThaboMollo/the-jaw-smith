import React from 'react';

const Footer = (props) => {
    return (
        <footer id='footer'>
            <div className='container'>
                <div className='footer'>
                    <div className='footer-btn'>
                        <a href='/' className='btn btn-default submit'>Tell A Friend</a>
                    </div>
                    <div className='footer-text'>
                        <p>Next Appointment: </p>
                        <p>9 Oct. 2021</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;