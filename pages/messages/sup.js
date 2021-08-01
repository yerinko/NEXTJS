import Error from "next/error";

const Sup = ({errorCode, message}) => {
    // if(errorCode) {
    //     <Error statusCode={errorCode} title={message}/>
    // }
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
};

export const getInitialProps = (context) => {
    try {
        return { props: { message: 'suppppppppppp'},
        }
    } catch(error) {
        return { props: {errorCode: 401, message:'broken'}}
    }
    return { props: { message: 'suppppppppp'},
            // notFount: object? false : true
        // redirect: {
        //     destination: "/",
        //     permanent: true
        // }
        }
}
export default Sup;