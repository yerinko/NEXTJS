import { useEffect } from 'react';
import { useRouter } from "next/router";

const CatPage = () => {
    const router = useRouter()

    return (
        <>
        <button type="button" onClick={() => router.push('/messages/sup')}>
            Go to Sup
        </button>
        <h1> I am a Cat! </h1>
        </>
    )
    return
}
export const getStaticPaths = () => {
    return {
        paths: [
            { params: {id: '1' }},
            {params: { id: '2'}}
            ],
        fallback: false
    }
}
export const getStaticProps = (context) => {
    console.log(context)
    return { props: {} }
}

export default CatPage