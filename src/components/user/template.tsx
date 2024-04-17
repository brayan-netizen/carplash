/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card, Col, Container, InputGroup, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import { useUsersMutation } from '../../../../api/endpoints';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faEnvelope,
	faLock,
	faPhone,
	faUser
} from '@fortawesome/free-solid-svg-icons';
import { ITemplate } from './type';

const Template = ({
	data,
	setData,
	title,
	funcSend,
	textButton,
	isEdit = false
}: ITemplate) => {
	// const [userData, setUserData]: any[] = useState([]);
	const navigate = useNavigate();
	// const [users] = useUsersMutation();

	const cancel = () => {
		Swal.fire({
			title: '¡Atención!',
			text: 'Los cambios no se guardarán',
			icon: 'warning'
		}).then((result) => {
			if (result.isConfirmed) {
				navigate('/admin/users');
			}
		});
	};

	useEffect(() => {
		// users()
		// 	.then(({ data: { data } }: any) => {
		// 		setUserData(data);
		// 	})
		// 	.catch((err: any) => {
		// 		console.log('err', err);
		// 		// setError(err); // Almacena el error en el estado
		// 	});
	}, []);

	return (
		<Container fluid>
			<Row className='justify-content-center align-items-center my-5 py-5'>
				<Col md='8'>
					<Card className='shadow-lg border-0 strpied-userd-with-hover'>
						<Card.Header className='bg-transparent border-bottom-0 pt-5'>
							<div
								className={`d-flex justify-content-center icon-${
									isEdit ? 'edit' : 'plus'
								} align-items-center`}
							>
								<FontAwesomeIcon
									size='8x'
									icon={faUser}
									color='black'
									className='mx-2 w-100'
								/>
							</div>
							<Card.Title as='h2' className='line-txt ps-3 pt-3'>
								{title}
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
											placeholder='Nombre'
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
												copy.lastName =
													event.target.value;
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
								<Form.Group className='d-flex justify-content-evenly mb-5 pb-2'>
									<InputGroup.Text className='bg-black p-0 col-5'>
										<FontAwesomeIcon
											icon={faLock}
											color='white'
											className='mx-2'
										/>
										<Form.Control
											value={data.pass}
											type='text'
											placeholder='Contraseña'
											onChange={(event) => {
												const copy = { ...data };
												copy.pass = event.target.value;
												setData(copy);
											}}
										/>
									</InputGroup.Text>
									<InputGroup.Text className='bg-black p-0 col-5'>
										<FontAwesomeIcon
											icon={faLock}
											color='white'
											className='mx-2'
										/>
										<Form.Control
											value={data.rePass}
											type='text'
											placeholder='Confirma Contraseña'
											onChange={(event) => {
												const copy = { ...data };
												copy.rePass =
													event.target.value;
												setData(copy);
											}}
										/>
									</InputGroup.Text>
								</Form.Group>
								<Form.Group className='d-flex justify-content-evenly mb-5 pb-5'>
									<InputGroup.Text className='bg-black p-0 col-5'>
										<Button
											className='w-100'
											onClick={funcSend}
											variant='dark'
											type='submit'
										>
											{textButton}
										</Button>
									</InputGroup.Text>
									<InputGroup.Text className='bg-black p-0 col-5'>
										<Button
											className='w-100'
											onClick={cancel}
											variant='danger'
										>
											Cancelar
										</Button>
									</InputGroup.Text>
								</Form.Group>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Template;
