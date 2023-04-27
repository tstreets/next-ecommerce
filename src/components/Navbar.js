import React from 'react';
import { Menu, Dropdown, Input, Icon, Label, Button } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useGlobalState from '@/useHooks/useGlobalState';

export default function Navbar() {
	const router = useRouter();
	const { update, user, cart, initialGlobalState, isLoggedIn, isCartEmpty } = useGlobalState();

	function toggleLogin() {
		update({ user: user.email ? initialGlobalState.user : { email: 'ty@ty.ty', displayName: 'Ty' } });
	}

	const activePath = router.pathname;

	const mainPages = ['', 'catalog'];

	return (
		<>
			<Menu stackable>
				{mainPages.map(page => {
					const pageHref = `/${page.replaceAll(' ', '-')}`;
					return (
						<Menu.Item
							key={`nav-${page}`}
							link
							name={page || 'home'}
							active={activePath === pageHref}
							as={Link}
							href={pageHref}
						/>
					);
				})}
				<Menu.Menu position='right'>
					<Menu.Item>
						<Input placeholder='Search...' action={<Button icon='search' color='blue' />} />
					</Menu.Item>
				</Menu.Menu>
				<Dropdown item text={isLoggedIn ? user.displayName : 'Guest'}>
					<Dropdown.Menu direction='left'>
						{!isLoggedIn ? (
							<>
								<Dropdown.Item onClick={toggleLogin} content='Login' />
							</>
						) : (
							<>
								<Dropdown.Header>{user.email}</Dropdown.Header>
								<Dropdown.Item as={Link} href='my-orders' content='My Orders' active={activePath === '/my-orders'} />
								<Dropdown.Item onClick={toggleLogin} content='Logout' />
							</>
						)}
					</Dropdown.Menu>
				</Dropdown>
				<Menu.Item link as={Link} href='/cart' active={activePath === '/cart'}>
					<Icon name='cart' size='large' />
					<Label attached='bottom right' circular color={isCartEmpty ? undefined : 'orange'}>
						{cart.length}
					</Label>
				</Menu.Item>
			</Menu>
		</>
	);
}
