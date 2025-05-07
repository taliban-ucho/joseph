const Footer = () => {
    return (
    <div>
        <section className="row  mt-4 footer-background-color">
            <div className="col-md-4 text-left text-light">
                <h5 className="p-2 text-center text-info">About Us</h5>
                <p>vegestables are part of who we are why not get a lovely meal from us today.</p>
                <p>life is simpler and easier with veduras since it gives joy and saves time and ease of geting it to your home.</p>
                <br/>
            </div>
            <div className="col-md-4 text-light">
                <h5 className="p-2 text-center text-info">Reach Us Out</h5>
                <input className="form-control" type="email" placeholder="Enter your email"/>
                <br/>
                <textarea className="form-control" rows="7" placeholder="Leave a comment"></textarea>
                <br/>
                <input type="submit" value="Send Message" className="btn btn-primary"/>
            </div>
            <div className="col-md-4 ">
                <h4 className="text-center text-info">Connect With Us</h4>
                <br/>
                <a href="https://facebook.com">
                <img src="photos/facebook image.png" alt="" className="socialspictures"/>
                </a>
                <a href="https://instagram.com">
                <img src="photos/instagram.jpeg" alt="" className="socialspictures"/>
                </a>
                <a href="https://x.com">
                <img src="photos/x photo" alt="" className="socialspictures"/>
                </a>
        <video
      src="videos/secondvideo.mp4"
      autoPlay
      muted
      loop
      className="w-100 mt-4"
    ></video>
            </div>
        </section>
        <footer className="text-white text-center p-2 mt-2 bootom-footer">
                <h5>&copy; 2025.All rights reserved</h5>
        </footer>
    </div>
    );
    }
     
   
    export default Footer;