import React, {Component} from 'react';
import navigationData from './../data/navigation.json';
import styles from './../styles/header.scss';
import {Link} from "react-router-dom";

export default class Header extends Component{
	constructor(props){
		super(props);
		this.state = {
			navData: navigationData,
			targetDate: null,
			showNav: false,
			timer: null,
			defaultSelectNav: "Home",
			windowWidth: 0
		};
	}

	componentDidMount(){
		if(window.innerWidth){
			this.setState({
				windowWidth: window.outerWidth
			})
		}
	}

	componentDidUpdate(){
		if(window.innerWidth){
			this.windowWidth = window.innerWidth;
		}
	}

	componentWillUpdate(){
		if(window.innerWidth){
			this.windowWidth = window.innerWidth;
		}
	}

	openSideMenu(){
		this.setState({
			showNav: !this.state.showNav
		})
	}

	closeSideMenuBar(){
		this.setState({
			showNav: !this.state.showNav
		})
	}

	navSelection(val){
		this.setState({
			defaultSelectNav: val,
			showNav: !this.state.showNav
		})
	}

	render() {
		const showNavCls = (this.state.defaultSelectNav) ? "nav-design" : "";
		const showSideCls = (this.state.showNav) ? "show-nav" : "hide-nav";
		return (
			<div className="header-section">
			<header style={{backgroundColor: "#000"}}>
				<div style={{color: "#fff"}}>

				  <div className="w3-bar w3-card  header-box" id="myNavbar" 
				  style={{backgroundColor: "rgba(0,0,0,.1)", height: "80px"}}>
				  <div className="w3-bar-item w3-center"><h2>Shopping Cart</h2></div>
				    <div className="w3-right w3-hide-small">
				    {
				    	this.state.navData.map((data, index) => {
				    		if(data.name === this.state.defaultSelectNav){
					    		return(
					    			<a key={"index_value" + index} href={data.navLink}
					    			onClick={this.navSelection.bind(this, data.name)}
					    			className={"w3-bar-item  text-design  " + showNavCls}
					    			style={{borderBottom: "8px solid #ffc719", paddingBottom: "26px", color: "#ffc719"}}>
					    			{data.name}</a>
					    		);
				    		} else{
				    			return(
				    			<a key={"index_value" + index} href={data.navLink}
				    			onClick={this.navSelection.bind(this, data.name)}
				    			className={"w3-bar-item  text-design"}>
				    			{data.name}</a>
				    		);
				    		}
				    		
				    	})
				    }
				    <div className="w3-bar-item">
				    	<span className="fa fa-cart-plus cart-design">
				    		<span className="cart-product-number">{this.props.quantity}</span>
				    	</span>
				    </div>
				    </div>

				    <a href="javascript:void(0)" 
				    className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" 
				    onClick={this.openSideMenu.bind(this)}>
				      <i className="fa fa-bars"></i>
				    </a>
				  </div>
				</div>


				<nav className={"w3-sidebar w3-bar-block  w3-card w3-animate-left w3-hide-medium w3-hide-large " + showSideCls} 
				style={{backgroundColor: "#000", paddingTop: "24px", position: "absolute", color: "#ffc719"}} id="mySidebar">
				
				  {
				    	this.state.navData.map((data, index) => {
				    		if(data.name === this.state.defaultSelectNav){
					    		return(
					    			<a key={"index_value" + index} 
					    			onClick={this.navSelection.bind(this, data.name)}
					    			className={"w3-bar-item    " + showNavCls}
					    			style={{fontSize: "20px"}} >
					    			{data.name}</a>
					    		);
				    		} else{
				    			return(
				    			<a key={"index_value" + index} 
				    			onClick={this.navSelection.bind(this, data.name)}
				    			className={"w3-bar-item "}
				    			style={{fontSize: "20px"}}>
				    			{data.name}</a>
				    		);
				    		}
				    		
				    	})
				    }
				    <div className="w3-bar-item">
				    	<span className="fa fa-cart-plus cart-design">4</span>
				    </div>
				</nav>
			</header>
			</div>
		);
	}
}