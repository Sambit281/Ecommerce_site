import React from 'react';
import NavBar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import ProductDetail from '../components/ProductDetail';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';

const ProductDetailPage = () => {
	return (
		<>
			<NavBar />
			<PageHeading title="Home / About" />
			<section className="section section-center">
				<div className="title">
					<span />
					<h2>our history</h2>
					<span />
				</div>
				<p className="about-text">
					Our online medicine store offers a convenient platform for customers to purchase prescription and over-the-counter medications, supplements, and healthcare products from the comfort of their homes, providing a user-friendly interface to browse, compare, and select a wide range of products, with features like detailed product descriptions, dosage instructions, and customer reviews to ensure informed purchasing decisions, while ensuring compliance with safety regulations and pharmaceutical standards, offering secure payment options, prescription verification services, and fast, discreet delivery to the customer’s doorstep, along with dedicated customer support for any queries related to orders, products, or general health advice.
				</p>
			</section>
			<Sidebar />
			<Cart />
		</>
	)
}


export default ProductDetailPage;