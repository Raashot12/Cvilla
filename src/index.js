import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './components/Context/Context';
import ScrollIntoView from './scrollToTop';
// import Food from './FoodAPI/Food'



ReactDOM.render(
	<ProductProvider>
		<BrowserRouter>
			<ScrollIntoView>
				<App />
				{/* <Food /> */}
			</ScrollIntoView>


		</BrowserRouter>

	</ProductProvider>


	, document.getElementById('root'));


