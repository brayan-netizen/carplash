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
				className='w-100'
				src='https://cuerosvelezco.vtexassets.com/assets/vtex.file-manager-graphql/images/0bc4699f-9db0-4856-b926-5e0811ffa672___fdb31dd7621163fbdc228cb07531c6d7.jpg'
			/>
			<Row>
				<Image
					style={{ width: '40%', padding: 0 }}
					src='https://cuerosvelezco.vtexassets.com/assets/vtex.file-manager-graphql/images/0bc4699f-9db0-4856-b926-5e0811ffa672___fdb31dd7621163fbdc228cb07531c6d7.jpg'
				/>
				<Card style={{ width: '60%' }}>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Subtitle className='mb-2 text-muted'>
							Card Subtitle
						</Card.Subtitle>
						<Card.Text>
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</Card.Text>
						<MDBBtn
							className='m-1'
							style={{ backgroundColor: '#3b5998' }}
							href='#'
						>
							<MDBIcon fab icon='facebook-f' />
						</MDBBtn>
						<MDBBtn
							className='m-1'
							style={{ backgroundColor: '#55acee' }}
							href='#'
						>
							<MDBIcon fab icon='twitter' />
						</MDBBtn>
						<MDBBtn
							className='m-1'
							style={{ backgroundColor: '#ac2bac' }}
							href='#'
						>
							<MDBIcon fab icon='instagram' />
						</MDBBtn>

						<MDBBtn
							className='m-1'
							style={{ backgroundColor: '#0082ca' }}
							href='#'
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
