import { useEffect, useState } from 'react';

const useScreenSize = () => {
	const [screenSize, setScreenSize] = useState<{
		type: string;
		size: string;
		isMobile: boolean;
	}>({
		type: 'desktop',
		size: 'xl',
		isMobile: false
	});

	useEffect(() => {
		const checkScreenSize = () => {
			let size = '';

			const width = window.innerWidth;

			switch (true) {
				case width <= 575.98:
					size = 'xs';
					break;
				case width >= 576 && width <= 767.98:
					size = 'sm';
					break;
				case width >= 768 && width <= 991.98:
					size = 'md';
					break;
				case width >= 992 && width <= 1199.98:
					size = 'lg';
					break;
				case width >= 1200 && width <= 1399.98:
					size = 'xl';
					break;
				case width >= 1400:
					size = 'xxl';
					break;
				default:
					size = 'xl';
			}

			const type =
				size === 'xs' || size === 'sm'
					? 'mobile'
					: size === 'md' || size === 'lg'
					? 'tablet'
					: 'desktop';

			setScreenSize({
				type,
				size,
				isMobile: type === 'mobile' || size === 'tablet'
			});
		};

		// Verificar el tamaño de la pantalla cuando se monta el componente
		checkScreenSize();

		// Escuchar cambios en el tamaño de la pantalla y actualizar el estado en consecuencia
		window.addEventListener('resize', checkScreenSize);

		// Eliminar el event listener cuando el componente se desmonte
		return () => {
			window.removeEventListener('resize', checkScreenSize);
		};
	}, []); // El useEffect solo se ejecuta una vez al montar el componente

	return screenSize;
};

export default useScreenSize;
