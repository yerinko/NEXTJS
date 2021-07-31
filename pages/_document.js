import Document, {Html, Head, Main, NextScript} from "next/document";
import dotenv from 'dotenv-safe'

dotenv.config()

class MyDocument extends Document {
    render() {
        return (
            <Html Lang="en">
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;