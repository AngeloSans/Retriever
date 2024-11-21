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
                    <Image className="mx-auto w-1/2 mt-8" height={500} width={500} src="/ImagesRetriever/anxietyabout.jpg" alt="Anxiety"/>
                </section>
                <section className="mt-6 bg-white flex flex-row items-center space-x-4">
                    <p className="font-extrabold text-black">Angelo Santos</p>
                    
                </section>
                <section className="mt-6 bg-white flex flex-col items-center">
                    <p className="text-black mr-4 ml-2">
                    A ansiedade é uma emoção complexa e multifacetada que todos experimentamos em algum momento de nossas vidas. Ela se manifesta como uma resposta natural do corpo a situações de estresse ou perigo, ajudando a preparar-nos para enfrentar desafios. No entanto, quando a ansiedade se torna intensa, persistente e interfere nas atividades diárias, pode ser classificada como um transtorno de ansiedade.

O Que é Ansiedade?
A ansiedade é uma resposta emocional que envolve sentimentos de preocupação, nervosismo e medo. Esse estado pode ser desencadeado por situações específicas, como exames, entrevistas de emprego ou eventos sociais, mas também pode surgir sem uma causa aparente. O corpo reage à ansiedade ativando o sistema nervoso simpático, o que resulta em sintomas físicos como aceleração do coração, sudorese, tensão muscular e sensação de falta de ar.

Tipos de Transtornos de Ansiedade
Existem vários tipos de transtornos de ansiedade, cada um com características específicas:

Transtorno de Ansiedade Generalizada (TAG): Caracteriza-se por uma preocupação excessiva e incontrolável sobre diversas questões, como saúde, trabalho, família e questões financeiras. As pessoas com TAG muitas vezes se sentem ansiosas na maioria dos dias, mesmo que não haja motivos evidentes para tal preocupação.

Transtorno de Pânico: Envolve episódios súbitos e intensos de medo, conhecidos como ataques de pânico. Esses episódios podem incluir sintomas físicos como palpitações, sudorese, tremores e sensação de desmaio. As pessoas que sofrem desse transtorno podem desenvolver o medo de ter novos ataques, levando a uma evitação de situações que possam desencadeá-los.

Fobias: Refere-se a medos intensos e irracionais de objetos ou situações específicas, como altura, aranhas ou voar. Esses medos são desproporcionais em relação ao perigo real que a situação representa e podem levar a comportamentos de evitação.

Transtorno de Ansiedade Social: Também conhecido como fobia social, é caracterizado pelo medo intenso de ser julgado ou envergonhado em situações sociais. As pessoas com esse transtorno podem evitar interações sociais e se sentir extremamente ansiosas antes de eventos sociais.

Transtorno Obsessivo-Compulsivo (TOC): Envolve pensamentos intrusivos e recorrentes (obsessões) que causam ansiedade, levando a comportamentos repetitivos (compulsões) que a pessoa sente que precisa realizar para aliviar essa ansiedade.

Sintomas da Ansiedade
Os sintomas da ansiedade podem variar de pessoa para pessoa, mas geralmente incluem:

Sintomas Emocionais: Preocupação excessiva, irritabilidade, dificuldade de concentração e sensação de que algo ruim está prestes a acontecer.
Sintomas Físicos: Taquicardia, sudorese, tremores, tensão muscular, náuseas e problemas de sono.
Sintomas Comportamentais: Evitação de situações que causam ansiedade, isolamento social e mudanças nos padrões de comportamento.
Causas da Ansiedade
As causas da ansiedade são complexas e podem envolver uma combinação de fatores genéticos, biológicos, ambientais e psicológicos. Eventos traumáticos, estresse crônico e predisposições familiares podem contribuir para o desenvolvimento de transtornos de ansiedade.

Tratamento da Ansiedade
O tratamento da ansiedade pode incluir uma variedade de abordagens, dependendo da gravidade e do tipo do transtorno. Algumas opções incluem:

Terapia Psicológica: Terapias como a terapia cognitivo-comportamental (TCC) são eficazes no tratamento da ansiedade, ajudando os indivíduos a identificar e mudar padrões de pensamento disfuncionais.

Medicação: Antidepressivos e ansiolíticos podem ser prescritos para ajudar a controlar os sintomas de ansiedade.

Técnicas de Relaxamento: Práticas como meditação, ioga e exercícios de respiração podem ajudar a reduzir a ansiedade.

Mudanças no Estilo de Vida: Atividades físicas regulares, uma dieta equilibrada e um sono adequado podem contribuir para a redução da ansiedade.
                    </p>
                </section>

                <section className="w-full mt-6 bg-white flex flex-col">
                    <h2 className="mt-2 text-black font-bold text-3xl">Escrito por</h2>
                    <div className="black-stripe"></div>
                    <Image src="/ImagesRetriever/angeloPhoto.jpg" width={500} height={500} alt="Angelo Santos"
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
                                width={500} height={500}
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
                                width={500} height={500}
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
                                width={500} height={500}
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
