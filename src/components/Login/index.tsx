/* eslint-disable @typescript-eslint/no-explicit-any */
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBInput,
	MDBIcon,
	MDBCheckbox,
	MDBModal,
	MDBModalHeader
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface FormProps {
	pass: string;
	email: string;
	setPass: React.Dispatch<React.SetStateAction<string>>;
	setEmail: React.Dispatch<React.SetStateAction<string>>;
	setActiveRePass: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormLogin = ({
	email,
	pass,
	setPass,
	setEmail,
	setActiveRePass
}: FormProps) => {
	return (
		<MDBCardBody className='p-5 w-100 d-flex flex-column'>
			<FontAwesomeIcon
				size='8x'
				icon={faUser}
				color='black'
				className='mx-2 mb-5 w-100'
			/>
			<MDBInput
				wrapperClass='mb-4 w-100'
				label='Correo electrónico'
				id='formControlLg'
				type='email'
				size='lg'
				value={email}
				onChange={(event) => {
					setEmail(event.target.value);
				}}
			/>
			<MDBInput
				wrapperClass='mb-4 w-100'
				label='Contraseña'
				id='formControlLg'
				type='password'
				size='lg'
				value={pass}
				onChange={(event) => {
					setPass(event.target.value);
				}}
			/>
			<div className='d-flex flex-column justify-content-between mx-4 mb-4'>
				<MDBCheckbox
					name='flexCheck'
					value=''
					id='flexCheckDefault'
					label='Recuérdame'
				/>
			</div>
			<MDBBtn color='dark' size='lg'>
				Iniciar sesion
			</MDBBtn>
			<div className='d-flex my-2 flex-row'>
				<Link className='mx-1' to='/user/create'>
					Crea una cuenta nueva
				</Link>
				<a
					className='mx-1'
					href='javascript:void(0);'
					onClick={() => setActiveRePass(true)}
				>
					¿Has olvidado tu contraseña?
				</a>
			</div>
		</MDBCardBody>
	);
};

const Repass = ({ email, setEmail, setActiveRePass }: any) => {
	return (
		<MDBCardBody className='p-5 w-100 d-flex flex-column'>
			<FontAwesomeIcon
				size='8x'
				icon={faKey}
				color='black'
				className='mx-2 mb-5 w-100'
			/>

			<MDBInput
				wrapperClass='mb-4 w-100'
				label='Correo electrónico'
				id='formControlLg'
				type='email'
				size='lg'
				value={email}
				onChange={(event) => {
					setEmail(event.target.value);
				}}
			/>
			<a
				className='mb-2'
				href='javascript:void(0);'
				onClick={() => setActiveRePass(false)}
			>
				Iniciar sesión
			</a>
			<MDBBtn color='dark' size='lg'>
				Recuperar
			</MDBBtn>
			<Link className='text-end m-2 mb-5' to={''}>
				¿No recibí el correo electrónico?
			</Link>
		</MDBCardBody>
	);
};

const Login = () => {
	const [basicModal, setBasicModal] = useState(false);
	const [pass, setPass] = useState('');
	const [email, setEmail] = useState('');
	const [activeRePass, setActiveRePass] = useState(false);

	const toggleOpen = () => setBasicModal(!basicModal);

	return (
		<>
			<MDBIcon
				size='1x'
				className='p-2'
				color='light'
				fas
				icon='user'
				onClick={toggleOpen}
			/>
			<MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
				<MDBCard
					className='bg-white mx-auto'
					style={{
						borderRadius: '1rem',
						minWidth: '500px',
						maxWidth: '500px',
						position: 'fixed',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%,-50%)'
					}}
				>
					<MDBModalHeader>
						<MDBBtn
							className='btn-close'
							color='none'
							onClick={toggleOpen}
						/>
					</MDBModalHeader>
					{!activeRePass ? (
						<FormLogin
							email={email}
							setEmail={setEmail}
							pass={pass}
							setPass={setPass}
							setActiveRePass={setActiveRePass}
						/>
					) : (
						<Repass
							email={email}
							setEmail={setEmail}
							setActiveRePass={setActiveRePass}
						/>
					)}
				</MDBCard>
			</MDBModal>
		</>
	);
};

export default Login;
