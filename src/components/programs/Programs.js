import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.jpg'
import program_4 from '../../assets/program-4.jpg'
// import program_icon_1 from '../../assets/program-icon-1.png'
// import program_icon_2 from '../../assets/program-icon-2.png'
// import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            {/* <img src={program_icon_1} alt="" /> */}
            <p><h2>Software Development</h2></p><br/>
            <p>Websites</p>
            <p>ERP</p>
            <p>Ecommerce</p>
            <p>Mobile Applications</p>
            <p>Graphical Designing</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            {/* <img src={program_icon_2} alt="" /> */}
            <p><h2>ERP</h2></p><br/>
            <p>Consulting</p>
            <p>Implementation</p>
            <p>Support</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            {/* <img src={program_icon_3} alt="" /> */}
            <p><h2>Cloud</h2></p><br/>
            <p>Cloud Infrastructure</p>
            <p>Cloud Backup and Recovery</p>
            <p>Managed Cloud Services</p>
        </div>
      </div>
      <div className="program">
        <img src={program_4} alt="" />
        <div className="caption">
            {/* <img src={program_icon_3} alt="" /> */}
            <p><h2>Education</h2></p><br/>
            <p>Internship Programs</p>
            <p>Placement Training</p>
            <p>Training and Development Sessions</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
