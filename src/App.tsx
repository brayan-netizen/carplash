// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Login from './components/auth/login';
// import Register from './components/auth/user';
// import Home from './components/home';

// import NotFound from './components/pages/status/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import Template from './components/template';
import Home from './components/home';
import Reservation from './components/reservation';
import CreateReservation from './components/reservation/create';
import EditReservation from './components/reservation/edit';
import CreateUser from './components/user/create';
import EditUser from './components/user/edit';
import NotFound from './components/status/NotFound';
import User from './components/user';
import ContactUs from './components/contact-us';

export default function App() {
	return (
		<div className='App'>
			<Routes>
				<Route
					path='/'
					element={
						<Template>
							<Home />
						</Template>
					}
				/>
				<Route
					index
					element={
						<Template>
							<Home />
						</Template>
					}
				/>
				<Route
					path='/not-found'
					element={
						<Template>
							<NotFound />
						</Template>
					}
				/>
				<Route
					path='/reservation'
					element={
						<Template>
							<Reservation />
						</Template>
					}
				/>
				<Route
					path='/reservation/create'
					element={
						<Template>
							<CreateReservation />
						</Template>
					}
				/>
				<Route
					path='/reservation/edit'
					element={
						<Template>
							<EditReservation />
						</Template>
					}
				/>
				<Route
					path='/user'
					element={
						<Template>
							<User />
						</Template>
					}
				/>
				<Route
					path='/user/create'
					element={
						<Template>
							<CreateUser />
						</Template>
					}
				/>
				<Route
					path='/user/edit'
					element={
						<Template>
							<EditUser />
						</Template>
					}
				/>
				<Route
					path='/contact-us'
					element={
						<Template>
							<ContactUs />
						</Template>
					}
				/>
			</Routes>
		</div>
	);
}
