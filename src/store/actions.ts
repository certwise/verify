import {
	certificate,
	organization,
	recipient,
	SET_CERTIFICATE,
	SET_IMAGE,
	SET_IS_VALID_CERTIFICATE,
	SET_ORGANIZATION,
	SET_RECIPIENT,
} from "./types";

export const setCertificate = (certificate: certificate) => {
	return {
		type: SET_CERTIFICATE,
		payload: certificate,
	};
};

export const setOrganization = (organization: organization) => {
	return {
		type: SET_ORGANIZATION,
		payload: organization,
	};
};

export const setRecipient = (recipient: recipient) => {
	return {
		type: SET_RECIPIENT,
		payload: recipient,
	};
};

export const setImage = (image: string) => {
	return {
		type: SET_IMAGE,
		payload: image,
	};
};

export const setIsValidCertificate = (valid: boolean) => {
	return {
		type: SET_IS_VALID_CERTIFICATE,
		payload: valid,
	};
};
