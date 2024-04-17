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

export const restaurantData = [
	{
		id: '1',
		placa: 'AAA123',
		servicio: 'Full',
		sede: 'Premium Plaza',
		date: '2023-11-20 00:00:00'
	},
	{
		id: '2',
		placa: 'AAA123',
		servicio: 'Full',
		sede: 'Premium Plaza',
		date: '2023-11-20 00:00:00'
	},
	{
		id: '3',
		placa: 'AAA123',
		servicio: 'Full',
		sede: 'Premium Plaza',
		date: '2023-11-20 00:00:00'
	},
	{
		id: '4',
		placa: 'AAA123',
		servicio: 'Full',
		sede: 'Premium Plaza',
		date: '2023-11-20 00:00:00'
	},
	{
		id: '5',
		placa: 'AAA123',
		servicio: 'Full',
		sede: 'Premium Plaza',
		date: '2023-11-20 00:00:00'
	},
	{
		id: '6',
		placa: 'AAA123',
		servicio: 'Full',
		sede: 'Premium Plaza',
		date: '2023-11-20 00:00:00'
	},
	{
		id: '7',
		placa: 'AAA123',
		servicio: 'Full',
		sede: 'Premium Plaza',
		date: '2023-11-20 00:00:00'
	}
];

const ListRestaurant = () => {
	// const [restaurantData, setRestaurantData]: any[] = useState([]);
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
					// 			restaurantData.filter(
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
		placa: 'Placa',
		servicio: 'Servicio',
		sede: 'Lugar',
		date: 'Fecha',
		edit: 'EDITAR',
		delete: 'ELIMINAR'
	};

	const functions = {
		edit: ({ id }: any) => (
			<Link to={`/reservation/edit/${id}`}>
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
			linkCreate='/reservation/create'
			title='Agregar Reserva'
			body={restaurantData}
			header={header}
			functions={functions}
			// loading={loading}
		/>
	);
};

export default ListRestaurant;
