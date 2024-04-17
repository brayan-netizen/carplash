import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { Button, Card, Form, Image, InputGroup, Row } from 'react-bootstrap';
import { IUser } from '../user/type';

const ContactUs = () => {
	const [data, setData] = useState<IUser>({
		name: '',
		lastName: '',
		email: '',
		phone: ''
	});

	return (
		<>
			<Image
				className='w-100 opacity-50'
				src='https://assets.mockflow.com/app/wireframepro/company/Cd05505a082b74fb0997ab5a9bfa93f46/projects/MkpF65OZ6h/images/Mee7a9a04ed7392e3a3783f23134eade41694698345869'
			/>
			<Row className='mt-5'>
				<Image
					style={{ width: '40%', padding: 0 }}
					src='https://assets.mockflow.com/app/wireframepro/company/Cd05505a082b74fb0997ab5a9bfa93f46/projects/MkpF65OZ6h/images/M884676c487c93a011b50ed571e6a55401694701149245'
				/>
				<Card style={{ width: '60%' }}>
					<Card.Body>
						<Card.Title className='my-5'>
							Nuestros medios
						</Card.Title>
						<Card.Text className='mb-5'>
							WhatsApp: 3029675434 <br />
							Correo: atencion@carplash.com <br />
							Servicio al cliente: 01-800-9865842
						</Card.Text>
						<MDBBtn
							className='m-1'
							style={{ backgroundColor: '#3b5998' }}
						>
							<MDBIcon fab icon='facebook-f' />
						</MDBBtn>
						<MDBBtn
							className='m-1'
							style={{ backgroundColor: '#55acee' }}
						>
							<MDBIcon fab icon='twitter' />
						</MDBBtn>
						<MDBBtn
							className='m-1'
							style={{ backgroundColor: '#ac2bac' }}
						>
							<MDBIcon fab icon='instagram' />
						</MDBBtn>

						<MDBBtn
							className='m-1'
							style={{ backgroundColor: '#0082ca' }}
						>
							<MDBIcon fab icon='linkedin-in' />
						</MDBBtn>
					</Card.Body>
				</Card>
				<Card className='border-0 strpied-userd-with-hover'>
					<Card.Header className='bg-transparent border-bottom-0 pt-5'>
						<Card.Title as='h2' className='line-txt ps-3 pt-3'>
							Te contactamos
						</Card.Title>
					</Card.Header>
					<Card.Body className='user-full-width user-responsive'>
						<Form className=''>
							<Form.Group className='d-flex justify-content-evenly mb-4 mt-5'>
								<InputGroup.Text className='bg-black p-0 col-5'>
									<FontAwesomeIcon
										icon={faUser}
										color='white'
										className='mx-2'
									/>
									<Form.Control
										value={data.name}
										type='text'
										placeholder='Nombres'
										onChange={(event) => {
											const copy = { ...data };
											copy.name = event.target.value;
											setData(copy);
										}}
									/>
								</InputGroup.Text>
								<InputGroup.Text className='bg-black p-0 col-5'>
									<FontAwesomeIcon
										icon={faUser}
										color='white'
										className='mx-2'
									/>
									<Form.Control
										value={data.lastName}
										type='text'
										placeholder='Apellidos'
										onChange={(event) => {
											const copy = { ...data };
											copy.lastName = event.target.value;
											setData(copy);
										}}
									/>
								</InputGroup.Text>
							</Form.Group>
							<Form.Group className='d-flex justify-content-evenly mb-4'>
								<InputGroup.Text className='bg-black p-0 col-5'>
									<FontAwesomeIcon
										icon={faEnvelope}
										color='white'
										className='mx-2'
									/>
									<Form.Control
										value={data.email}
										type='text'
										placeholder='Correo Electronico'
										onChange={(event) => {
											const copy = { ...data };
											copy.email = event.target.value;
											setData(copy);
										}}
									/>
								</InputGroup.Text>
								<InputGroup.Text className='bg-black p-0 col-5'>
									<FontAwesomeIcon
										icon={faPhone}
										color='white'
										className='mx-2'
									/>
									<Form.Control
										value={data.phone}
										type='text'
										placeholder='Celular'
										onChange={(event) => {
											const copy = { ...data };
											copy.phone = event.target.value;
											setData(copy);
										}}
									/>
								</InputGroup.Text>
							</Form.Group>
							<Form.Group
								className='m-auto mb-3 col-11 p-1'
								controlId='exampleForm.ControlTextarea1'
							>
								<Form.Control
									as='textarea'
									rows={3}
									placeholder='Deja tus comentarios...'
									style={{
										minHeight: '250px'
									}}
								/>
							</Form.Group>
							<Form.Group className='d-flex justify-content-evenly mb-5 pb-5'>
								<InputGroup.Text className='bg-black p-0 col-5'>
									<Button
										className='w-100'
										// onClick={funcSend}
										variant='dark'
										type='submit'
									>
										Contatarme
									</Button>
								</InputGroup.Text>
							</Form.Group>
						</Form>
					</Card.Body>
				</Card>
			</Row>
			<Form className=''>
				<Form.Group className='d-flex flex-column justify-content-center align-items-center mb-4 mt-1'>
					<Card.Title as='h1' className='ps-3 pt-3'>
						Reseñas
					</Card.Title>
					<Form.Group
						className='m-auto mb-3 col-11 p-1'
						controlId='exampleForm.ControlTextarea1'
					>
						<Form.Control
							as='textarea'
							rows={3}
							placeholder='Deja tus comentarios...'
							style={{
								minHeight: '250px'
							}}
						/>
					</Form.Group>
				</Form.Group>
			</Form>
		</>
	);
};

export default ContactUs;
