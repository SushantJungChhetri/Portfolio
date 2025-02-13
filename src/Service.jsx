import './Service.css'
import UI from './assets/UI DESIGN Icon.png'
import DataEntry from './assets/DataEntry.png'
import Web from './assets/Web logo.png'

function Service(){

    return(
      <section id="Service">
      <h2 className='Serve'>Services</h2>
      <div className="Card-container">
      <div className="Card">
        <img className='Card-image' src= {UI} alt='UI UX DESIGN'></img>
        <h2 className='card-h2'>UI UX Design</h2>
        <p className='card-text'>I have been workking in this field and make some project of this field which is
          located in my CV. And make the wireframe, protoytpe, and UI design for the project
        </p>

      </div>

      <div className="Card">
        <img className='Card-image' src= {DataEntry} alt='DataEntry'></img>
        <h2 className='card-h2'>Data Entry</h2>
        <p className='card-text'> I have organize the files and data of the previous company safe and secure. And Accurately input, update, and maintain data in company systems or databases.
        </p>

      </div>

      <div className="Card">
        <img className='Card-image' src= {Web} alt='UI UX DESIGN'></img>
        <h2 className='card-h2'>Web Development</h2>
        <p className='card-text'>I have been workking in this field and make some project of this field which is
          located in my CV. And make the wireframe, protoytpe, and UI design for the project. 
        </p>

      </div>
      </div>
        
        </section>
    );
}

export default Service