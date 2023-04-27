import React from 'react';
import Head from 'next/head';
import { Button, Header, Table } from 'semantic-ui-react';
import useGlobalState from '@/useHooks/useGlobalState';

export default function CartPage() {
	const { cart, removeItemFromCart } = useGlobalState();

	const uniqueItemsInCart = Object.values(
		cart.reduce((acc, item) => {
			const newCart = { ...acc };
			newCart[item.name] = newCart[item.name] || {
				name: item.name,
				quanity: 0,
				totalPrice: 0,
			};
			newCart[item.name].quanity++;
			newCart[item.name].totalPrice += item.price;
			return newCart;
		}, {})
	);

	return (
		<>
			<Head>
				<title>Streets Works | Cart</title>
			</Head>
			<Header as='h1' content='Cart' />
			<Table>
				<colgroup>
					<col style={{ width: '50vw' }} />
					<col style={{ width: '20vw' }} />
					<col style={{ width: '20vw' }} />
					<col style={{ width: '10vw' }} />
				</colgroup>
				<Table.Header>
					<Table.Row textAlign='center'>
						<Table.HeaderCell>Item</Table.HeaderCell>
						<Table.HeaderCell>Quanity</Table.HeaderCell>
						<Table.HeaderCell>Price</Table.HeaderCell>
						<Table.HeaderCell></Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{uniqueItemsInCart.map(item => {
						function removeCurrentItemFromCart() {
							removeItemFromCart(item);
						}

						return (
							<Table.Row key={item.name} textAlign='center'>
								<Table.Cell>{item.name}</Table.Cell>
								<Table.Cell>{item.quanity}</Table.Cell>
								<Table.Cell>
									{Number(item.totalPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
								</Table.Cell>
								<Table.Cell>
									<Button icon='trash' color='red' onClick={removeCurrentItemFromCart} />
								</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table>
		</>
	);
}
