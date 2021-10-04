import React, { useState } from 'react';

import classes from './AppointmentCard.module.css';

const AppointmentCard = (props) => {
    const [open, setOpen] = useState(false);
    
    return (
        <div className={classes.card}>
            <h5>{props.subject}</h5>
            <div className={classes.head} >
                {
                    open
                        ? <div>
                            <button className={classes.btn} onClick={() => (setOpen(prevOpen => !prevOpen))} >
                                <i className='fa fa-angle-up'></i>
                            </button>
                        </div>
                        : <div>
                            <h5>{props.date}</h5>
                            <button className={classes.btn} onClick={() => (setOpen(prevOpen => !prevOpen))} >
                                <i className='fa fa-angle-down'></i>
                            </button>
                        </div>
                }
            </div>
            {open && props.children}
        </div>
    )
}

export default AppointmentCard;