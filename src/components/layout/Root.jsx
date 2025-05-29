import {Outlet} from 'react-router-dom';
import Navbar from '../Client/Navbar';
import Footer from '../Client/Footer';

const Root = () => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Navbar/>
			<div className='flex-grow'>
				<Outlet/>
			</div>
			<Footer/>
		</div>
	)
}

export default Root;