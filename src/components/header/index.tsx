import { useState } from 'react';
import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarToggler,
	MDBIcon,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBBtn,
	MDBCollapse
} from 'mdb-react-ui-kit';
import Login from '../Login';
import { Link } from 'react-router-dom';

export default function App() {
	const [openBasic, setOpenBasic] = useState(false);

	return (
		<MDBNavbar expand='lg' dark bgColor='dark'>
			<MDBContainer fluid>
				<MDBNavbarBrand>
					<Link to='/'>CarPlash</Link>
				</MDBNavbarBrand>

				<MDBNavbarToggler
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
					onClick={() => setOpenBasic(!openBasic)}
				>
					<MDBIcon icon='bars' fas />
				</MDBNavbarToggler>

				<MDBCollapse navbar open={openBasic}>
					<MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
						<MDBNavbarItem>
							<MDBNavbarLink active aria-current='page'>
								<Link to='/'>Inicio</Link>
							</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<MDBNavbarLink>
								<Link to='/user'>Usuarios</Link>
							</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<MDBNavbarLink>
								<Link to='/reservation'>Reservas</Link>
							</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<MDBNavbarLink>
								<Link to='/contact-us'>Nosotros</Link>
							</MDBNavbarLink>
						</MDBNavbarItem>
					</MDBNavbarNav>

					<form className='d-flex input-group w-auto b-button'>
						<input
							type='search'
							className='form-control'
							placeholder='Buscar...'
							aria-label='Search'
						/>
						<MDBBtn color='dark'>Buscar</MDBBtn>
					</form>
					<Login />
				</MDBCollapse>
			</MDBContainer>
		</MDBNavbar>
	);
}
