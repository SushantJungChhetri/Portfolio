import "./index.css"
import picture from "./assets/Picture.png"

function About(){
    return (
        <section id="About">
             <div className="about-picture">
          <img className="Gamer" src={picture} alt="Gamer"></img>
          </div>  
            <div className="about-container">
            <h2 className="about-h2">About Me</h2>
            <p className="about-p">Hello there, I am a graduate student of computer science from Nepal. I am passionate about software development and I am a hard-working and disciplined individual always seeking to learn new things. In my academic and professional career, I have been consistently praised as diligent by my professors and hard-working by my colleagues. While working on any kind of projects, I apply proven teamwork, research and critical thinking skills.
            </p>
            <a class="btn-1" href="./Sushant Kunwar CV.pdf">Download CV</a>
            
          </div>
         
        </section>
    );
}

export default About;