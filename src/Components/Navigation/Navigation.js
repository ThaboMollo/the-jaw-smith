import React from 'react';

const Navigation = (props) => {
    return (
        <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
            <div className='container'>
                <div className='navbar-header'>
                    <div className='nav-icons'>
                        <button
                            type='button'
                            className='navbar-toggle collapsed'
                            data-toggle='collapse'
                            data-target='#bs-example-navbar-collapse-1'
                            >
                            {' '}
                            <span className='sr-only'>Toggle navigation</span>{' '}
                            <span className='icon-bar'></span>{' '}
                            <span className='icon-bar'></span>{' '}
                            <span className='icon-bar'></span>{' '}
                        </button>
                        <a className='navbar-brand page-scroll' href='/'>
                            <div className="nav-pic">
                                <img alt="Company Logo" className="img" src="img/user.jpg" />
                            </div>
                        </a>{' '}
                    </div>

                </div>
                <div
                    className='collapse navbar-collapse'
                    id='bs-example-navbar-collapse-1'
                >
                    <ul className='nav navbar-nav navbar-right'>
                        <li>
                            <a href='/appointments' className='page-scroll'>
                                Appointments
                            </a>
                        </li>
                        <li>
                            <a href="/contact-dentist" className='page-scroll'>
                                Contact Your Dentist
                            </a>
                        </li>
                        <li>

                        </li>
                        {/* {
							state.isAuthenticated
								? <li>
									<a onClick={() => dispatch({type: 'LOGOUT'})} href='/' >
										Log Out
									</a>
								</li>
								: <li>
									<a href='/sign-in' className='page-scroll'>
										Log In
									</a>
								</li>
						} */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;