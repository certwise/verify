import { useContext } from "react";
import { useGetImage } from "../../api/api";
import Context from "../../store";
import OrganizationCard from "./OrganizationCard";
import RecipientCard from "./RecipientCard";

function Section1() {
	const { store } = useContext(Context);
	const image = useGetImage(
		store.certificate?.organization +
			"/certificates/" +
			store.certificate?._id +
			".jpg"
	);
	return (
		<div className="w-full">
			{!image.isLoading && (
				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-7 border-2 border-gray-200 bg-gray-100 rounded p-5">
						<img
							style={{ maxHeight: window.innerHeight * 0.7 }}
							src={store.image as string}
							alt="Certificate"
							className="object-fit mx-auto shadow-xl"
						/>
					</div>
					<div className="col-span-5 h-full flex flex-col ">
						<OrganizationCard />
						<RecipientCard />
					</div>
				</div>
			)}
			{image.isLoading && <div>Loading image...</div>}
		</div>
	);
}

export default Section1;
