import React from 'react';
import Head from 'next/head';
import { Header } from 'semantic-ui-react';

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Streets Works | Home</title>
			</Head>
			<Header as='h1' content='Landing' />
		</>
	);
}
