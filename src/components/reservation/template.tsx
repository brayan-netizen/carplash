/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from 'react-bootstrap/Form';
import { Card, Col, Container, InputGroup, Row, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import { useReservationsMutation } from '../../../../api/endpoints';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faBellConcierge,
	faCalendarDay,
	faCar,
	faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import { ITemplate } from './types';

const dataService = [
	{
		id: 'premium',
		name: 'Premium'
	},
	{
		id: 'full',
		name: 'Full'
	},
	{
		id: 'basic',
		name: 'Basic'
	}
];

const dataSede = [
	{
		id: 'laureles',
		name: 'Laureles'
	},
	{
		id: 'mayorca',
		name: 'Mayorca'
	},
	{
		id: 'mayorca',
		name: 'Mayorca'
	},
	{
		id: 'laureles',
		name: 'Laureles'
	},
	{
		id: 'premium_plaza',
		name: 'Premium plaza'
	}
];

const Template = ({
	data,
	setData,
	title,
	funcSend,
	textButton,
	isEdit = false
}: ITemplate) => {
	// const [reservationData, setReservationData]: any[] = useState([]);
	const navigate = useNavigate();
	// const [reservations] = useReservationsMutation();

	const cancel = () => {
		Swal.fire({
			title: '¡Atención!',
			text: 'Los cambios no se guardarán',
			icon: 'warning'
		}).then((result) => {
			if (result.isConfirmed) {
				navigate('/admin/reservations');
			}
		});
	};

	useEffect(() => {
		// reservations()
		// 	.then(({ data: { data } }: any) => {
		// 		setReservationData(data);
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
					<Card className='shadow-lg border-0 strpied-reservationd-with-hover'>
						<Card.Header className='bg-transparent border-bottom-0 pt-5'>
							<div
								className={`d-flex justify-content-center icon-${
									isEdit ? 'edit' : 'plus'
								} align-items-center`}
							>
								<FontAwesomeIcon
									size='8x'
									icon={faCar}
									color='black'
									className='mx-2 w-100'
								/>
							</div>
							<Card.Title as='h2' className='line-txt ps-3 pt-3'>
								{title}
							</Card.Title>
						</Card.Header>
						<Card.Body className='reservation-full-width reservation-responsive'>
							<Form className=''>
								<Form.Group className='d-flex justify-content-evenly mb-4 mt-5'>
									<InputGroup.Text className='bg-black p-0 col-5'>
										<FontAwesomeIcon
											icon={faCar}
											color='white'
											className='mx-2'
										/>
										<Form.Control
											value={data.placa}
											type='text'
											placeholder='Placa'
											onChange={(event) => {
												const copy = { ...data };
												copy.placa = event.target.value;
												setData(copy);
											}}
										/>
									</InputGroup.Text>
									<InputGroup.Text className='bg-black p-0 col-5'>
										<FontAwesomeIcon
											icon={faBellConcierge}
											color='white'
											className='mx-2'
										/>
										<Form.Select
											value={data.servicio}
											onChange={(event) => {
												const copy = { ...data };
												copy.servicio =
													event.target.value;
												setData(copy);
											}}
										>
											<option selected disabled>
												Seleccionar servicio
											</option>
											{dataService.map(
												({ id, name }: any) => (
													<option key={id} value={id}>
														{name}
													</option>
												)
											)}
										</Form.Select>
									</InputGroup.Text>
								</Form.Group>
								<Form.Group className='d-flex justify-content-evenly mb-5 pb-2'>
									<InputGroup.Text className='bg-black p-0 col-5'>
										<FontAwesomeIcon
											icon={faLocationDot}
											color='white'
											className='mx-2'
										/>
										<Form.Select
											value={data.sede}
											onChange={(event) => {
												const copy = { ...data };
												copy.sede = event.target.value;
												setData(copy);
											}}
										>
											<option selected disabled>
												Seleccionar sede
											</option>
											{dataSede.map(
												({ id, name }: any) => (
													<option key={id} value={id}>
														{name}
													</option>
												)
											)}
										</Form.Select>
									</InputGroup.Text>
									<InputGroup.Text className='bg-black p-0 col-5'>
										<FontAwesomeIcon
											icon={faCalendarDay}
											color='white'
											className='mx-2'
										/>
										<Form.Control
											value={data.date}
											type='date'
											placeholder='Fecha de reserva'
											onChange={(event) => {
												const copy = { ...data };
												copy.date = event.target.value;
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
