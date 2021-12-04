import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { MdOutlineCopyAll } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
function Section2() {
	return (
		<div className="grid grid-cols-12 mr-3 mt-8">
			<div className="col-span-7 gap-3 grid grid-cols-12">
				<button className="text-md col-span-3 flex-grow btn bg-blue-500 hover:bg-blue-600 text-white rounded-md">
					Download
				</button>
				<button className="text-md col-span-3 flex-grow btn bg-blue-500 hover:bg-blue-600 text-white rounded-md">
					Download QR
				</button>
				<button className="text-md col-span-3 flex-grow btn bg-blue-500 hover:bg-blue-600 text-white rounded-md">
					Report issues
				</button>
				<button className="text-md col-span-3 flex-grow btn bg-blue-500 hover:bg-blue-600 text-white rounded-md">
					Contact us
				</button>
			</div>
			{/* <div className="col-span-5 gap-3 grid grid-cols-9 ml-5">
				<button
					style={{ backgroundColor: "#4267B2" }}
					className="rounded-lg gap-3 px-1 col-span-1"
				>
					<GrFacebookOption className="text-white mx-auto text-lg hover:text-gray-200" />
				</button>
				<button
					style={{ backgroundColor: "#00a0dc" }}
					className="rounded-lg gap-3 px-1 col-span-1"
				>
					<FaLinkedinIn className="text-white mx-auto text-lg hover:text-gray-200" />
				</button>
				<button
					style={{ backgroundColor: "#1DA1F2" }}
					className="rounded-lg gap-3 px-1 col-span-1"
				>
					<BsTwitter className="text-white mx-auto text-lg hover:text-gray-200" />
				</button>
				<button
					style={{ backgroundColor: "#DD2A7B" }}
					className="rounded-lg gap-3 px-1 col-span-1"
				>
					<FiInstagram className="text-white mx-auto text-lg hover:text-gray-200" />
				</button>
				<button
					style={{ backgroundColor: "#25D366" }}
					className="rounded-lg gap-3 px-1 col-span-1"
				>
					<SiWhatsapp className="text-white mx-auto text-lg hover:text-gray-200" />
				</button>
				<button
					style={{ backgroundColor: "#eeeeee" }}
					className="rounded-lg gap-3 px-1 col-span-1"
				>
					<MdOutlineCopyAll className="text-black mx-auto text-lg hover:text-gray-600" />
				</button>
			</div> */}
		</div>
	);
}

export default Section2;
