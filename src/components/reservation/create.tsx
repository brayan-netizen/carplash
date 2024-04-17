/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useReservationPostMutation } from '../../../../api/endpoints';
import { useState } from 'react';
// import Swal from 'sweetalert2';
import Template from './template';
import { IReservation } from './types';
// import { statusData } from '../../../hooks/status';

const CreateReservation = () => {
	// const [reservationPost] = useReservationPostMutation();
	const [data, setData] = useState<IReservation>({
		sede: '',
		date: '',
		placa: '',
		servicio: ''
	});

	const sendReservation = () => {
		// reservationPost(data)
		// 	.then(() => {
		// 		const status = statusData(data);
		// 		if (status) {
		// 			Swal.fire({
		// 				title: '¡Creado!',
		// 				text: 'La mesa se creo correctamente',
		// 				icon: 'success'
		// 			});
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		console.log('err', err);
		// 		Swal.fire({
		// 			title: '¡Fallo!',
		// 			text: 'Hubo un error al crear la mesa',
		// 			icon: 'error'
		// 		});
		// 	});
	};

	return (
		<Template
			data={data}
			setData={setData}
			textButton='Registrar'
			funcSend={sendReservation}
			title='Agregar Reserva'
		/>
	);
};

export default CreateReservation;
