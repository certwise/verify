import { useQuery } from "react-query";
import axios from "axios";
import { useContext } from "react";
import Context, { actions } from "../store";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { env } from "../config";

const getCertificate = async (certificateId: string) => {
	return axios.get(`${env.url}/certificate/one/${certificateId}`);
};

const getOrganization = (id: string) => {
	return axios.get(`${env.url}/organization/${id}`);
};

const getRecipient = (id: string) => {
	return axios.get(`${env.url}/recipient/${id}`);
};

export const useGetCertificate = (certificateId: string) => {
	const { dispatch } = useContext(Context);
	return useQuery(
		["certificate", certificateId],
		() => getCertificate(certificateId),
		{
			enabled: certificateId !== "",
			onSuccess: async (data) => {
				console.log("Data useGetCertificate:", data.data);
				dispatch(actions.setCertificate(data.data));
				dispatch(actions.setIsValidCertificate(true));
			},
			onError: (error) => {
				dispatch(actions.setIsValidCertificate(false));
				console.log(error);
			},
		}
	);
};

export const useGetImage = (strorageRef: string) => {
	const { store, dispatch } = useContext(Context);
	return useQuery(
		["certificateImage", strorageRef],
		() => getDownloadURL(ref(getStorage(), strorageRef)),
		{
			enabled: store.isValidCertificate,
			onSuccess: (data) => {
				dispatch(actions.setImage(data));
			},
		}
	);
};

// TODO: add aggregate query to fetch all data at once from the database
export const useGetOrganization = (organizationId: string) => {
	const { store, dispatch } = useContext(Context);

	return useQuery("organization", () => getOrganization(organizationId), {
		enabled: !!store.isValidCertificate,
		onSuccess: (data) => {
			dispatch(actions.setOrganization(data.data));
		},
	});
};

export const useGetRecipient = (recipientId: string) => {
	const { store, dispatch } = useContext(Context);

	return useQuery("recipient", () => getRecipient(recipientId), {
		enabled: !!store.isValidCertificate,
		onSuccess: (data) => {
			dispatch(actions.setRecipient(data.data));
		},
	});
};
