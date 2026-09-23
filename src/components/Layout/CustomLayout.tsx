import "./index.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from 'react-router-dom';




export const CustomLayout = () => {
	return (
		<div className="layout">
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default CustomLayout;