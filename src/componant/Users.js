import React from "react";
import './App.css';
import Card from 'react-bootstrap/Card';
class App extends React.Component {

	
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}


	componentDidMount() {
		fetch("https://type.fit/api/quotes")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Fetch data from quotes api in react... </h1> {
				items.map((item) => (
						 <Card>
							<Card.Img variant="top" src="G:\ETP\day22\api-task\src\api.png" alt="img" />
							<Card.Title><h4>Text: { item.text },</h4></Card.Title>
							<Card.Text>Author: { item.author },</Card.Text>
							<br />
						</Card>
						
				    ))
				
				
			    }
		    </div>
	    );
    }
}

    

export default App;