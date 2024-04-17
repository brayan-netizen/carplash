/* eslint-disable @typescript-eslint/no-explicit-any */
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
			<h2 className='fw-bold mb-2 text-center'>Sign in</h2>
			<p className='text-white-50 mb-3'>
				Please enter your login and password!
			</p>

			<MDBInput
				wrapperClass='mb-4 w-100'
				label='Email address'
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
				label='Password'
				id='formControlLg'
				type='password'
				size='lg'
				value={pass}
				onChange={(event) => {
					setPass(event.target.value);
				}}
			/>
			<div className='d-flex justify-content-between mx-4 mb-4'>
				<MDBCheckbox
					name='flexCheck'
					value=''
					id='flexCheckDefault'
					label='Remember me'
				/>
				<a
					href='javascript:void(0);'
					onClick={() => setActiveRePass(true)}
				>
					Forgot password?
				</a>
			</div>
			<MDBBtn size='lg'>Login</MDBBtn>
		</MDBCardBody>
	);
};

const Repass = ({ email, setEmail }: any) => {
	return (
		<MDBCardBody className='p-5 w-100 d-flex flex-column'>
			<h2 className='fw-bold mb-2 text-center'>Sign in</h2>
			<p className='text-white-50 mb-3'>
				Please enter your login and password!
			</p>

			<MDBInput
				wrapperClass='mb-4 w-100'
				label='Email address'
				id='formControlLg'
				type='email'
				size='lg'
				value={email}
				onChange={(event) => {
					setEmail(event.target.value);
				}}
			/>
			<MDBCheckbox
				name='flexCheck'
				id='flexCheckDefault'
				className='mb-4'
				label='Remember password'
			/>
			<MDBBtn size='lg'>Login</MDBBtn>
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
						<Repass email={email} setEmail={setEmail} />
					)}
				</MDBCard>
			</MDBModal>
		</>
	);
};

export default Login;
