/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Carousel, Row } from 'react-bootstrap';
import useScreenSize from '../../hooks/useScreenSize';

const CustomCarousel = ({
	children,
	carouselProps,
	ItemsProps,
	view = {}
}: any) => {
	const slideGroups = [];
	const { size } = useScreenSize();
	const viewDefault =
		typeof view === 'number'
			? {
					mobile: view,
					tablet: view,
					desktop: view
			  }
			: typeof view === 'object'
			? {
					mobile: 1,
					tablet: 2,
					desktop: 3,
					...view
			  }
			: {
					mobile: 1,
					tablet: 2,
					desktop: 3
			  };

	const sizeWiew =
		size === 'mobile'
			? viewDefault.mobile
			: size === 'tablet'
			? viewDefault.tablet
			: viewDefault.desktop;

	for (let i = 0; i < children.length; i += sizeWiew) {
		slideGroups.push(children.slice(i, i + sizeWiew));
	}
	return (
		<Carousel {...carouselProps}>
			{slideGroups.map((item) => {
				return (
					<Carousel.Item {...ItemsProps}>
						<Row className={'justify-content-center'}>{item}</Row>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};

export default CustomCarousel;
