'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import logo from '../public/assets/images/manmeta.png';
const Navbar = () => {
	const { data: session } = useSession();

	const [providers, setProviders] = useState(null);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		(async () => {
			const res = await getProviders();
			setProviders(res);
		})();
	}, []);
	return (
		<nav className='flex-between w-full mb-16 pt-3 z-20 sticky'>
			<Link href='/' className='flex gap-2 flex-center'>
				<Image
					src={logo}
					alt='Intelligentia Logo'
					width={40}
					height={40}
					className='object-contain rounded-full ml-4 navtofront'
				/>

				<p className='logo_text'>Intelligentia</p>
			</Link>

			<div className='sm:flex hidden'>
				{session?.user ? (
					<div className='flex gap-3 md:gap-5'>
						<Link href='/create-prompt' className='black_btn mr-4'>
							Create Post
						</Link>

						<button
							type='button'
							onClick={signOut}
							className='outline_btn z-50'
						>
							Log out
						</button>
						<Link href='/profile'>
							<Image
								src={session?.user.image}
								width={40}
								height={40}
								className='rounded-full'
								alt='profile'
							/>
						</Link>
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => (
								<button
									type='button'
									key={provider.name}
									onClick={() => {
										signIn(provider.id);
									}}
									className='black_btn'
								>
									Login
								</button>
							))}
					</>
				)}
			</div>

			{/* MOBILE NAV */}

			<div className='sm:hidden flex relative'>
				{session?.user ? (
					<div className='flex '>
						<Image
							src={session?.user.image}
							width={40}
							height={40}
							className='rounded-full'
							onClick={() => setToggleDropdown(!toggle)}
						/>

						{toggle && (
							<div className='dropdown justify-center align-baseline  shadow-[#3333336d] shadow-sm'>
								<Link
									href='/profile'
									className='dropdown_link'
									onClick={() => {
										setToggle(false);
									}}
								>
									Profile
								</Link>
								<Link
									href='/create-prompt'
									className='dropdown_link'
									onClick={() => {
										setToggle(false);
									}}
								>
									Create Prompt
								</Link>

								<button
									type='button'
									onClick={() => {
										setToggle(false);
										signOut();
									}}
									className='mt-5 w-full black_btn'
								>
									Log Out
								</button>
							</div>
						)}
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => (
								<button
									type='button'
									key={provider.name}
									onClick={() => {
										signIn(provider.id);
									}}
									className='black_btn'
								>
									Login
								</button>
							))}
					</>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
