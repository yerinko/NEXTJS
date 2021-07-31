import React,  { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        throw new Error('you really broked it')
    })
    return (
        <div>
            <h1>Yo its me</h1>
        </div>
    );
};

export const getStaticProps = (context) => {
    return {
        props: {},
        revalidate: 10
    }
}

export default About;