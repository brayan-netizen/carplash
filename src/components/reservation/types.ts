export interface IReservation {
	placa?: string;
	servicio?: string;
	date?: string;
	sede?: string;
}

export interface ITemplate {
	title: string;
	isEdit?: boolean;
	data: IReservation;
	textButton: string;
	funcSend: () => void;
	setData: (data: IReservation) => void;
}
