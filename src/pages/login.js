import React from 'react';
import Head from 'next/head';
import { Header } from 'semantic-ui-react';

export default function LoginPage() {
	return (
		<>
			<Head>
				<title>Streets Works | Login</title>
			</Head>
			<Header as='h1' content='Login' />
		</>
	);
}
