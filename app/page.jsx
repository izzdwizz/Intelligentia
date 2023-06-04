import React from 'react';
import Feed from '@components/Feed';
const Home = () => {
	return (
		<section className='w-full flex-center flex-col'>
			<h1 className='head_text text-center'>
				Explore and Spread
				<br className=' mt-2'></br>
				<span className='orange_gradient text-center'>
					Artificially powered prompts
				</span>
			</h1>
			<p className='mt-4'>
				{' '}
				Intelligentia is an open-source AI prompting tool for the modern world
				to explore, create and spread the word about creative concepts
			</p>

			<Feed />
		</section>
	);
};

export default Home;
