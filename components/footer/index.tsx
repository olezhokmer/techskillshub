import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> TechSkillsHub</h6>
            <p>Empowering Aspiring Techies of All Ages – Because Learning Has No Age Limit!</p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Online learning</li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Certifications</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Payment options</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
              <li>Information</li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Find a course</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Become a student</a></li>
              <li><a href="#">Site feedback</a></li>
            </ul>
            <ul>
              <li>Contact</li>
              <li><a href="#">info@techskillshub.com</a></li>
              <li><a href="#">Hotline: +1-212-456-7890</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>© 2023 TechSkillsHub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer