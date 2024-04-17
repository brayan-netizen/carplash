/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from 'react-bootstrap';
import Header from '../header';

const Template = ({ children }: any) => {
	return (
		<>
			<Header />
			<Container fluid='xxl'>{children}</Container>
		</>
	);
};

export default Template;
