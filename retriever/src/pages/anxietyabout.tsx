import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const AnxietyAbout = () => {
    return (
        <>
            <Head>
                <title>O que é Ansiedade</title>
            </Head>
            <Nav />
            <main className="bg-white flex flex-col min-h-screen items-center p-4">
                <header className="mt-40 text-black text-center">
                    <h2 className="text-4xl font-bold">O que é a ansiedade</h2>
                </header>
                <section className="mt-6 bg-white w-full flex flex-col items-center">
                    <p className="text-black text-center max-w-2xl">
                        A ansiedade é uma emoção caracterizada por sentimentos de tensão, preocupações e alterações físicas, como aumento da pressão arterial.
                        Pessoas com transtornos de ansiedade geralmente têm pensamentos intrusivos ou preocupações recorrentes.
                    </p>
                    <img className="mx-auto w-1/2 mt-8" src="/ImagesRetriever/anxietyabout.jpg" alt="Anxiety" />
                </section>
                <section className="mt-6 bg-white  flex flex-row items-center">
                    <p className="font-extrabold text-black">Angelo Santos</p>
                    <p className="text-black">Compartilhar</p>
                    <div className="flex items-center justify-center space-x-4 mt-2">
                        <div className="bg-purple-950 rounded-full p-2 flex items-center justify-center w-10 h-10">
                            <img src="/ImagesRetriever/iconX.png" alt="Icon" className="w-full h-full object-contain"/>
                        </div>
                        <div className="bg-purple-950 rounded-full p-2 flex items-center justify-center w-10 h-10">
                            <img src="/ImagesRetriever/iconFacebook.png" alt="Facebook Icon" className="w-full h-full object-contain"/>
                        </div>
                        <div className="bg-purple-950 rounded-full p-2 flex items-center justify-center w-10 h-10">
                            <img src="/ImagesRetriever/iconLinkedin%20(2).png" alt="LinkedIn Icon" className="w-full h-full object-contain"/>
                        </div>
                    </div>
                </section>
                <section className="mt-6 bg-white  flex flex-col items-center">
                    <p className="text-black text-center">Developers today do more than just write and ship code—they’re expected to navigate a number of tools, environments, and technologies, including the new frontier of generative artificial intelligence (AI) coding tools. But the most important thing for developers isn’t story points or the speed of deployments. It’s the developer experience, which determines how efficiently and productively developers can exceed standards, enter a flow state, and drive impact.</p>
                    <p className="text-black mt-4 text-center">I say this not only as GitHub’s chief product officer, but as a long-time developer who has worked across every part of the stack. Decades ago, when I earned my master’s in mechanical engineering, I became one of the first technologists to apply AI in the lab. Back then, it would take our models five days to process our larger datasets—which is striking considering the speed of today’s AI models. I yearned for tools that would make me more efficient and shorten my time to production. This is why I’m passionate about developer experience (DevEx) and have made it my focus as GitHub’s chief product officer.</p>
                    <p className="text-black mt-4 text-center">Amid the rapid advancements in generative AI, we wanted to get a better understanding from developers about how new tools—and current workflows—are impacting the overall developer experience. As a starting point, we focused on some of the biggest components of the developer experience: developer productivity, team collaboration, AI, and how developers think they can best drive impact in enterprise environments.</p>
                </section>
                <section className="w-full mt-6 bg-white  flex flex-col">
                    <h2 className= "mt-2 text-black font-bold text-3xl" >Escrito por</h2>
                    <div className="black-stripe"></div>
                    <img src="">
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default AnxietyAbout;
