import './About.css';

const About = () => {
    return (
        <div id='about' className='About'>
            <div className='about-me'>
                <div className='about-me-text'>
                    <h1 className='abt-me'>ABOUT ME</h1>
                    <p className='my-info'>
                    Hi, I'm a <span id='wk-info'>full stack developer</span> with a passion for building dynamic and efficient 
                    web applications. My expertise lies in developing and deploying end-to-end solutions, 
                    from the front-end user interface to the back-end server-side logic. I have hands-on 
                    experience in multiple programming languages and web technologies, including <span id='wk-info'>HTML, 
                    CSS, JavaScript, React, Node.js.</span> 
                    </p>
                    <p>
                    I strive to keep up with the latest developments in the field, and I am always 
                    looking for new challenges to enhance my skills and bring innovative ideas to life.
                    If you're looking for a <span>talented</span> and <span>motivated</span> software developer, 
                    Feel free to Connect or Follow me on my <a id='lnkd-link' href='https://www.linkedin.com/in/kartikpatil98/' target="_blank">Linkedin</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;