function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5>About Us</h5>
                        <p className="text-muted">We bring the best movie booking experience to your screen.</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-decoration-none text-light">Home</a></li>
                            <li><a href="/movies" className="text-decoration-none text-light">Movies</a></li>
                            <li><a href="/contact" className="text-decoration-none text-light">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Follow Us</h5>
                        <a href="#" className="text-light me-3">Facebook</a>
                        <a href="#" className="text-light me-3">Instagram</a>
                        <a href="#" className="text-light">Twitter</a>
                    </div>
                </div>
                <hr className="border-light" />
                <p className="mb-0">&copy; {new Date().getFullYear()} MovieBooking. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;