import React, {Component} from 'react';
import styles from './../styles/footer.scss';

export default class Footer extends Component{
	constructor(props){
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<div>
				<section className="footer-section-design">
					<div className="w3-center w3-padding-32">
						<p><span>&#169;</span>Shopping Cart Application</p>
					</div>
				</section>
			</div>

		);
	}
}