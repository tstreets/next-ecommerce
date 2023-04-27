import React from 'react';
import Head from 'next/head';
import { Card } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { decodeFromUri, encodeToUri } from '@/utils/helper';
import Link from 'next/link';
import itemsForSales from '@/data/items';

export default function CatalogPage() {
	const router = useRouter();
	const { categoryId } = router.query;

	const categoryText = decodeFromUri(categoryId);

	return (
		<>
			<Head>
				<title>Streets Works | {categoryText || 'Category'}</title>
			</Head>
			<Card.Group itemsPerRow={4} stackable>
				{itemsForSales
					.filter(item => item.category === categoryText)
					.map(item => {
						return (
							<Card
								link
								as={Link}
								href={`/item/${encodeToUri(item.name)}`}
								key={`catalog-${item.name}`}
								color={item.color}
								image='https://placehold.co/600x400/EEE/31343C'
								header={item.name}
							/>
						);
					})}
			</Card.Group>
		</>
	);
}
