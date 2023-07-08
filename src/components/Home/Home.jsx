import React from 'react';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import ContactForm from '../ContactForm/ContactForm';
import Projects from '../Projects/Projects';



const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;