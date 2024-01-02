import React from 'react';
import { Link } from 'react-router-dom';
import { getImages, searchImages } from './api';
import * as photo from './photo.json';
import './App.css';

class App extends React.Component {
	
	constructor(){
		super();
		this.state={imageList:[]};
		this.fetchData();
	}
	fetchData = async () => {
		const responseJson = await getImages();
		this.setState({imageList:responseJson.resources}); //this.setState({imageList:photo.resources});
	}

	openInModel = ev => {
		ev.preventDefault();
		console.log(`<img src=${ev.target.value.url} alt=${ev.target.value.public_id}></img>`);
	  };
	handelButtonClick=ev=>{
		const responseJson = await searchImages(ev.target.value);
		this.setState({imageList:responseJson.resources});
	  }
	render(){
		return (
			<>
			<div className="container">
				<nav className="navbar navbar-light">
					<Link to="/" className="navbar-brand">
						Gallery
					</Link>
				</nav>
				<div className="d-flex">
				<button onClick={handelButtonClick}>All</button>
				<button onClick={handelButtonClick}>Branding</button>
				<button onClick={handelButtonClick}>Design</button>
				<button onClick={handelButtonClick}>Devlopment</button>
				</div>
				<div className='image-grid'>
					{imageList.map((image) => (
						<img src={image.url} alt={image.public_id} onClick={openInModel}></img>
					))}
				</div>
			</div>
			</>
		);
	}
};

export default App;
