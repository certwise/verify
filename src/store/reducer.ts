import {
	action,
	SET_CERTIFICATE,
	SET_IMAGE,
	SET_IS_VALID_CERTIFICATE,
	SET_ORGANIZATION,
	SET_RECIPIENT,
	state,
} from "./types";

const reducer = (state: state, action: action): state => {
	switch (action.type) {
		case SET_CERTIFICATE:
			return {
				...state,
				certificate: action.payload,
				isValidCertificate: true,
			};
		case SET_ORGANIZATION:
			return {
				...state,
				organization: action.payload,
			};
		case SET_RECIPIENT:
			return {
				...state,
				recipient: action.payload,
			};
		case SET_IMAGE:
			return {
				...state,
				image: action.payload,
			};

		case SET_IS_VALID_CERTIFICATE: {
			return {
				...state,
				isValidCertificate: action.payload,
			};
		}
		default:
			return state;
	}
};

export default reducer;
