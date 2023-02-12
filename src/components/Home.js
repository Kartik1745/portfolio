import './Home.css'
import { useEffect, useState } from 'react';

const Home = () => {

    const [fullmatrixText, setfullMatrixText] = useState("");
    const [showfFullStackDeveloper, setfShowFullStackDeveloper] = useState(false);

    useEffect(() => {
        const randomString = () => {
        let result = "";
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = 4;
        for (let i = 0; i < charactersLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
        };

        const intervalId = setInterval(() => {
            setfullMatrixText(randomString());
        }, 50);

        setTimeout(() => {
        clearInterval(intervalId);
        setfShowFullStackDeveloper(true);
        }, 800);
    }, []);

    const [stackmatrixText, setstackMatrixText] = useState("");
    const [showsFullStackDeveloper, setsShowFullStackDeveloper] = useState(false);

    useEffect(() => {
        const randomString = () => {
        let result = "";
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = 5;
        for (let i = 0; i < charactersLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
        };

        const intervalId = setInterval(() => {
            setstackMatrixText(randomString());
        }, 50);

        setTimeout(() => {
        clearInterval(intervalId);
        setsShowFullStackDeveloper(true);
        }, 1200);
    }, []);

    const [devmatrixText, setdevMatrixText] = useState("");
    const [showdFullStackDeveloper, setdShowFullStackDeveloper] = useState(false);

    useEffect(() => {
        const randomString = () => {
        let result = "";
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = 9;
        for (let i = 0; i < charactersLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
        };

        const intervalId = setInterval(() => {
            setdevMatrixText(randomString());
        }, 50);

        setTimeout(() => {
        clearInterval(intervalId);
        setdShowFullStackDeveloper(true);
        }, 1600);
    }, []);

    return (
        <div id='home' className='Home'>
            <h1 className='home-title'>HEY, I'M KARTIK PATIL</h1>
            <div className='home-me'>
                <p className='home-me-text'>
                I am a <span class="matrix-text">
        {showfFullStackDeveloper ? "full" : fullmatrixText}</span> <span class="matrix-text">
        {showsFullStackDeveloper ? "Stack" : stackmatrixText}</span> <span class="matrix-text">
        {showdFullStackDeveloper ? "developer" : devmatrixText}</span> with expertise in creating visually appealing and
                efficient web applications with a strong focus on user experience. 
                </p>
            </div>
        </div>
    );
}

export default Home;