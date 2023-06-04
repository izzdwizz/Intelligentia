import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Provider from '@components/Provider';
export const metadata = {
	title: 'intelligentia',
	description: ' Explore personalized AI',
};

const Rootlayout = ({ children }) => {
	return (
		<html lang='de'>
			<body>
				<Provider>
					<div className='main'>
						<div className='gradient' />
					</div>
					<Navbar />
					<main className='app'>{children}</main>
				</Provider>
			</body>
		</html>
	);
};

export default Rootlayout;
