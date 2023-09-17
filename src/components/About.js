import './About.css'; 
import linkedin from '../images/linkedin.png';

const About = () => {
    return (

    <div id='about' className='about-container'>
        <div className='about-text'>
            <h1 id='abtme'>ABOUT ME</h1>
            <p>
            Hello, I am a <span id='wk-info'>full stack developer</span> who is passionate about creating dynamic 
            and efficient web applications.
            </p>
            <p>
            I love translating complex problems into intuitive products that delight users. 
            As a full-stack developer, I enjoy contributing across the entire <span id='wk-info'>development cycle</span> - from 
            planning to coding <span id='wk-info'>backends</span> and <span id='wk-info'>APIs.</span>
            </p>
            <p>
            I stay up-to-date with the latest advancements in the 
            field and am always eager to take on new challenges to enhance my abilities.
            </p>
            <p>
            I’m also <span id='wk-info'>open to job opportunities</span> where I can contribute, learn, and grow. 
            </p>
            <h3>Let's connect!</h3>
            <div className='connect'>
                <a href='https://www.linkedin.com/in/kartikpatil98/' target=' '>
                    <img src={linkedin} alt='linkedin'/>
                </a>
            </div>
        </div>
        <div className='skills'>
            <div>
                <h1 id='abt-skills'>SKILLS</h1>
            </div>
            <div className='skills-text'>
                <ul>HTML</ul>
                <ul>CSS</ul>
                <ul>javascript</ul>
                <ul>ReactJS</ul>
                <ul>NodeJS</ul>
                <ul>Express</ul>
                <ul>Redux</ul>
                <ul>SQL</ul>
                <ul>REST</ul>
            </div>
        </div>
    </div>
    );
}

export default About;