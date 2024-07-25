import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../app/globals.css';
import React from "react";
import Link from "next/link";

const About = () => {
    return (
        <main className="bg-white flex min-h-screen flex-col items-center justify-between p-0 font-sans">
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
                <title>Sobre Retriever</title>
            </Head>

            <div className="relative w-full bg-cover bg-center">
                <Nav />
            </div>

            <div className="flex-grow flex flex-col items-center mt-16 px-4 md:px-8 lg:px-16 py-8 md:py-16">
                <h1 className="text-3xl md:text-5xl font-bold text-purple-900 mb-8">Sobre nós</h1>
                <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl">
                    <img className="w-full md:w-1/2 h-auto rounded-md shadow-lg" src="/ImagesRetriever/About.jpg" alt="About Us" />
                    <div className="md:ml-8 mt-8 md:mt-0 text-lg text-black space-y-4">
                        <h1 className="text-4xl font-semibold">"Aquilo que você disse sem nem pensar, eu passei dias pensando."</h1>
                        <p>
                            Retriever é um portal dedicado a trazer informações e apoio a pessoas que sofrem de ansiedade. Nosso objetivo é fornecer notícias, divulgar os diferentes tipos de ansiedade e compartilhar relatos de experiências pessoais.
                        </p>
                        <p>
                            Além disso, incentivamos práticas de autocuidado e desenvolvimento pessoal para gerenciar a ansiedade de maneira saudável. Lembre-se, é sempre importante buscar ajuda de um profissional qualificado para um suporte adequado.
                        </p>
                    </div>
                </div>
            </div>

            <div className="black-stripe"></div>

            <div className="px-4 md:px-8 lg:px-16 py-8 md:py-16 text-left">
                <p className="text-black mb-4 max-w-prose ml-0 mr-auto">
                    Retriever foi criado em 2024 com o intuito de ajudar pessoas com ansiedade. Desde então, temos nos empenhado em oferecer suporte e informações atualizadas sobre os diferentes aspectos da ansiedade. Nosso portal é uma fonte de notícias confiável e abrangente, onde os leitores podem encontrar artigos sobre as últimas pesquisas, tratamentos inovadores e histórias inspiradoras de pessoas que superaram seus desafios com a ansiedade. Acreditamos que a informação é uma poderosa ferramenta para enfrentar o desconhecido, e é por isso que nos dedicamos a fornecer conteúdos de qualidade que possam ajudar nossos leitores a compreender melhor suas condições e buscar as melhores formas de tratamento. Nosso time é composto por especialistas em saúde mental, jornalistas e voluntários apaixonados pela causa, que trabalham incansavelmente para garantir que todas as informações publicadas sejam precisas e úteis. Estamos comprometidos com a transparência e a ética, e todos os nossos artigos passam por um rigoroso processo de revisão antes de serem disponibilizados ao público. Além disso, nosso site oferece uma variedade de recursos, incluindo fóruns de discussão, sessões de perguntas e respostas com especialistas, e uma seção dedicada a exercícios de autocuidado e técnicas de relaxamento. Estamos sempre em busca de novas maneiras de apoiar nossos leitores e encorajamos o feedback e a participação ativa da nossa comunidade. Queremos ser um farol de esperança para todos aqueles que enfrentam a ansiedade, oferecendo não apenas informação, mas também um espaço seguro onde possam encontrar apoio e compreensão.
                </p>
                <p className="text-black mb-4 max-w-prose ml-0 mr-auto">
                    Foi criado por Gabriel Angelo junto com a orientação de Roberto de Padua. Gabriel, um entusiasta da saúde mental, percebeu a falta de recursos acessíveis e confiáveis para pessoas que lutam contra a ansiedade. Com a orientação de Roberto, um psicólogo experiente e respeitado, eles decidiram unir forças para criar um portal que pudesse preencher essa lacuna. Gabriel trouxe sua experiência em tecnologia e design, enquanto Roberto contribuiu com seu vasto conhecimento em psicologia e terapia. Juntos, eles trabalharam arduamente para desenvolver um site que não apenas informasse, mas também acolhesse seus visitantes. Cada aspecto do Retriever foi pensado com cuidado, desde o layout intuitivo até a escolha dos temas abordados. Gabriel e Roberto acreditam que a compreensão e o manejo da ansiedade são essenciais para uma vida equilibrada e feliz, e seu objetivo é tornar esses conhecimentos acessíveis a todos. Eles também organizaram uma série de workshops e webinars, onde profissionais da saúde mental compartilham suas experiências e oferecem conselhos práticos. Esses eventos têm sido um grande sucesso, atraindo participantes de todas as partes do mundo, e ajudando a construir uma comunidade global de apoio. Gabriel e Roberto estão sempre em busca de novas maneiras de expandir e melhorar o Retriever, e planejam lançar uma série de ferramentas interativas e cursos online nos próximos meses. Eles estão profundamente comprometidos com a missão de ajudar pessoas a viverem vidas mais saudáveis e livres de ansiedade.
                </p>
                <p className="text-black max-w-prose ml-0 mr-auto">
                    Todos os nossos conteúdos possuem referência. Acreditamos na importância da credibilidade e da precisão, e é por isso que todos os artigos e recursos disponíveis no Retriever são rigorosamente verificados antes de serem publicados. Trabalhamos em parceria com universidades, centros de pesquisa e profissionais de saúde mental para garantir que todas as informações sejam baseadas em evidências científicas. Além disso, cada artigo inclui uma lista de referências detalhadas, permitindo que os leitores consultem as fontes originais e se aprofundem nos temas que mais lhes interessam. Estamos constantemente atualizando nosso conteúdo para refletir as últimas descobertas e avanços na área da saúde mental. Nossa equipe de redatores e revisores é composta por profissionais dedicados que têm um profundo respeito pela verdade e pela integridade jornalística. Entendemos que, quando se trata de saúde mental, a informação errada pode ter consequências graves, e é por isso que levamos nosso trabalho muito a sério. Encorajamos nossos leitores a questionar, pesquisar e sempre buscar o conhecimento, e estamos aqui para apoiá-los nesse processo. Além das referências, oferecemos links para recursos adicionais e bibliografias recomendadas, para aqueles que desejam explorar mais a fundo determinados tópicos. Nosso compromisso com a qualidade e a precisão é o que nos diferencia, e continuaremos a nos esforçar para ser uma fonte confiável e respeitada de informação sobre ansiedade e saúde mental.
                </p>
            </div>

            <section className="w-full p-6">
                <div className="flex items-center space-x-4 mb-4">
                    <h1 className="text-black text-2xl font-semibold">Recomendações</h1>
                    
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link href="/suport">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/ImagesRetriever/homemdascavernas.jpg"
                                alt="Ansiedade na pré-história"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-black text-md font-semibold">Ansiedade na pré-história</h2>
                                <p className="text-gray-600 text-sm">
                                    Foi a sensação de insegurança que criou o homem moderno. Entenda aqui as origens, a importância e os efeitos da ansiedade para nós.
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/suport">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden" data-aos-delay="200">
                            <img
                                src="/ImagesRetriever/anxietyciency.jpg"
                                alt="Como a ciência explica a ansiedade e o estresse"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-black text-md font-semibold">Como a ciência explica a ansiedade e o estresse</h2>
                                <p className="text-gray-600 text-sm">
                                    A ansiedade e o estresse podem ser causados por uma série de fatores, entre eles a vida agitada, pressões sociais, medo, estilo de vida, etc.
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/suport">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden" data-aos-delay="400">
                            <img
                                src="/ImagesRetriever/anxiouwoman.jpg"
                                alt="Transtornos de ansiedade em mulheres"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-black text-md font-semibold">Transtornos de ansiedade em mulheres</h2>
                                <p className="text-gray-600 text-sm">
                                    Mulheres apresentam um risco significativamente maior comparado com os homens para o desenvolvimento de transtornos de ansiedade ao longo da vida.
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default About;
