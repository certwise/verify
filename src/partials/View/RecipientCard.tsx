import { useContext } from "react";
import { useGetRecipient } from "../../api/api";
import Context from "../../store";
import recipientImage from "../../images/recipient.jpg";
function RecipientCard() {
  const { store } = useContext(Context);
  const recipient = useGetRecipient(store.certificate?.recipient as string);
  return (
    <div className="bg-white h-full p-4 mt-2 rounded-xl shadow-lg">
      <div className="font-bold text-gray-500">RECIPIENT</div>
      <div className="flex flex-row mt-4">
        <img
          src={recipientImage}
          alt="rec"
          className="shadow-lg rounded-full border-2 border-gray-200 h-16 text-xs w-16 text-center"
        />
        <div className="ml-2 ">
          <div className="font-bold text-blue-500 ml-2">
            {store.recipient?.name}
          </div>

          <div className="mt-1 ml-2">
            Member of{" "}
            <span className="font-bold ml-1 text-blue-500">
              {store.organization?.name}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 text-sm">
        Certificate description given by organization{" "}
        <span className="font-bold ml-1 text-blue-500">
          about the recipient.
        </span>
      </div>
    </div>
  );
}

export default RecipientCard;
