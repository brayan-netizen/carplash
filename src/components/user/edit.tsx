/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import {
// 	useUserMutation,
// 	useUserPutMutation
// } from '../../../../api/endpoints';
import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Swal from 'sweetalert2';
import Template from './template';
import { IUser } from './type';
// import { statusData } from '../../../hooks/status';
const EditUser = () => {
	// const { id } = useParams();
	// const [user] = useUserMutation();
	// const [userPut] = useUserPutMutation();
	const [data, setData] = useState<IUser>({
		name: 'Pepito',
		lastName: 'perez',
		email: 'pepiuto19388@gmail.com',
		phone: '3126547888'
	});

	const updateUser = () => {
		// userPut(data)
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
		// 	user(id)
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
			isEdit={true}
			data={data}
			setData={setData}
			textButton='Actualizar'
			funcSend={updateUser}
			title='Actualizar'
		/>
	);
};

export default EditUser;
