/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
// import {
// 	useRestaurantsMutation,
// 	useRestaurantDeleteMutation
// } from '../../../../api/endpoints';
import Swal from 'sweetalert2';
import TableList from '../common/TableList';

export const userData = [
	{
		id: '1',
		name: 'Pepito',
		lastName: 'perez',
		email: 'peperez@gmail.com',
		phone: '3245679875',
		rol: 'Admin'
	},
	{
		id: '2',
		name: 'Pepito',
		lastName: 'perez',
		email: 'peperez@gmail.com',
		phone: '3245679875',
		rol: 'Admin'
	},
	{
		id: '3',
		name: 'Pepito',
		lastName: 'perez',
		email: 'peperez@gmail.com',
		phone: '3245679875',
		rol: 'Admin'
	},
	{
		id: '4',
		name: 'Pepito',
		lastName: 'perez',
		email: 'peperez@gmail.com',
		phone: '3245679875',
		rol: 'Admin'
	}
];

const ListRestaurant = () => {
	// const [userData, setRestaurantData]: any[] = useState([]);
	// const [loading, setLoading] = useState<boolean>(true);

	// const [restaurants] = useRestaurantsMutation();
	// const [restaurantDelete] = useRestaurantDeleteMutation();

	useEffect(() => {
		// restaurants()
		// 	.then(({ data: { data } }: any) => {
		// 		setRestaurantData(data);
		// 	})
		// 	.catch((err: any) => {
		// 		console.log('err', err);
		// 		// setError(err); // Almacena el error en el estado
		// 	})
		// 	.finally(() => {
		// 		setLoading(false); // Indica que la carga ha terminado, ya sea con éxito o con error
		// 	});
	}, []);

	const deleteRestaurant = () =>
		// id: string
		{
			Swal.fire({
				title: '¿Estás seguro de que quieres eliminar este restaurante?',
				text: '¡No podrás revertir esto!',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: '¡Sí, bórralo!',
				cancelButtonText: `Cancelar`
			}).then((result) => {
				if (result.isConfirmed) {
					// restaurantDelete({
					// 	id: id
					// })
					// 	.then(({ data: { message } }: any) => {
					// 		Swal.fire({
					// 			title: '¡Eliminado!',
					// 			text: message,
					// 			icon: 'success'
					// 		});
					// 		setRestaurantData(
					// 			userData.filter(
					// 				(restaurant: { id: string }) =>
					// 					restaurant.id !== id
					// 			)
					// 		);
					// 	})
					// 	.catch((err: any) => {
					// 		console.log('err', err);
					// 		Swal.fire({
					// 			title: '¡Fallo!',
					// 			text: 'Hubo un error al eliminar el restaurante',
					// 			icon: 'error'
					// 		});
					// 	});
				}
			});
		};

	const header = {
		id: 'ID',
		name: 'Nombre',
		lastName: 'Apellidos',
		email: 'Correo',
		phone: 'Celular',
		rol: 'Rol',
		edit: 'EDITAR',
		delete: 'ELIMINAR'
	};

	const functions = {
		edit: ({ id }: any) => (
			<Link to={`/user/edit/${id}`}>
				<FontAwesomeIcon
					icon={faPenToSquare}
					style={{ color: '#000' }}
				/>
			</Link>
		),
		delete: () => (
			// { id }: any
			<button
				onClick={
					() => deleteRestaurant()
					// id
				}
			>
				<FontAwesomeIcon icon={faTrash} style={{ color: '#ff0000' }} />
			</button>
		)
	};

	return (
		<TableList
			linkCreate='/user/create'
			title='Usuarios'
			body={userData}
			header={header}
			functions={functions}
			// loading={loading}
		/>
	);
};

export default ListRestaurant;
