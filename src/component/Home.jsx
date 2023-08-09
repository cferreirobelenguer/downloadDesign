import React from 'react';
import '../component/Home.css';

const handleClick = (path) => {
    window.location.href= path;
}

const Home = () => {
    return (
        <div className="home-container">
            <section className="home-container-header">
                <p className="home-container-header-title">Download</p>
                <p className="home-container-header-title">Secure your open source apps. Patch the full stack, from kernel to library and applications, for CVE compliance.</p>
            </section>
            <section className="home-container-buttons">
                <div className="home-container-buttonsContainer">
                    <div className="home-container-buttons-section">
                        <p className="home-container-buttons-section-titleButton">Ubuntu Desktop</p>
                        <p className="home-container-buttons-section-subtitleButton">Download Ubuntu desktop and replace your current operating system or run alongside it.</p>
                    </div>
                    <button className="home-container-buttons-section-button" onClick={() => handleClick('https://ubuntu.com/download/desktop/thank-you?version=22.04.2&architecture=amd64')} >Download v 20.04</button>
                    <a href="https://ubuntu.com/download/desktop/thank-you?version=22.04.2&architecture=amd64" className="link-color">Download earlier version</a>
                </div>
                <div className="home-container-buttonsContainer">
                    <div className="home-container-buttons-section">
                        <p className="home-container-buttons-section-titleButton">Ubuntu Server</p>
                        <p className="home-container-buttons-section-subtitleButton">Download Ubuntu desktop and replace your current operating system or run alongside it.</p>
                    </div>
                    <button className="home-container-buttons-section-button" onClick={() => handleClick('https://ubuntu.com/download/server')}>Get Ubuntu Server</button>
                    <div className="home-container-buttons-types link-color">
                        <a href="https://ubuntu.com/download/server#downloads">Mac and Windows</a>
                        <a href="https://ubuntu.com/download/server/arm">ARM</a>
                        <a href="https://ubuntu.com/download/server/s390x">IBM</a>
                    </div>
                </div>
            </section>
            
        </div>
    )
}
export default Home;
