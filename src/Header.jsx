import './Header.css'

function Header (){
    return(
        <header className='navbar'>
            
            <nav >
                <ul className='Navbar-list'>
                    <li className='Home'><a href='#'>Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href=''>Services</a></li>
                    <li><a href='#'>Experience</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header