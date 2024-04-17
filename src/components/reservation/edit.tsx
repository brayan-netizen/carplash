/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import {
// 	useReservationMutation,
// 	useReservationPutMutation
// } from '../../../../api/endpoints';
import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Swal from 'sweetalert2';
import Template from './template';
import { IReservation } from './types';
// import { statusData } from '../../../hooks/status';

const EditReservation = () => {
	// const { id } = useParams();
	// const [reservation] = useReservationMutation();
	// const [reservationPut] = useReservationPutMutation();
	const [data, setData] = useState<IReservation>({
		sede: '',
		date: '',
		placa: '',
		servicio: ''
	});

	const updateReservation = () => {
		// reservationPut(data)
		// 	.then(() => {
		// 		const status = statusData(data);
		// 		if (status) {
		// 			Swal.fire({
		// 				title: '¡Actualizado!',
		// 				text: 'La mesa se actualizado correctamente',
		// 				icon: 'success'
		// 			});
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		console.log('err', err);
		// 		Swal.fire({
		// 			title: '¡Fallo!',
		// 			text: 'Hubo un error al actualizar la mesa',
		// 			icon: 'error'
		// 		});
		// 	});
	};

	useEffect(() => {
		// if (id) {
		// 	reservation(id)
		// 		.then(({ data }: any) => {
		// 			setData(data);
		// 		})
		// 		.catch((err: any) => {
		// 			console.log('err', err);
		// 		});
		// }
	}, []);

	return (
		<Template
			data={data}
			isEdit={true}
			setData={setData}
			textButton='Actualizar'
			funcSend={updateReservation}
			title='Actualizar Reserva'
		/>
	);
};

export default EditReservation;
