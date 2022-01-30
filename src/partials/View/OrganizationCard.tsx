import { useContext } from "react";
import { useGetOrganization } from "../../api/api";
import Context from "../../store";
import { Country, State } from "country-state-city";
import { GoVerified } from "react-icons/go";
import organizationImage from "../../images/org.jpg";
function OrganizationCard() {
  const { store } = useContext(Context);
  const organization = useGetOrganization(
    store.certificate?.organization as string
  );
  const country = Country.getCountryByCode(
    store.organization?.metaData?.country as string
  );
  const state = State.getStateByCodeAndCountry(
    store.organization?.metaData?.state as string,
    store.organization?.metaData?.country as string
  );
  return (
    <div className="bg-white h-full p-4 mb-2 rounded-xl shadow-lg">
      <div className="font-bold text-gray-500">ISSUER</div>
      <div className="flex flex-row mt-4">
        <img
          src={organizationImage}
          alt="org"
          className="shadow-lg rounded-full border-2 border-gray-200 h-16 text-xs w-16 text-center"
        />
        <div className="pl-5">
          <h2 className="text-lg font-bold text-blue-500 mt-1">
            {store.organization?.name} <GoVerified className="inline mb-1" />
          </h2>
          <div className="">{`${store.organization?.metaData?.city}, ${state?.name}, ${country?.name}`}</div>
        </div>
      </div>
      <div className="mt-2">
        Support email:{" "}
        <span className="text-blue-500 ml-2">{store.organization?.email}</span>
      </div>
      <div className="mt-2">
        Phone number:{" "}
        <span className="text-blue-500 ml-2">
          {store.organization?.metaData?.phone || "NaN"}
        </span>
      </div>
    </div>
  );
}

export default OrganizationCard;
