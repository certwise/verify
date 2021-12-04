export const SET_CERTIFICATE = "SET_CERTIFICATE";
export const SET_ORGANIZATION = "SET_ORGANIZATION";
export const SET_RECIPIENT = "SET_RECIPIENT";
export const SET_IMAGE = "SET_IMAGE";
export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_IS_VALID_CERTIFICATE = "SET_IS_VALID_CERTIFICATE";
export type certificate = {
	_id?: string;
	issuer: string;
	organization: string;
	isIssued: boolean;
	templateId: string;
	createdAt: Date;
	lastUpdated: Date;
	issueDate: Date | false;
	recipient: string;
	fields: Array<any>;
	group: string | false;
	validTill: Date | false;
	storageRef?: string;
	isRevoked: boolean;
};

export interface organization {
	_id?: string;
	name: string;
	createdBy: string;
	createdAt: Date;
	customFields: Array<any>;
	lastUpdated: Date;
	email: string;
	metaData?: {
		city?: string;
		country?: string;
		address?: string;
		phone?: string;
		state?: string;
		website?: string;
		logo?: string;
		description?: string;
		picture?: string;
		postalCode?: string;
	};
}

export interface recipient {
	_id?: string;
	email: string;
	name: string;
	createdAt: Date;
	customFields: any[];
	organization: string;
	groups: string[];
	certificates: string[];
}

export interface state {
	certificate: certificate | undefined;
	organization: organization | undefined;
	recipient: recipient | undefined;
	image: string | undefined;
	isLoading: boolean;
	isValidCertificate: boolean;
}

export interface action {
	type: string;
	payload: any;
}
