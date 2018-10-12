import React, {Component} from 'react';
import styles from './home.scss';
import product from './../../data/product.json';
import Header from './../../components/Header.js';
import Footer from './../../components/Footer.js';



export default class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			total: 0,
			productData: product,
			book: {name: "", quantity: 0},
			bookArray: [],
			totalQuantity: 0
		};
		this.calculateTotal = this.calculateTotal.bind(this);
		this.calculateProduct = this.calculateProduct.bind(this);
	}

	calculateTotal(price, book) {
		console.log("price and book", price, book)
	    this.setState({
	    total: this.state.total + price
	    }, () => {
	    	console.log(this.state.total);
	    });
	    
  	}

  	calculateProduct(price, qty, book){
  		  this.setState({
	    	book : Object.assign({}, this.state.book , {name: book}, {quantity: qty})
	    }, () => {
	    	console.log("book", this.state.book)
	    	if(price < 0){
	    		this.state.bookArray.splice(this.state.bookArray.indexOf(book), 1)
    			this.setState({
    				bookArray: this.state.bookArray
    			}, () => {
		    		this.setState({
		    			totalQuantity: this.state.bookArray.length
		    		})
		    	})
	    	}else{

		    	this.state.bookArray.push(this.state.book.name);
		    	this.setState({
		    		bookArray: this.state.bookArray
		    	}, () => {
		    		this.setState({
		    			totalQuantity: this.state.bookArray.length
		    		})
		    	})
	    	}
	    	console.log("array", this.state.bookArray)
	    });
	    
  	}

	render() {
		if (!this.state.productData) return <p>loading...!!!!</p>;

	    var component = this;
	    var products = this.state.productData.map((data) => {
	    	return(
	    	<div>
	    	{(data.bookData.map((product) => {
			    return (
			        <Product
			          id={product.bookId}
			          name={product.bookName}
			          price={product.bookPrice}
			          info={product.bookDescription}
			          addCls={product.addCls}
			          mainCls={data.mainCls}
			          bookImage={product.bookImage}
			          handleTotal={component.calculateTotal}
			          handleProduct={component.calculateProduct}
			        />
			    );
	    	}))}
	    	</div>
	    	);

	    });

		return (
			<div>
				<Header quantity={this.state.totalQuantity} />
				{products}
				<div className="totalNumberDisplay">
					Total Price: {this.state.total}
				</div>
			</div>

		);
	}
}



class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0
    };
  }

    add(evt) {
    	evt.preventDefault();
    	
    this.setState({
      qty: this.state.qty + 1
    }, () => {
    	this.props.handleTotal(this.props.price, this.props.name);
    	this.props.handleProduct(this.props.price, this.state.qty, this.props.name);
    });
    
  }

  subtract(evt) {
  	evt.preventDefault();
    this.setState({
      qty: this.state.qty - 1
    }, () => {
    	this.props.handleTotal(-this.props.price, this.props.name);
    	this.props.handleProduct(-this.props.price, this.state.qty, this.props.name);
    });
  }



  render() {
    return (
      	<div className={this.props.addCls}>
        <div className="w3-border card-design">
          <img src={this.props.bookImage} className="crop-image"  /><br />
          <h2>{this.props.name}</h2><br />
          	<form>
                <button className="value-button"  
                onClick={this.add.bind(this)}
                value="Increase Value">+</button>
                <input type="number" id="number" value={this.state.qty} />  
                <button className="value-button" 
                disabled={this.state.qty < 1} 
                onClick={this.subtract.bind(this)} 
                value="Decrease Value">-</button>
            </form>

          </div>
        </div>
    );
  }
}