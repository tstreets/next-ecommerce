import React from 'react';
import Head from 'next/head';
import { Header } from 'semantic-ui-react';

export default function MyOrdersPage() {
	return (
		<>
			<Head>
				<title>Streets Works | My Orders</title>
			</Head>
			<Header as='h1' content='My Orders' />
		</>
	);
}
