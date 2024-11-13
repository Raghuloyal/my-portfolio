import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
// import user_1 from '../../assets/user-1.png'
// import user_2 from '../../assets/user-2.png'
// import user_3 from '../../assets/user-3.png'
// import user_4 from '../../assets/user-4.png'


const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

const slideForward = ()=>{
  if(tx > -50){
    tx -= 25;
  }
  slider.current.style.transform =`translateX(${tx}%)`
}
const slideBackward = ()=>{
  if(tx < 0){
    tx += 25;
  }
  slider.current.style.transform =`translateX(${tx}%)`

}
  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                {/* <img src={user_1} alt="" /> */}
                <div>
                  <h3>Services </h3>
                  {/* <span>Editor, USA</span> */}
                </div>
              </div>
              <p>
              Iam specialize in software development, creating responsive websites, efficient ERP systems, and secure e-commerce platforms. We design intuitive mobile applications for iOS and Android, and provide captivating graphical design services to elevate your brand. Our Solutions and services will be innovative and effective solutions.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                {/* <img src={user_2} alt="" /> */}
                <div>
                  <h3>ERP </h3>
                  {/* <span>Editor, USA</span> */}
                </div>
              </div>
              <p>
              I offer comprehensive ERP services, including consulting, implementation, support, and customization, ensuring your ERP system is tailored to your unique business needs. My approach streamlines operations and enhances efficiency, providing expert guidance and innovative solutions to optimize your enterprise resources.              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                {/* <img src={user_3} alt="" /> */}
                <div>
                  <h3>Cloud </h3>
                  {/* <span>Editor, USA</span> */}
                </div>
              </div>
              <p>
              I offer comprehensive cloud services, including cloud infrastructure, backup and recovery, and managed cloud solutions. I ensure robust, scalable, and secure cloud environments, tailored to meet your business needs. Partner with me to leverage the full potential of the cloud for your enterprise.              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                {/* <img src={user_4} alt="" /> */}
                <div>
                  <h3>Websites </h3>
                  {/* <span>Editor, USA</span> */}
                </div>
              </div>
              <p>
              I provide end-to-end website solutions, including design, development, and maintenance to ensure a seamless user experience. My approach emphasizes responsive design, fast load times, and intuitive navigation to boost engagement and meet business goals. Partner with me to create a website that reflects your brand and drives results.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                {/* <img src={user_4} alt="" /> */}
                <div>
                  <h3>Mobile Applicaiton </h3>
                  {/* <span>Editor, USA</span> */}
                </div>
              </div>
              <p>
              I specialize in mobile application development, crafting responsive, user-friendly apps that provide seamless experiences across devices. From concept to deployment, my services cover design, development, and maintenance, ensuring each app meets your business needs and enhances user engagement. Let's build a mobile app that stands out and delivers real value.              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
