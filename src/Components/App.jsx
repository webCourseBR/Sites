import React from 'react';
import '../style/scss/App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../Pages/Home.jsx';
import Dogs from '../Pages/Dogs.jsx';
import Cats from '../Pages/Cats.jsx';
import Donate from '../Pages/Donate';
import License from '../Pages/License.jsx';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
		<Router>
			<div className="App contents">
				<Header />
				<main>
					<Route path="/" exact render={()=>(
						<Home/>
					)}/>

					<Route path="/cats" component={Cats}/>
					<Route path="/dogs" component={Dogs}/>
					<Route path="/donate" component={Donate}/>
					<Route path="/license" component={License}/>
				</main>
				<Footer />
			</div>
		</Router>
  );
}

export default App;
