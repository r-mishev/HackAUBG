import './nav.css';

function Nav(){
    return (
        <div className='navigation'>
            <a href='/'><img className='nav-logo' src='../../../public/tiny-heart-logo.png'></img></a>
            <div className='nav-side'>
                <a>Solutions</a> | 
                <a> Analyze</a>
            </div>
        </div>
    )
}

export default Nav;