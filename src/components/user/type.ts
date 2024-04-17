export interface IUser {
	name?: string;
	lastName?: string;
	email?: string;
	phone?: string;
	pass?: string;
	rePass?: string;
}

export interface ITemplate {
	title: string;
	data: IUser;
	isEdit?: boolean;
	textButton: string;
	funcSend: () => void;
	setData: (data: IUser) => void;
}
