import { useParams } from "react-router-dom";
import { useGetCertificate } from "../../api/api";
import Section1 from "../../partials/View/Section1";
import Section2 from "../../partials/View/Section2";

function View() {
	const { certificateId } = useParams();
	const certificate = useGetCertificate(certificateId as string);
	return (
		<div className="bg-gray-50 px-5 md:px-8 lg:px-12 xl:px-24 py-16">
			{!certificate.isLoading ? (
				<>
					<Section1 />
					<Section2 />
				</>
			) : (
				<div
					className="bg-gray-200 "
					style={{ height: window.innerHeight * 0.7 }}
				>
					Loading...
				</div>
			)}
		</div>
	);
}

export default View;
