import React from 'react';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import ContactForm from '../ContactForm/ContactForm';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Education></Education>
            <Skills></Skills>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;