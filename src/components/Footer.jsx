const Footer = () => {
    return (
      <div>
        <section className="row m-0 p-4 text-light footer-background-color">
          <div className="col-md-4 mb-4">
            <h5 className="text-info text-center">About Us</h5>
            <p>
              Vegetables are part of who we are — why not get a lovely meal from us today?
              Life is simpler with Veduras: joy, convenience, and home delivery at your fingertips.
            </p>
          </div>
  
          <div className="col-md-4 mb-4">
            <h5 className="text-info text-center">Reach Us Out</h5>
            <form>
              <div className="mb-2">
                <label htmlFor="email" className="form-label visually-hidden">Email</label>
                <input id="email" type="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="mb-2">
                <label htmlFor="message" className="form-label visually-hidden">Message</label>
                <textarea id="message" className="form-control" rows="4" placeholder="Leave a comment"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
  
          <div className="col-md-4 mb-4 text-center">
            <h5 className="text-info">Connect With Us</h5>
            <div className="d-flex justify-content-center gap-3 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/photos/facebook image.png" alt="Facebook" className="socialspictures" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/photos/instagram.jpeg" alt="Instagram" className="socialspictures" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <img src="/photos/x photo.png" alt="X (Twitter)" className="socialspictures" />
              </a>
            </div>
            <video
              src="/videos/secondvideo.mp4"
              autoPlay
              muted
              loop
              className="w-100 mt-3 rounded shadow"
            ></video>
          </div>
        </section>
  
        <footer className="text-white text-center py-3 bg-dark">
          <small>&copy; 2025 Veduras. All rights reserved.</small>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  