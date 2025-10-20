import React from 'react'

const Footer = () => {
  return (
    <div className=''>
      <footer>
        <div className="footer-columns">
          <div className="column">
            <h4 className='font-bold'>Support</h4>
            <ul>
              <li><a href="/">Help centre</a></li>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>
          <div className="column">
            <h4>Community</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="">X</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
          <div className="column">
            <h4>Legal</h4>
            <ul>
              <li><a href="">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="column">
            <h4>Creators</h4>
            <ul>
              <li><a href="#">Become a Creator</a></li>
              <li><a href="">Creator Resources</a></li>
              <li><a href="#">Success Stories</a></li>
            </ul>
          </div>
        </div >
        <div className="footer-bottom">
          <p>&copy; 2025 Creoflow</p>
        </div>
      </footer >
    </div >
  )
}

export default Footer
