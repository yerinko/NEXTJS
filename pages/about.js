import React,  { useEffect } from 'react';
import { useRouter } from 'next/router';

const About = () => {
    useEffect(() => {
        throw new Error('you really broked it')
    })
    return (
        <>
            <h1>Yo its me</h1>
        </>
    );
};

export const getStaticProps = (context) => {
    return { props: {},
    revalidate: 10
    }
}

export default About;