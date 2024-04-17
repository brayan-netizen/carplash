/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useUserPostMutation } from '../../../../api/endpoints';
import { useState } from 'react';
// import Swal from 'sweetalert2';
import Template from './template';
import { IUser } from './type';
// import { statusData } from '../../../hooks/status';

const CreateUser = () => {
	// const [userPost] = useUserPostMutation();
	const [data, setData] = useState<IUser>({
		name: '',
		lastName: '',
		email: '',
		phone: ''
	});

	const sendUser = () => {
		// userPost(data)
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
			funcSend={sendUser}
			title='Registrar'
		/>
	);
};

export default CreateUser;
