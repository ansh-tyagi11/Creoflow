import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='text-white w-[100vw]'>
        <div className='relative w-[80%] left-[10%] py-[1rem]'>
          <footer>
            <div className='border mt-5 mb-7 h-0'></div>
            <div className="flex justify-between flex-wrap">
              <div className="column pt-2.5">
                <h4 className='font-bold'>Support</h4>
                <ul>
                  <li className='p-2 pl-0 pb-0 hover:underline'><a href="/">Help centre</a></li>
                  <li className='p-2 pl-0 pb-0 hover:underline'><a href="/">FAQs</a></li>
                  <li className='p-2 pl-0 pb-0 hover:underline'><a href="/">Contact Us</a></li>
                </ul>
              </div>
              <div className="column pt-2.5">
                <h4 className='font-bold'>Community</h4>
                <ul>
                  <li className='p-2 pl-0 pb-0 hover:underline'><a href="#">Blog</a></li>
                  <li className='p-2 pl-0 pb-0 hover:underline'><a href="">X</a></li>
                  <li className='p-2 pl-0 pb-0 hover:underline'><a href="#">Instagram</a></li>
                </ul>
              </div>
              <div className="column pt-2.5">
                <h4 className='font-bold'>Legal</h4>
                <ul>
                  <li className='p-2 pl-0 pb-0 hover:underline'><a href="">Terms of Service</a></li>
                  <li className='p-2 pl-0 pb-0 hover:underline'><a href="#">Privacy Policy</a></li>
                  <li className='p-2 pl-0 pb-0 hover:underline'><a href="">Cookie Policy</a></li>
                </ul>
              </div>
              <div className="column pt-2.5">
                <h4 className='font-bold'>Creators</h4>
                <ul className='flex flex-col flex-wrap'>
                  <li className='p-2 pl-0 pb-0 hover:underline'><a href="#">Become a Creator</a></li>
                  <li className='p-2 pl-0 pb-0 hover:underline'><a href="">Creator Resources</a></li>
                  <li className='p-2 pl-0 pb-0 hover:underline'><a href="#">Success Stories</a></li>
                </ul>
              </div>
            </div >
            <div className="flex justify-center pt-10">
              <p>&copy; 2025 Creoflow.All Rights Reserved.</p>
            </div>
          </footer >
        </div>
      </div>
    </div >
  )
}

export default Footer
