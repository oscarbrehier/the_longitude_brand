import Head from 'next/head';
import {useRouter} from 'next/router';
import { useEffect } from 'react';

const Home = () => {

	const router = useRouter();

	return (
		<>
			<Head>
				<title></title>
				<meta name="description" content="" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className='h-screen w-screen bg-[url("/assets/gifs/loading.gif")] bg-cover'>
				<div className='h-full w-full flex justify-center items-center flex-col bg-black bg-opacity-50'>
					
					<img className='w-[40rem]' src="/assets/images/logo_white.png" alt="" />

					<div className='flex space-x-10 mt-5 children:text-white children:cursor-pointer children:px-1 children:font-courrier'>
						<a onClick={() => router.push('/boutique')}>boutique</a>
					</div>

				</div>
			</main>
		</>

	);
};

export default Home;
