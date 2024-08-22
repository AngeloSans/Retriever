import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const AnxietyAbout = () => {
    const isFirstLoad = true; 

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
                        A ansiedade é uma emoção caracterizada por sentimentos de tensão, preocupações e alterações
                        físicas, como aumento da pressão arterial.
                        Pessoas com transtornos de ansiedade geralmente têm pensamentos intrusivos ou preocupações
                        recorrentes.
                    </p>
                    <Image className="mx-auto w-1/2 mt-8" src="/ImagesRetriever/anxietyabout.jpg" alt="Anxiety"/>
                </section>
                <section className="mt-6 bg-white flex flex-row items-center space-x-4">
                    <p className="font-extrabold text-black">Angelo Santos</p>
                    <p className="text-black">Compartilhar</p>
                    <div className="flex items-center justify-center space-x-4 mt-2">
                        <div className="bg-purple-950 rounded-full p-2 flex items-center justify-center w-10 h-10">
                            <Image src="/ImagesRetriever/iconX.png" alt="Icon" className="w-full h-full object-contain"/>
                        </div>
                        <div className="bg-purple-950 rounded-full p-2 flex items-center justify-center w-10 h-10">
                            <Image src="/ImagesRetriever/iconFacebook.png" alt="Facebook Icon"
                                 className="w-full h-full object-contain"/>
                        </div>
                        <div className="bg-purple-950 rounded-full p-2 flex items-center justify-center w-10 h-10">
                            <Image src="/ImagesRetriever/iconLinkedin (2).png" alt="LinkedIn Icon"
                                 className="w-full h-full object-contain"/>
                        </div>
                    </div>
                </section>
                <section className="mt-6 bg-white flex flex-col items-center">
                    <p className="text-black text-center">
                        Developers today do more than just write and ship code—they’re expected to navigate a number of
                        tools, environments, and technologies, including the new frontier of generative artificial
                        intelligence (AI) coding tools. But the most important thing for developers isn’t story points
                        or the speed of deployments. It’s the developer experience, which determines how efficiently and
                        productively developers can exceed standards, enter a flow state, and drive impact.
                    </p>
                    <p className="text-black mt-4 text-center">
                        I say this not only as GitHub’s chief product officer, but as a long-time developer who has
                        worked across every part of the stack. Decades ago, when I earned my master’s in mechanical
                        engineering, I became one of the first technologists to apply AI in the lab. Back then, it would
                        take our models five days to process our larger datasets—which is striking considering the speed
                        of today’s AI models. I yearned for tools that would make me more efficient and shorten my time
                        to production. This is why I’m passionate about developer experience (DevEx) and have made it my
                        focus as GitHub’s chief product officer.
                    </p>
                    <p className="text-black mt-4 text-center">
                        Amid the rapid advancements in generative AI, we wanted to get a better understanding from
                        developers about how new tools—and current workflows—are impacting the overall developer
                        experience. As a starting point, we focused on some of the biggest components of the developer
                        experience: developer productivity, team collaboration, AI, and how developers think they can
                        best drive impact in enterprise environments.
                    </p>
                </section>

                <section className="w-full mt-6 bg-white flex flex-col">
                    <h2 className="mt-2 text-black font-bold text-3xl">Escrito por</h2>
                    <div className="black-stripe"></div>
                    <Image src="/ImagesRetriever/angeloPhoto.jpg" alt="Angelo Santos"
                         className="mt-4 h-20 w-20 rounded-full"/>
                    <h4 className="text-black font-bold">Angelo Santos</h4>
                    <a className="text-blue-700" href="https://github.com/Anjocaido13">@anjocaido13</a>
                    <p className="text-black">Olá meu nome é Gabriel Angelo, sou engenheiro de software desde 2022, e
                        adoro fazer novos projetos</p>
                </section>
                <div className=" mt-20 space-x-4 mb-4">
                    <h1 className="text-black text-lg font-semibold">Posts Relacionados</h1>
                </div>
                <div className="black-stripe"></div>
                <section className="w-full p-6" data-aos={isFirstLoad ? "fade-up" : ""}>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link href="/contentpage"
                              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
                            <Image
                                src="/ImagesRetriever/homemdascavernas.jpg"
                                alt="Ansiedade na pré-história"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-black text-md font-semibold">
                                    Ansiedade na pré-história
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    Foi a sensação de insegurança que criou o homem moderno. Entenda
                                    aqui as origens, a importância e os efeitos da ansiedade para
                                    nós.
                                </p>
                            </div>
                        </Link>
                        <Link href="/contentpage"
                              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105"
                              data-aos-delay="200">
                            <Image
                                src="/ImagesRetriever/anxietyciency.jpg"
                                alt="Como a ciência explica a ansiedade e o estresse"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-black text-md font-semibold">
                                    Como a ciência explica a ansiedade e o estresse
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    A ansiedade e o estresse podem ser causados por uma série de
                                    fatores, entre eles a vida agitada, pressões sociais, medo,
                                    estilo de vida, etc.
                                </p>
                            </div>
                        </Link>
                        <Link href="/contentpage"
                              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105"
                              data-aos-delay="400">
                            <Image
                                src="/ImagesRetriever/anxiouwoman.jpg"
                                alt="Transtornos de ansiedade em mulheres"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-black text-md font-semibold">
                                    Transtornos de ansiedade em mulheres
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    Mulheres apresentam um risco significativamente maior comparado
                                    com os homens para o desenvolvimento de transtornos de
                                    ansiedade ao longo da vida.
                                </p>
                            </div>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default AnxietyAbout;
