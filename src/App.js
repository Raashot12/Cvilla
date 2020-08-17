




































import './App.css';
import React, { Component } from 'react';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Biography from './Pages/Biography';
import Interiors from './Pages/Interiors';
import Events from './Pages/Events';
import Contact from './Pages/Contact';
import Inspirations from './Pages/Inspirations';
import Flight from './Flight.js'
import Default from './Pages/Default';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';

import logo from './logo.png';
import styled from 'styled-components';

// import { scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { ProductConsumer } from './components/Context/Context';

class App extends Component {

	render() {
		return (
			<div id="">
				{ /*Common navbar for all Pages  */}

				{ /* and of Common navbar for all Pages  */}
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/blog" component={Blog} />
						<Route path="/management" component={Biography} />
						<Route path="/visitors" component={Interiors} exact />
						<Route path="/events" component={Events} />
						<Route path="/contact" component={Contact} />
						<Route path="/inspirations" component={Inspirations} />
						<Route path='/airline' component={Flight} />
						<Route component={Default} />
					</Switch>
					{ /*Common navbar for all Pages  */}
					<Footer />
					{ /* end of Common navbar for all Pages  */}
				</Router>

			</div>
		)
	}
}

export default App;



// import BackImage from '../../src/images/home.jpg'
function Navbar() {
	return (
		<ProductConsumer>
			{value => {
				// links, scrollEffect,
				const { sidebarOpen, handleSidebar, handleClose, headerShow } = value;
				return (
					<NavWrapper show={sidebarOpen} posit={headerShow}>
						<div className="header-container">
							<nav>
								<div className="logoBtn">
									<Link to='/'
										onClick={handleClose}

									><img src={logo} alt="" /></Link>

									<div className="btn" onClick={handleSidebar}>
										<div className="bar"></div>
										<div className="bar"></div>
										<div className="bar"></div>
									</div>
								</div>

								<ul className="links" onClick={handleClose}>

									{/* importing dinamicaly with map from data */}
									{value.links.map(links => {
										return (
											<li key={links.id}><Link to={links.path}>{links.link}</Link></li>
										)
									})}


								</ul>
							</nav>

						</div>
					</NavWrapper>
				)
			}}
		</ProductConsumer>
	)
}




const NavWrapper = styled.div`
	position:sticky;
 	top:0;
	z-index:6;
  background:${props => props.posit ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.3)'};
  transition:${props => props.posit ? 'all 0.5s ease-in-out' : 'all 0s ease-in-out'};
  opacity:${props => props.posit ? '1' : '0.9'};
	  
	    .logoBtn img{
      display:block;
      padding:0px; 
      width:180px;
	  height:50px;
	}

  .header-container{
      width:100%;
	  z-index:5;
  }
    .bar{
      width:35px;
      margin:5px;
      padding:2px;
      background:#fff;
	  }
	  
	  .logoBtn{
      display:flex;
      justify-content:space-between;
      align-items:center;
      border-bottom:1px solid grey;
      padding:10px;
  }


  .links{
      transition:all 0.5s ease-in-out;
      position:fixed;
      top:71px;
      bottom:0px;
      left:0px;
      right:0;
      background:rgba(0,0,0,0.9);
      width:400px;
      transform: ${ props => props.show ? 'translate(0%)' : "translate(-100%)"};

  }
 .links li a{
      color:#fff;
      display:block;
      text-transform:uppercase;
      padding:10px;
      transition:all 0.5s ease-in-out;
      border:1px solid  transparent;
      border-bottom:1px solid transparent;
  }
  .links li a:hover{
      color:#41e1b3;
      display:block;
      padding:10px 25px;
      border-bottom:1px solid #049fe1;
      background:rgba(0,0,0,0.1)
  }
   /* responsive mode */
   @media screen and (min-width:870px){
    .links{
        transition:all 0s ease-in-out !important;
    }
   }

   @media screen and (min-width:880px){
    .header-container{
        margin:0 auto;
        width:100%;
    }

    .btn{
        display:none;
    }
	nav{
		display:flex;
		justify-content:space-between;
		padding:10px 0;
		max-width:1180px;
		margin:0 auto;
		position: relative;
	}

	.links{
		position: relative;
		transition:all 0s ease-in-out !important;
		display:flex;
		margin-right:180px;
		justify-content:space-between;
		align-items:center;
		top:auto;
		background:transparent;
		width: auto;
		 transform:translate(0);
	}
	.links li a{
		margin: 0 2px;
		padding: 10px;
	
	}
	.links li a:hover{
		margin:0 2px;
		padding: 10px;
		border: 1px solid #049fe1;
		background: transperant;
		
	}
	.logoBtn{
		border-bottom:0;

	}

   }

   @media screen and (min-width:960px)
   .logoBtn img{
	   display:block;
	   padding: 0 0px;
   }
`























// import React from 'react'
// import Home from './Pages/Home';
// import Blog from './Pages/Blog';
// import Biography from './Pages/Biography';
// import Interiors from './Pages/Interiors';
// import Events from './Pages/Events';
// import Contact from './Pages/Contact';
// import Inspirations from './Pages/Inspirations';
// import Default from './Pages/Default';
// import Footer from './components/Footer';
// import logo from './logo.png';
// import styled from 'styled-components';
// // import BackImage from '../../src/images/home.jpg';

// import { ProductConsumer } from './components/Context/Context';

// import {
// 	BrowserRouter as Router,
// 	Switch,
// 	Route,
// 	Link
// } from "react-router-dom";
// import './App.css';

// function App() {
//   return (

//     <div className="App">

//     {/* common navbar for all pages */}
//       <Navbar />
//     {/*end of common navbar for all pages */}


// 		<Router>
// 		  <Switch>
// 			  <Route exact path="/" component={Home} />
// 			  <Route exact path="/blog" component={Blog} />
// 			  <Route exact path="/biography" component={Biography} />
// 			  <Route exact path="/interiors" component={Interiors} />
// 			  <Route exact path="/events" component={Events} />
// 			  <Route exact path="/contact" component={Contact} />
// 			  <Route exact path="/inspirations" component={Inspirations} />
// 			  <Route component={Default} />
// 		  </Switch>
// 		  </Router>
//      {/* <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/blog" component={Blog} />
//         <Route exact path="/biography" component={Biography} />
//         <Route exact path="/interiors" component={Interiors} />
//         <Route exact path="/events" component={Events} />
//         <Route exact path="/contact" component={Contact} />
//         <Route exact path="/inspirations" component={Inspirations} />
//         <Route  component={Default} />
//      </Switch> */}


//     {/* common footer for all pages */}
//         <Footer />
//     {/*end of common footer for all pages */}

//     </div>

//   );
// }

// export default App;


//  function Navbar() {
// 	return (
// 		<ProductConsumer>
// 			{value => {
// 				const { sidebarOpen, handleSidebar, handleClose, links, scrollEffect, headerShow } = value;
// 				return (
// 					<NavWrapper show={sidebarOpen} posit={headerShow}>
// 						<div className="header-container">
// 							<nav>
// 								<div className="logoBtn">
// 									<Link to='/'
// 										onClick={handleClose}

// 									><img src={logo} alt="" /></Link>

// 									<div className="btn" onClick={handleSidebar}>
// 										<div className="bar"></div>
// 										<div className="bar"></div>
// 										<div className="bar"></div>
// 									</div>
// 								</div>

// 								<ul className="links" onClick={handleClose}>

// 									{/* importing dinamicaly with map from data */}
// 									{value.links.map(links => {
// 										return (
// 											<li key={links.id}><Link to={links.path}>{links.link}</Link></li>
// 										)
// 									})}


// 								</ul>
// 							</nav>
// 						</div>
// 					</NavWrapper>
// 				)
// 			}}
// 		</ProductConsumer>
// 	)
// }


// const NavWrapper = styled.div`
//   position:sticky;
//   top:0;
//   z-index:6;

//   background:${props => props.posit ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.3)'};
//   transition:${props => props.posit ? 'all 0.5s ease-in-out' : 'all 0s ease-in-out'};
//   opacity:${props => props.posit ? '1' : '0.9'};

//   .logoBtn img{
//       display:block;
//       padding:0px; 
//       width:180px;
//       height:50px;

//   }

//   .header-container{
//       width:100%;
//       z-index:5;
//   }

//   .bar{
//       width:35px;
//       margin:5px;
//       padding:2px;
//       background:#fff;
//   }

//   .logoBtn{
//       display:flex;
//       justify-content:space-between;
//       align-items:center;
//       border-bottom:1px solid grey;
//       padding:10px;
//   }

//   .links{
//       transition:all 0.5s ease-in-out;
//       position:fixed;
//       top:71px;
//       bottom:0px;
//       left:0px;
//       right:0;
//       background:rgba(0,0,0,0.9);
//       width:400px;
//       transform:${props => props.show ? 'translate(0%)' : "translate(-100%)"};

//   }

//   .links li a{
//       color:#fff;
//       display:block;
//       text-transform:uppercase;
//       padding:10px;
//       transition:all 0.5s ease-in-out;
//       border:1px solid  transparent;
//       border-bottom:1px solid transparent;
//   }

//   .links li a:hover{
//       color:#41e1b3;
//       display:block;
//       padding:10px 25px;
//       border-bottom:1px solid #049fe1;
//       background:rgba(0,0,0,0.1)
//   }

//   /* responsive mode */
//    @media screen and (min-width:870px){
//     .links{
//         transition:all 0s ease-in-out !important;
//     }
//    }

//    @media screen and (min-width:880px){
//     .header-container{
//         margin:0 auto;
//         width:100%;
//     }

//     .btn{
//         display:none;
//     }

//     nav{
//         display:flex;
//         justify-content:space-between;
//         padding:10px 0;
//         max-width:1180px;
//         margin:0 auto;
//         position:relative;

//     }

//     .links{

//         transition:all 0s ease-in-out !important;
//         display:flex;
//         margin-right:10px;
//         justify-content:space-between;
//         align-items:center;
//         position:relative;
//         top:auto;
//         background:transparent;
//         width:auto;
//         transform:translate(0);
//     }

//     .links li a{
//         margin:0 2px;

//     }

//     .links li a:hover{
//         margin:0 2px;
//         padding:10px;
//         border:1px solid #049fe1;
//         background:transparent;
//     }

//     .logoBtn{
//         border-bottom:0;
//     }


//    }

//    @media screen and (min-width:960px){
//      .logoBtn img{
//          display:block;
//          padding:0 0px;
//      }
//    }








//  `
