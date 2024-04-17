import { Carousel, Image, Card, Button, Row } from 'react-bootstrap';
import CustomCarousel from '../CustomCarousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const dataBannerPrincipal = [
	{
		title: '¡Deja que tu coche brille!',
		text: (
			<>
				'Servicio rápido y profesional.' <br /> '¡Programa tu cita hoy y
				disfruta de un auto reluciente!'
			</>
		),
		img: 'https://assets.mockflow.com/app/wireframepro/company/Cd05505a082b74fb0997ab5a9bfa93f46/projects/MkpF65OZ6h/images/Mee7a9a04ed7392e3a3783f23134eade41694698345869'
	},
	{
		title: '¡Deja que tu coche brille! 2',
		text: (
			<>
				'Servicio rápido y profesional.' <br /> '¡Programa tu cita hoy y
				disfruta de un auto reluciente!'
			</>
		),
		img: 'https://assets.mockflow.com/app/wireframepro/company/Cd05505a082b74fb0997ab5a9bfa93f46/projects/MkpF65OZ6h/images/Mee7a9a04ed7392e3a3783f23134eade41694698345869'
	},
	{
		title: '¡Deja que tu coche brille! 3',
		text: (
			<>
				'Servicio rápido y profesional.' <br /> '¡Programa tu cita hoy y
				disfruta de un auto reluciente!'
			</>
		),
		img: 'https://assets.mockflow.com/app/wireframepro/company/Cd05505a082b74fb0997ab5a9bfa93f46/projects/MkpF65OZ6h/images/Mee7a9a04ed7392e3a3783f23134eade41694698345869'
	}
];

const dataCard: any = [
	{
		title: '¡Reluce tu coche!',
		btn: '¡Reservar ahora!',
		text: 'Déjanos darle a tu vehículo el brillo que se merece.',
		img: 'https://assets.mockflow.com/app/wireframepro/company/Cd05505a082b74fb0997ab5a9bfa93f46/projects/MkpF65OZ6h/images/M37c2f775ab484ced3cbeed4fb9f6c3901694700029110'
	},
	{
		title: '¡Brillo instantáneo!',
		btn: ' ¡Agendar servicio!',
		text: 'Descubre nuestro servicio de lavado premium para un coche reluciente.',
		img: 'https://assets.mockflow.com/app/wireframepro/company/Cd05505a082b74fb0997ab5a9bfa93f46/projects/MkpF65OZ6h/images/M8093354ce2ee61ea6aba3ad05714fded1711504563881'
	},
	{
		title: '¡Coche impecable!',
		btn: ' ¡Conocer más!',
		text: 'Con nuestro lavado exclusivo, tu vehículo brillará como nuevo.',
		img: 'https://assets.mockflow.com/app/wireframepro/company/Cd05505a082b74fb0997ab5a9bfa93f46/projects/MkpF65OZ6h/images/Maeccf5049c1e80d84824655e952f46131711504562929'
	},
	{
		title: '¡Reluce tu coche! 2',
		btn: '¡Reservar ahora!',
		text: 'Déjanos darle a tu vehículo el brillo que se merece.',
		img: 'https://assets.mockflow.com/app/wireframepro/company/Cd05505a082b74fb0997ab5a9bfa93f46/projects/MkpF65OZ6h/images/M37c2f775ab484ced3cbeed4fb9f6c3901694700029110'
	},
	{
		title: '¡Brillo instantáneo! 2',
		btn: ' ¡Agendar servicio!',
		text: 'Descubre nuestro servicio de lavado premium para un coche reluciente.',
		img: 'https://assets.mockflow.com/app/wireframepro/company/Cd05505a082b74fb0997ab5a9bfa93f46/projects/MkpF65OZ6h/images/M8093354ce2ee61ea6aba3ad05714fded1711504563881'
	},
	{
		title: '¡Coche impecable! 2',
		btn: ' ¡Conocer más!',
		text: 'Con nuestro lavado exclusivo, tu vehículo brillará como nuevo.',
		img: 'https://assets.mockflow.com/app/wireframepro/company/Cd05505a082b74fb0997ab5a9bfa93f46/projects/MkpF65OZ6h/images/Maeccf5049c1e80d84824655e952f46131711504562929'
	}
];

const Home = () => {
	return (
		<>
			<Carousel>
				{dataBannerPrincipal.map(({ title, text, img }) => {
					return (
						<Carousel.Item>
							<Image className='w-100 opacity-50' src={img} />
							<Carousel.Caption>
								<h3 className='text-dark'>{title}</h3>
								<p className='text-dark'>{text}</p>
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}
			</Carousel>
			<h1 className='w-100 text-center mt-5'>Servicios</h1>
			<CustomCarousel>
				{dataCard?.map(({ title, text, img, btn = 'click' }: any) => {
					return (
						<Card
							className={'m-2 mt-5 mb-5'}
							style={{ width: '18rem' }}
						>
							<Card.Img variant='top' src={img} />
							<Card.Body>
								<Card.Title>{title}</Card.Title>
								<Card.Text>{text}</Card.Text>
								<Button variant='dark'>{btn} </Button>
							</Card.Body>
						</Card>
					);
				})}
			</CustomCarousel>
			<Row>
				<Image
					style={{ width: '40%', padding: 0 }}
					src='https://assets.mockflow.com/app/wireframepro/company/Cd05505a082b74fb0997ab5a9bfa93f46/projects/MkpF65OZ6h/images/M884676c487c93a011b50ed571e6a55401694701149245'
				/>
				<Card style={{ width: '60%' }}>
					<Card.Body>
						<Card.Title className='my-5'>
							Tú, nuestra mayor satisfacción
						</Card.Title>
						<Card.Text>
							En nuestro compromiso de brindar lo mejor, la
							satisfacción del cliente es nuestra prioridad número
							uno. Trabajamos incansablemente para superar sus
							expectativas y garantizar que su experiencia con
							nosotros sea inigualable. Su satisfacción es nuestro
							mayor logro.
						</Card.Text>
						<Card.Text className='text-muted'>
							No hay mejor publicidad que un cliente satisfecho.
						</Card.Text>
					</Card.Body>
				</Card>
			</Row>
		</>
	);
};

export default Home;
