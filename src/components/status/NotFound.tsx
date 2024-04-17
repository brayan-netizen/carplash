import { Container, Row, Col } from 'react-bootstrap';

const NotFoundPage = () => {
	return (
		<Container>
			<Row className='justify-content-md-center'>
				<Col md='6' className='text-center'>
					<h1 className='mt-5'>Error 404</h1>
					<p className='lead'>
						La página que estás buscando no se pudo encontrar.
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default NotFoundPage;
