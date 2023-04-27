import React from 'react';
import Head from 'next/head';
import { Button, Grid, Header, Image } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { decodeFromUri } from '@/utils/helper';
import itemsForSales from '@/data/items';
import useGlobalState from '@/useHooks/useGlobalState';

export default function CatalogPage() {
	const router = useRouter();
	const { addItemToCart } = useGlobalState();
	const { itemId } = router.query;

	const itemText = decodeFromUri(itemId);
	const currentItem = itemsForSales.find(item => item.name === itemText) || {};

	function addCurrentItemToCart() {
		addItemToCart(currentItem);
	}

	return (
		<>
			<Head>
				<title>Streets Works | {itemText || 'Item'}</title>
			</Head>
			<Grid columns={2}>
				<Grid.Column>
					<Image src='https://placehold.co/600x400/EEE/31343C' />
				</Grid.Column>
				<Grid.Column>
					<Header as='h1' content={itemText} />
					<p>{Number(currentItem.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
					<Button icon='plus' content='Add to Cart' color='green' onClick={addCurrentItemToCart} />
				</Grid.Column>
			</Grid>
		</>
	);
}
