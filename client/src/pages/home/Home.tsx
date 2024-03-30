import './home.css'

function Home() {
  return (
    <div className='landing-page'>
    <div className='home'>
    <div className='home-side-left'>
    <img className='home-picture' src='../../../public/cuter-baby.jpg'></img>
    </div>
    <div className='home-side-right'>
        <h1>Tiny Heart</h1>
        <img className='logo' src='../../../public/tiny-heart-logo.png'></img>
        <h1>Health</h1>
        <a href="#about-us" className='about-us-btn'>About us</a>
    </div>
    </div>
    <div id='about-us'>
        <h1 className='about-us-title'>About us</h1>
        <div className='about-us-content'>
        <img className="about-us-photo" src='../../../public/pregnant-woman.jpg'></img>
        <p className='about-us-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus vulputate nisl. Sed tempus facilisis odio, ut rutrum lacus. Vestibulum iaculis lorem vel auctor sollicitudin. Aliquam erat volutpat. In rutrum iaculis nibh, et pellentesque orci imperdiet ut. Nulla mollis mi lorem, molestie pulvinar lectus tristique id. Sed hendrerit augue et viverra tincidunt. Aenean scelerisque luctus urna id vehicula. Vestibulum gravida consectetur nibh quis posuere. Nullam vitae fringilla dolor, et dictum leo. Integer tempus congue dapibus. Praesent sapien quam, malesuada in dapibus non, gravida vel sem. Nunc suscipit eros vel est iaculis, vel tempor ligula pretium.</p>
        </div>
    </div>
    </div>
  );
}

export default Home
