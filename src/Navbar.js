import reactLogo from './images/reactjs-icon.svg'

export default function Navbar() {
  return (
    <nav>
      <div className='nav--logo'> 
        <img className='nav--logo_img' src={reactLogo} alt='React logo'/>
        <h3 className='nav--logo_header'>React facts</h3>
      </div> 
     
      <h4 className='nav--title'>React Course - Project 1</h4>
    </nav>
    
  )
}