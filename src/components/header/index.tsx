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

export default function App() {
	const [openBasic, setOpenBasic] = useState(false);

	return (
		<MDBNavbar expand='lg' dark bgColor='dark'>
			<MDBContainer fluid>
				<MDBNavbarBrand href='#'>CarPlash</MDBNavbarBrand>

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
							<MDBNavbarLink active aria-current='page' href='/'>
								Inicio
							</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<MDBNavbarLink href='#'>Lugares</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<MDBNavbarLink href='#'>Precios</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<MDBNavbarLink href='#'>Nosotros</MDBNavbarLink>
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
