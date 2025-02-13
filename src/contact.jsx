import Phone from './assets/Phone.png'
import Message from './assets/Message.png'
import Location from './assets/Location.png'
import './index.css'

function Contact(){
    return(
<section id='Contact'>
<div className="Contact-container">
    <h2 className="dial">Contact Me</h2>
    <div className="dial-container">
        <div className="Contact-detail">
            <div className='contact-card'>
            <img className="Icon" src={Phone}></img>
            <p className="Text">+977 9847299660</p>
        </div>
        </div>
        <div className="Contact-detail">
            <div className='contact-card'>
            <img className="Icon" src={Message}></img>
            <p className="Text">sushantkch@gmail.com</p>
        </div>
        </div>
        <div className="Contact-detail">
            <div className='contact-card'>
            <img className="Icon" src={Location}></img>
            <p className="Text">Bardaghat-4, Nawalparasi</p>
        </div>
        </div>
    </div>
</div>
<form className='contact-index'>
    <div className='column-container-1'>
    <input  className= 'index-text' type="text" name="name" placeholder="Your Name" />
    <input className= 'index-text' type="email" name="email" placeholder="Your Email" />
    <input className= 'index-text' type='phone' name='number' placeholder='Phone Number'/>
    </div>
    <div className='column-container-2'>
    <textarea  className='messages' name="message" placeholder="Your Message" />
    </div>
    
</form>
<button className='index-button' type="submit">Send</button>
</section>
    );
}

export default Contact;