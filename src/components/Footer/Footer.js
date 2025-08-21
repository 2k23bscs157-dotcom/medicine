const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Medicine Website. All rights reserved.</p>
            <nav>
                <ul>
                    <li><a href="/about.html">About Us</a></li>
                    <li><a href="/contact.html">Contact</a></li>
                    <li><a href="/products.html">Products</a></li>
                    <li><a href="/services.html">Services</a></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;