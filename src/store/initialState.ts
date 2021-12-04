import { state } from "./types";

const initialState: state = {
	certificate: undefined,
	organization: undefined,
	recipient: undefined,
	image: undefined,
	isLoading: false,
	isValidCertificate: false,
};
export default initialState;
