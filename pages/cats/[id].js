const CatPage = () => {
    return <h1> I am a Cat! </h1>
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