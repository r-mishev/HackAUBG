import './home.css'

function Home() {
  return (
    <div className='landing-page'>
    <div className='home'>
    <div className='home-side-left'>
        <div className='home-shadow'></div>
    <img className='home-picture' src='../../../public/home-page.jpg'></img>
    </div>
    <div className='home-side-right'>
        <h1 className='home-main-title'>Helping doctors make the right decisions on fetal health</h1>
        <p className='home-explanation'>Tiny Heart Health uses a machine learnign algorithm that helps doctors judge the potential risk of misscariage better.</p>
        <a className='learn-more' href='#about-us'>Learn more</a>
        <a className='free-trial'>Free 3 month trial</a> 
        {/* LOGIN OR FREE TRIAL START */}
    </div>
    </div>
    <div id='about-us'>
        <h1 className='about-us-title'>About us</h1>
        <img className='hearts' src='../../../public/hearts.png'></img>
        <div className='about-us-content'>
        <img className="about-us-photo" src='../../../public/ekg.jpg'></img>
        <p className='about-us-text'>Tiny Heart Health is aiming to optimize the assessment of fetal health made by doctors. We use medical data and analyze it via a trained machine learning model which tries to make an accurate prediction based on previous data to determine the probability of misscariage. The data needed for the analysis is: baseline value, accelerations, fetal movement, uterine contractions, light decelerations, severe decelerations, prolongued decelerations, abnormal short term variability, mean value of short term variability, percentage of time with abnormal long term variability, mean value of long term variability, histogram width, histogram min, histogram max, histogram number of peaks, histogram number of zeroes, histogram mode, histogram mean, histogram median, histogram variance, histogram tendency, fetal health. The cleints are responsible to validate any new data before it is sent to the system in order to keep the databse from having too many invalid entries. </p>
        </div>
    </div>
    <div id='solutions'>
        <h1 className='solutions-title'>Solutions</h1>
        <div className='solutions-content'>
        <img className='solutions-photo' src='../../../public/pregnant-woman.jpg'></img>
        <p className='solutions-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus vulputate nisl. Sed tempus facilisis odio, ut rutrum lacus. Vestibulum iaculis lorem vel auctor sollicitudin. Aliquam erat volutpat. In rutrum iaculis nibh, et pellentesque orci imperdiet ut. Nulla mollis mi lorem, molestie pulvinar lectus tristique id. Sed hendrerit augue et viverra tincidunt. Aenean scelerisque luctus urna id vehicula. Vestibulum gravida consectetur nibh quis posuere. Nullam vitae fringilla dolor, et dictum leo. Integer tempus congue dapibus. Praesent sapien quam, malesuada in dapibus non, gravida vel sem. Nunc suscipit eros vel est iaculis, vel tempor ligula pretium.</p>
    </div>
    </div>
    </div>
  );
}

export default Home
