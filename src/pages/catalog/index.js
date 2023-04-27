import React from 'react';
import Head from 'next/head';
import { Card } from 'semantic-ui-react';
import Link from 'next/link';
import { encodeToUri } from '@/utils/helper';
import categories from '@/data/categories';

export default function CatalogPage() {
	return (
		<>
			<Head>
				<title>Streets Works | Catalog</title>
			</Head>
			<Card.Group itemsPerRow={4} stackable>
				{categories.map(category => {
					return (
						<Card
							link
							as={Link}
							href={`/catalog/${encodeToUri(category.name)}`}
							key={`catalog-${category.name}`}
							color={category.color}
							image='https://placehold.co/600x400/EEE/31343C'
							header={category.name}
						/>
					);
				})}
			</Card.Group>
		</>
	);
}
