import { Carousel, Image, Card, Button, Row } from 'react-bootstrap';
import CustomCarousel from '../CustomCarousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const dataBannerPrincipal = [
	{
		title: 'First slide label',
		text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
		img: 'https://cuerosvelezco.vtexassets.com/assets/vtex.file-manager-graphql/images/0bc4699f-9db0-4856-b926-5e0811ffa672___fdb31dd7621163fbdc228cb07531c6d7.jpg'
	},
	{
		title: 'Second slide label',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		img: 'https://cuerosvelezco.vtexassets.com/assets/vtex.file-manager-graphql/images/0bc4699f-9db0-4856-b926-5e0811ffa672___fdb31dd7621163fbdc228cb07531c6d7.jpg'
	},
	{
		title: 'Third slide label',
		text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
		img: 'https://cuerosvelezco.vtexassets.com/assets/vtex.file-manager-graphql/images/0bc4699f-9db0-4856-b926-5e0811ffa672___fdb31dd7621163fbdc228cb07531c6d7.jpg'
	}
];

const dataCard = [
	{
		title: 'Card Title',
		text: 'Some quick example text to build on the card title and make up the bulk of the cardU+00b4s content.',
		img: 'https://cuerosvelezco.vtexassets.com/assets/vtex.file-manager-graphql/images/0bc4699f-9db0-4856-b926-5e0811ffa672___fdb31dd7621163fbdc228cb07531c6d7.jpg'
	},
	{
		title: 'Card Title',
		text: 'Some quick example text to build on the card title and make up the bulk of the cardU+00b4s content.',
		img: 'https://cuerosvelezco.vtexassets.com/assets/vtex.file-manager-graphql/images/0bc4699f-9db0-4856-b926-5e0811ffa672___fdb31dd7621163fbdc228cb07531c6d7.jpg'
	},
	{
		title: 'Card Title',
		text: 'Some quick example text to build on the card title and make up the bulk of the cardU+00b4s content.',
		img: 'https://cuerosvelezco.vtexassets.com/assets/vtex.file-manager-graphql/images/0bc4699f-9db0-4856-b926-5e0811ffa672___fdb31dd7621163fbdc228cb07531c6d7.jpg'
	},
	{
		title: 'Card Title',
		text: 'Some quick example text to build on the card title and make up the bulk of the cardU+00b4s content.',
		img: 'https://cuerosvelezco.vtexassets.com/assets/vtex.file-manager-graphql/images/0bc4699f-9db0-4856-b926-5e0811ffa672___fdb31dd7621163fbdc228cb07531c6d7.jpg'
	},
	{
		title: 'Card Title',
		text: 'Some quick example text to build on the card title and make up the bulk of the cardU+00b4s content.',
		img: 'https://cuerosvelezco.vtexassets.com/assets/vtex.file-manager-graphql/images/0bc4699f-9db0-4856-b926-5e0811ffa672___fdb31dd7621163fbdc228cb07531c6d7.jpg'
	},
	{
		title: 'Card Title',
		text: 'Some quick example text to build on the card title and make up the bulk of the cardU+00b4s content.',
		img: 'https://cuerosvelezco.vtexassets.com/assets/vtex.file-manager-graphql/images/0bc4699f-9db0-4856-b926-5e0811ffa672___fdb31dd7621163fbdc228cb07531c6d7.jpg'
	}
];

const Home = () => {
	return (
		<>
			<Carousel>
				{dataBannerPrincipal.map(({ title, text, img }) => {
					return (
						<Carousel.Item>
							<Image className='w-100' src={img} />
							<Carousel.Caption>
								<h3>{title}</h3>
								<p>{text}</p>
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}
			</Carousel>
			<CustomCarousel>
				{dataCard.map(({ title, text, img }) => {
					return (
						<Card
							className={'m-2 mt-5 mb-5'}
							style={{ width: '18rem' }}
						>
							<Card.Img variant='top' src={img} />
							<Card.Body>
								<Card.Title>{title}</Card.Title>
								<Card.Text>{text}</Card.Text>
								<Button variant='primary'>Go somewhere</Button>
							</Card.Body>
						</Card>
					);
				})}
			</CustomCarousel>
			<Row>
				<Image
					style={{ width: '40%', padding: 0 }}
					src='https://cuerosvelezco.vtexassets.com/assets/vtex.file-manager-graphql/images/0bc4699f-9db0-4856-b926-5e0811ffa672___fdb31dd7621163fbdc228cb07531c6d7.jpg'
				/>
				<Card style={{ width: '60%' }}>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Subtitle className='mb-2 text-muted'>
							Card Subtitle
						</Card.Subtitle>
						<Card.Text>
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</Card.Text>
						<Card.Link href='#'>Card Link</Card.Link>
						<Card.Link href='#'>Another Link</Card.Link>
					</Card.Body>
				</Card>
			</Row>
		</>
	);
};

export default Home;
