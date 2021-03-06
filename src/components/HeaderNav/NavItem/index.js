/*
 * @Author: qiuziz
 * @Date: 2017-09-05 15:43:30
 * */

import React from 'react';
import { Link } from 'react-router';

class NavItem extends React.Component {
	render() {
		const item = this.props.item;
		const navItemElement = item.link
			? <Link to={item.link}>{item.label}</Link>
			: typeof item.fn === 'function'
				? <a onClick={item.fn}>{item.label}</a>
				: item.label;
		return (
			<li className="nav-item">{navItemElement}</li>
		)
	}
}

export default NavItem;
