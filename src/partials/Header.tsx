import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../utils/Transition";
import Dropdown from "../utils/Dropdown";
import logo from "../images/CertwiseLogo.jpeg";

function Header() {
	const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
	const [top, setTop] = useState<boolean>(true);

	const trigger = useRef<any>(null);
	const mobileNav = useRef<any>(null);

	// close the mobile menu on click outside
	useEffect(() => {
		const clickHandler = ({ target }: { target: any }) => {
			if (!mobileNav.current || !trigger.current) return;
			if (
				!mobileNavOpen ||
				mobileNav.current.contains(target) ||
				trigger.current.contains(target)
			)
				return;
			setMobileNavOpen(false);
		};
		document.addEventListener("click", clickHandler);
		return () => document.removeEventListener("click", clickHandler);
	});

	// close the mobile menu if the esc key is pressed
	useEffect(() => {
		const keyHandler = ({ keyCode }: { keyCode: any }) => {
			if (!mobileNavOpen || keyCode !== 27) return;
			setMobileNavOpen(false);
		};
		document.addEventListener("keydown", keyHandler);
		return () => document.removeEventListener("keydown", keyHandler);
	});

	// detect whether user has scrolled the page down by 10px
	useEffect(() => {
		const scrollHandler = () => {
			window.pageYOffset > 10 ? setTop(false) : setTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);

	return (
		<header
			className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
				!top && "bg-white shadow-lg"
			}`}
		>
			<div className="max-w-6xl mx-auto px-5 sm:px-6">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Site branding */}
					<div className="flex-shrink-0 mr-4 ">
						{/* Logo */}
						<a
							href="https://certwise.app"
							className="flex flex-row hover:text-blue-600 hover:underline"
							aria-label="Certwise"
						>
							<img
								src={logo}
								alt="Certwise"
								className="h-12 w-auto rounded-full"
							/>

							<div className="ml-2 text-xl font-bold text-blue-500">
								Certwise
							</div>
						</a>
					</div>

					{/* Desktop navigation */}
					<nav className="hidden md:flex md:flex-grow">
						{/* Desktop menu links */}
						<ul className="flex flex-grow justify-end flex-wrap items-center"></ul>

						{/* Desktop sign in links */}
						<ul className="flex flex-grow justify-end flex-wrap items-center">
							<li>
								<a
									href="https://console.certwise.app/signup"
									className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									Create Account
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
