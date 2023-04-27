import 'semantic-ui-css/semantic.css';
import React from 'react';
import { Segment } from 'semantic-ui-react';
import { GlobalProvider } from '@/useHooks/useGlobalState';
import Navbar from '@/components/Navbar';
import globalStyles from '@/styles/global.module.css';

export default function App({ Component, pageProps }) {
	const initialGlobalState = {
		user: { email: '', displayName: '' },
		cart: [],
	};
	const [globalState, setGlobalState] = React.useState(initialGlobalState);
	function updateGlobalState(newState = {}) {
		setGlobalState({ ...globalState, ...newState });
	}
	function addItemToCart(newItem) {
		updateGlobalState({ cart: cart.concat(newItem) });
	}
	function removeItemFromCart(itemRemoved) {
		updateGlobalState({ cart: cart.filter(item => item.name !== itemRemoved.name) });
	}
	const { user, cart } = globalState;
	const isCartEmpty = cart.length === 0;
	const isLoggedIn = user.email !== '' && typeof user.email !== 'undefined';

	return (
		<GlobalProvider
			value={{
				...globalState,
				initialGlobalState: initialGlobalState,
				isLoggedIn: isLoggedIn,
				isCartEmpty: isCartEmpty,
				update: updateGlobalState,
				addItemToCart: addItemToCart,
				removeItemFromCart: removeItemFromCart,
			}}
		>
			<Navbar />

			<Segment as='main' className={globalStyles.mainContent}>
				<Component {...pageProps} />
			</Segment>
		</GlobalProvider>
	);
}
