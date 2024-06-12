import Head from 'next/head';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main className="bg-white flex min-h-screen flex-col items-center justify-between p-24">
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet"/>
            </Head>
            <header>
                <div className="mt-6 lg:mt-0 lg:ml-6">
                    <img src="ImagesRetriever/WomanSad.png" alt="WomanSadCover" style={{width: '100%', height: 'auto'}}
                         className=" w-full sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover"/>
                </div>

            </header>

            <Footer/>
        </main>
    );
}
