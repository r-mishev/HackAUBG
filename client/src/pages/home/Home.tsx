import './home.css'

function Home() {
  return (
    <>
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
    </div>
    </div>
    <div id='about-us'>
        <h1 className='about-us-title'>About us</h1>
        <div className='about-us-content'>
        <img className="about-us-photo" src='../../../public/ultra-sound.jpg'></img>
        <p className='about-us-text'>Tiny Heart Health is aiming to optimize the assessment of fetal health made by doctors. We use medical data and analyze it via a trained machine learning model which tries to make an accurate prediction based on previous data to determine the probability of misscariage. The clients are responsible to validate any new data before it is sent to the system in order to keep the databse from having too many invalid entries. </p>
        </div>
        <p className='data-list'>Full list of data points: baseline value, accelerations, fetal movement, uterine contractions, light decelerations, severe decelerations, prolongued decelerations, abnormal short term variability, mean value of short term variability, percentage of time with abnormal long term variability, mean value of long term variability, histogram width, histogram min, histogram max, histogram number of peaks, histogram number of zeroes, histogram mode, histogram mean, histogram median, histogram variance, histogram tendency, fetal health</p>
    </div>
    </div>
    </>
  );
}

export default Home
