import './Landingpage.css'
import ProfilePicture from './assets/p3.png'
import Linkedin from './assets/linkedin.png'
import Github from './assets/github.png'
import Phone from './assets/phone.png'
import Message from './assets/message.png'
import Location from './assets/location.png'
import Facebook from './assets/facebook.png'

function Landing(){
    return(
         <section>
             <div class="detail">

<h2 className='Hello'>Hello, I am</h2>
<h1 className='myname'>Sushant Kunwar Chhetri</h1>
<p className='skill'>UI UX Designer</p>

<div className='info'>
<ul>
  <li className='info-list'>
    <img className='info-icon' src={Phone} alt='Phone No'></img>
    <a href=''> +977 9847299660</a>
  </li>
  <li className='info-list'>
    <img className='info-icon' src={Message} alt='Phone No'></img>
    <a href=''> sushantkch@gmail.com</a>
  </li>
  <li className='info-list'>
    <img className='info-icon' src={Location} alt='Phone No'></img>
    <a href=''> Bardaghat - 4, Nawalparasi</a>
  </li>
</ul>
</div>
<div className="image">
<img src= {ProfilePicture} alt='photo' class='shape'></img>
</div>
<div className='social'>
<img src= {Linkedin} alt="My LinkedIn profile" className="icon"
    onclick="location.href='https://www.linkedin.com/in/sushant-kunwar-8951052a6/'" />
  <img src= {Github} alt="My Github profile" className="icon"
    onclick="location.href='https://github.com/SushantJungChhetri?tab=repositories'" />
    <img src= {Facebook} alt="My Facebook profile" className="icon"
    onclick="location.href='https://www.facebook.com/Sushant.kunwar.57/'" />
</div>
</div>          
</section>




    );
}

export default Landing