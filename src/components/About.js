import './About.css'; 
import html from  '../images/html.png';
import c from  '../images/c.png';
import css from  '../images/css.png';
import git from  '../images/git.png';
import github from  '../images/github.png';
import java from  '../images/java.png';
import javascript from  '../images/js.png';
import nodejs from  '../images/nodejs.png';
import react from  '../images/react.png';
import sql from  '../images/sql.png';


const About = () => {
    return (

    <div className='about-container'>
        <div className='about-text'>
            <h1 id='abtme'>ABOUT ME</h1>
            <p>
            Hello, I am a <span id='wk-info'>full stack developer</span> who is passionate about creating dynamic 
            and efficient web applications. I'm a motivated full-stack developer with a passion for crafting seamless digital experiences.
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
            <div>
                <a id='lnkd-link' href='https://www.linkedin.com/in/kartikpatil98/' target="_blank" rel='noopener noreferrer'>LinkedIn</a>
            </div>
        </div>
        <div className='skills'>
            <div className='skills-text'>
                <h1>SKILLS</h1>
            </div>
        </div>
    </div>
    );
}

export default About;