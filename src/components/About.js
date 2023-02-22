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
        <div id='about' className='About'>
            <div className='about-me'>
                <div className='about-me-text'>
                    <h1 className='abt-me'>ABOUT ME</h1>
                    <p className='my-info'>
                    Hello, I am a <span id='wk-info'>full stack developer</span> who is passionate about creating dynamic 
                    and efficient web applications. I have experience developing and deploying 
                    end-to-end solutions, from the <span id='wk-info'>front-end</span> user interface to the <span id='wk-info'>back-end </span>
                    server-side logic.
                    <p>
                    I stay up-to-date with the latest advancements in the 
                    field and am always eager to take on new challenges to enhance my abilities 
                    and bring innovative ideas to fruition. I'm open to <span id='wk-info'>Job</span>  opportunities where I can contribute, learn and grow.
                    </p> 
                    Please don't hesitate to connect or 
                    follow me on <a id='lnkd-link' href='https://www.linkedin.com/in/kartikpatil98/' target="_blank" rel='noopener noreferrer'>LinkedIn</a> if you're looking for a talented and motivated software 
                    developer.
                    </p>
                </div>
            </div>
            <div className='skills'>
                <div className='skills-text'>
                    <h1 >SKILLS</h1>
                    <div className='skill-list'>
                        <img src={html} alt='html' className='skill-img'/>
                        <img src={css} alt='css' className='skill-img'/>
                        <img src={javascript} alt='javascript' className='skill-img'/>
                        <img src={react} alt='react' className='skill-img'/>
                        <img src={nodejs} alt='nodejs' className='skill-img'/>
                        <img src={sql} alt='sql' className='skill-img'/>
                        <img src={git} alt='git' className='skill-img'/>
                        <img src={github} alt='github' className='skill-img'/>
                        <img src={c} alt='c' className='skill-img'/>
                        <img src={java} alt='java' className='skill-img'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;