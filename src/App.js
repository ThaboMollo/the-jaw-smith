import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import Home from './Screens/Home';
import Login from './Screens/Login/Login';
import PatientsHome from './Screens/Patients/PatientsHome';
import DentistsHome from './Screens/Dentists/DentistsHome';
import Appointments from './Screens/Patients/Appointments/Appointments';
import Contact_Dentist from './Screens/Patients/Contact/Contact';
import ManageAppointments from './Screens/Dentists/ManageAppointments/ManageAppointments';
import ManagePatients from './Screens/Dentists/ManagePatients/ManagePatients';
import Referals from './Screens/Dentists/Referals/Referals';
import Bussiness from './Screens/Dentists/Business/Business';
import jsonData from './data/data.json';
import Client from './Screens/Dentists/ManageAppointments/Clients/Client';

const App = () => {
	const  [ jawSmithData, setJawSmithData ] = useState({});
	useEffect(() => {
		setJawSmithData(jsonData);
		console.log(jsonData)
	}, []);

	return (
		<div>
			<Route path='/' exact component={Home} />
			<Route path='/patients-home' exact component={PatientsHome} />
			<Route path='/dentist-home' exact component={DentistsHome} />
			<Route path='/auth' exact component={Login} />
			<Route path='/appointments' exact component={Appointments} />
			<Route path='/contact-dentist' exact component={Contact_Dentist} />
			<Route path='/manage-appointments' exact render={() => <ManageAppointments data={jawSmithData.Appointments} /> } />
			<Route path='/manage-patients' exact component={ManagePatients} />
			<Route path='/referals' exact component={Referals} />
			<Route path='/manage-business' exact component={Bussiness} />
			<Route path='/client/:id' exact component={Client} />
		</div>
	)
}

export default App;