import React, { Component } from "react";
import './App.css';

class Users extends React.Component {

	
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
			<h1> Fetch data from an api in react </h1> {
				items.map((item) => (
				<h4>
					Text: { item.text },
					Author: { item.author },
				</h4>
				))
			}
		</div>
	);
}
}

export default Users;
