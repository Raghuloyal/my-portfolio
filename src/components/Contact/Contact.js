import React from 'react'
import './Contact.css'
// import msg_icon from '../../assets/msg-icon.png'
// import mail_icon from '../../assets/mail-icon.png'
// import phone_icon from '../../assets/phone-icon.png'
// import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6ef9d48e-b945-4dd3-93b3-57cefe4fdba2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully",data);
      setResult(data.message)
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        {/* <h3>Send us msg <img src={msg_icon} alt="" /></h3>
        <p>Check msg</p>
        <ul>
            <li><img src={mail_icon} alt="" />Abc@gmail.com </li>
            <li><img src={phone_icon} alt="" />+91 9876543210</li>
            <li><img src={location_icon} alt="" />1/2<br/>street<br/>City</li>
        </ul> */}
      </div>
      <div className="contact-col">
        <h2>Send Mail</h2><br/>
        <form onSubmit={onSubmit} >
            <label>Your name</label>
            <input type="text" name='name' placeholder='Your Name' required />
            <label >Your Email</label>
            <input type="text" name='phone' placeholder='Your Email' required />
            <label >Your messager</label>
            <textarea name="message" id="message"  rows="6" required></textarea>
            <button className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>

        </form>
        <span>{result}</span>
      </div>
      <div className="contact-col">
        {/* <h3>Send us msg <img src={msg_icon} alt="" /></h3>
        <p>Check msg</p>
        <ul>
            <li><img src={mail_icon} alt="" />Abc@gmail.com </li>
            <li><img src={phone_icon} alt="" />+91 9876543210</li>
            <li><img src={location_icon} alt="" />1/2<br/>street<br/>City</li>
        </ul> */}
      </div>

    </div>
  )
}

export default Contact
