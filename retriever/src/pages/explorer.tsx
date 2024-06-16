import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../app/globals.css';

export default function explorer(){
    return(
        <main className="bg-white flex min-h-screen flex-col items-center justify-between p-0">
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
            </Head>
            <Nav></Nav>
            <Footer></Footer>

        </main>

    )
}