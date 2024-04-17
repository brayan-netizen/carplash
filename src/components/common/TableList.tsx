/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	ReactElement,
	JSXElementConstructor,
	ReactNode,
	ReactPortal,
	Key
} from 'react';
import {
	Card,
	Table,
	Container,
	Row,
	Col,
	Spinner,
	Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface ROW {
	[x: string]:
		| string
		| number
		| boolean
		| ReactElement<any, string | JSXElementConstructor<any>>
		| Iterable<ReactNode>
		| ReactPortal
		| null
		| undefined;
}
interface BodyItem {
	[key: string]: string | number | undefined;
}

interface Func {
	[key: string]: (data: any) => React.ReactNode;
}
interface Props {
	title?: string;
	body: BodyItem[];
	subtitle?: string;
	functions: Func;
	loading?: boolean;
	linkCreate?: string;
	header: Record<string, string>;
}

const TableList: React.FC<Props> = ({
	header,
	body,
	title,
	subtitle,
	functions,
	linkCreate,
	loading = false
}) => {
	if (!body || !header) return <></>;

	if (loading)
		return (
			<Spinner animation='border' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</Spinner>
		);

	const columns = Object.keys(header);

	const sortedColumns = columns.sort((a, b) => {
		return columns.indexOf(a) - columns.indexOf(b);
	});

	return (
		<Container fluid>
			<Row className='justify-content-center align-items-center my-5 py-5'>
				<Col md='12'>
					<Card className='strpied-tabled-with-hover shadow-lg'>
						<Card.Header>
							<Row>
								{title ? (
									<Col>
										<Card.Title as='h4'>{title}</Card.Title>
									</Col>
								) : (
									<></>
								)}
								{linkCreate ? (
									<Col className='d-flex justify-content-end'>
										<Link to={linkCreate}>
											<Button variant='secondary'>
												Crear
											</Button>
										</Link>
									</Col>
								) : (
									<></>
								)}
								{subtitle ? (
									<p className='card-category'>{subtitle}</p>
								) : (
									<></>
								)}
							</Row>
						</Card.Header>
						<Card.Body className='table-full-width table-responsive'>
							<Table className='table-hover table-striped'>
								<thead>
									<tr>
										{sortedColumns?.map((column, index) => (
											<th key={index}>
												{header[column]}
											</th>
										))}
									</tr>
								</thead>
								<tbody>
									{body?.map(
										(
											row: ROW,
											rowIndex: Key | null | undefined
										) => (
											<tr key={rowIndex}>
												{sortedColumns?.map(
													(column, colIndex) => (
														<td key={colIndex}>
															{functions &&
															functions[column] &&
															typeof functions[
																column
															] === 'function'
																? functions[
																		column
																  ](row)
																: row[column]}
														</td>
													)
												)}
											</tr>
										)
									)}
								</tbody>
							</Table>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default TableList;
