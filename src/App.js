import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Screens/Home';
import Login from './Screens/Login/Login';
import PatientsHome from './Screens/Patients/PatientsHome';
import DentistsHome from './Screens/Dentists/DentistsHome';
import Appointments from './Screens/Appointments/Appointments';
import Contact_Dentist from './Screens/Contact/Contact';

const App = () => {
	return (
		<div>
			<Route path='/' exact component={Home} />
			<Route path='/patients-home' exact component={PatientsHome} />
			<Route path='/dentist-home' exact component={DentistsHome} />
			<Route path='/auth' exact component={Login} />
			<Route path='/appointments' exact component={Appointments} />
			<Route path='/contact-dentist' exact component={Contact_Dentist} />
		</div>
	)
}

export default App;
