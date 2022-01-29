import { useParams } from "react-router-dom";
import { useGetCertificate } from "../../api/api";
import Section1 from "../../partials/View/Section1";
import Loader from "../../utils/loader";
// import Section2 from "../../partials/View/Section2";

function View() {
  const { certificateId } = useParams();
  const certificate = useGetCertificate(certificateId as string);
  return (
    <div className="bg-gray-50 px-5 md:px-8 lg:px-12 xl:px-24 py-5 md:py-16 lg:py-16 xl:py-16">
      {!certificate.isLoading ? (
        <>
          <Section1 />
          {/* <Section2 /> */}
        </>
      ) : (
        <div style={{ height: window.innerHeight * 0.7 }}>
          <Loader />
        </div>
      )}
    </div>
  );
}

export default View;
