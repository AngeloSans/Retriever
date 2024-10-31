import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../app/globals.css';
import Link from "next/link";
import Image from "next/image";

const Types = () => {
    const [selectedType, setSelectedType] = useState<string | null>('Social');

    const handleTypeClick = (type: string) => {
        setSelectedType(type);
    };

    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Tipos de Ansiedade</title>
            </Head>

            <header className="bg-black p-4 text-white">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold">Ansiedade</h1>
                    <Nav />
                </div>
            </header>

            <main className="container mx-auto p-4 mb-16"> 
                <section className="mb-8 text-center">
                    <h2 className="text-4xl text-black font-semibold mt-40">Ansiedade Classificada por Tipos</h2>
                    <h2 className="text-xl font-medium mb-4 text-gray-800 mt-6">
                        Todo mundo já sentiu apreensão e ansiedade em algum momento da vida. Seja pela expectativa de uma prova, a apresentação de um projeto ou algum compromisso importante. Essa é a ansiedade comum do dia a dia, da qual tanto ouvimos falar. Mas você sabia que existem diferentes tipos de ansiedade?
                    </h2>

                    <div className="flex justify-center gap-4 border-b-2 border-gray-200 mb-6">
                        {['Social', 'Pânico', 'TOC', 'TDAH'].map((type, index) => (
                            <button
                                key={index}
                                className={`p-4 text-lg transition duration-300 font-semibold ease-in-out ${
                                    selectedType === type ? 'border-b-4 border-black text-black' : 'text-white hover:text-black'
                                }`}
                                onClick={() => handleTypeClick(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </section>

                <section className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-1">
                    {selectedType === 'Social' && (
                        
                            <article className="bg-white align rounded-lg shadow-md overflow-hidden lx:max-w-md mx-auto">
                                <Image src="/ImagesRetriever/ansiedadesocialtypes.jpg"
                                     alt="Transtorno de Ansiedade Social"
                                     width={500}
                                     height={500}
                                     className="w-full h-64 object-cover mb-4"/>
                                <div className="px-4">
                                    <h3 className="text-xl font-semibold text-black mb-2">Transtorno de Ansiedade Social: o que é, sintomas e tratamento</h3>
                                    <p className="text-gray-700">
                                    Os humanos são animais sociais e sua capacidade de se relacionarem confortavelmente em situações sociais afeta muitos aspectos importantes de suas vidas, incluindo sua família, educação, trabalho, lazer e relacionamentos.

No transtorno de ansiedade social, determinadas situações ou objetos causam medo ou ansiedade à pessoa e faz com que ela evite essas coisas. O medo e a ansiedade são desproporcionais à ameaça real.

Embora um pouco de ansiedade em situações sociais seja normal, as pessoas com transtorno de ansiedade social têm tanta ansiedade que chegam a evitar situações sociais ou as suportam com angústia. Aproximadamente 13% das pessoas apresentam transtorno de ansiedade social em algum momento da vida. O distúrbio afeta aproximadamente 9% das mulheres e 7% dos homens anualmente.

Alguns adultos com transtorno de ansiedade social eram crianças tímidas, enquanto outros desenvolvem sintomas de ansiedade significativa somente após a puberdade.

A pessoa com transtorno de ansiedade social se preocupa com o fato de que seu desempenho ou ações sejam considerados inadequados. Em geral, ela teme que sua ansiedade se torne óbvia, pois acredita que irá transpirar em excesso, apresentar rubor facial, vomitar, tremer ou gaguejar. Ela também teme que possa perder a sequência de pensamento ou não consiga encontrar palavras para se expressar.

Alguns tipos de ansiedade social estão ligados a situações de desempenho específicas, de modo que a ansiedade ocorre apenas quando a pessoa precisa realizar alguma atividade específica em público. A mesma atividade desenvolvida em âmbito privado não provoca ansiedade. As situações que normalmente desencadeiam ansiedade em pessoas com transtorno de ansiedade social incluem:

Falar em público

Apresentar-se perante o público, como fazer uma leitura em voz alta na igreja ou tocar um instrumento musical

Comer na companhia de outras pessoas

Conhecer novas pessoas

Ter uma conversa

Assinar um documento diante de testemunhas

Usar um banheiro público

Algumas pessoas apresentam sintomas de ansiedade social em uma ou algumas situações específicas, enquanto outras os vivenciam em uma ampla gama de ambientes. Nos dois tipos de ansiedade social, a pessoa tem medo de que, se ela não atender às expectativas alheias ou se sofrer escrutínio durante as interações sociais, ela se sentirá constrangida, humilhada ou rejeitada, ou que ofenderá as outras pessoas.

É possível que a pessoa não reconheça que seu medo é excessivo.

Diagnóstico do transtorno de ansiedade social
Avaliação de um médico com base em critérios de diagnóstico psiquiátrico padrão

O médico diagnostica o transtorno de ansiedade social quando a pessoa sente medo ou ansiedade que inclui todas as características a seguir:

É intenso e tem durado seis meses ou mais

Diz respeito a uma ou mais situações sociais

Quase sempre ocorre na mesma situação ou situações

Envolve o medo de as outras pessoas terem uma impressão negativa

Faz com que a pessoa evite a situação ou a suporte com muito desconforto

É desproporcional ao perigo verdadeiro

Causa angústia significativa ou prejudica o desempenho de atividades de modo significativo

Além disso, o médico descarta a possibilidade de haver outros problemas de saúde mental que podem causar sintomas semelhantes, tais como a agorafobia, a síndrome do pânico ou o transtorno dismórfico corporal.

Tratamento do transtorno de ansiedade social
Terapia de exposição

Terapia cognitivo-comportamental

Antidepressivos, geralmente os inibidores seletivos de recaptação da serotonina (ISRSs)

Assim como outros transtornos de ansiedade, o transtorno de ansiedade social varia em gravidade com o passar do tempo. A ansiedade social frequentemente persiste se não for tratada, fazendo com que muitas pessoas evitem atividades que gostariam de participar caso não tivessem esse problema. Muitas pessoas com ansiedade social nunca procuram tratamento, mas desenvolvem suas próprias estratégias para controlá-la. Por exemplo, talvez elas evitem situações sociais, se “automediquem” com álcool ou maconha ou simplesmente aturem o desconforto de ter que participar de obrigações sociais. No entanto, existem opções de tratamento eficazes para o transtorno de ansiedade social.

A terapia de exposição costuma ser eficaz. Porém, fazer com que a exposição dure tempo suficiente para permitir que as pessoas se acostumem com a situação que desencadeia ansiedade e fiquem confortáveis nessa situação pode não ser fácil. Por exemplo, pessoas com medo de falar diante de seu chefe podem não conseguir organizar uma série de sessões na presença de seu chefe. Situações substitutas podem ajudar, tais como entrar para um grupo comunitário que ajuda a falar em público ou ler um livro para residentes de casas de repouso.

A terapia cognitivo-comportamental também pode ser eficaz. Ao ser tratada com esse tipo de terapia, a pessoa aprende a:

Usar técnicas de relaxamento

Identificar os padrões de pensamento e comportamento que podem desencadear ansiedade ou pânico

Ajustar esses padrões de pensamento

Modificar seu comportamento adequadamente

Antidepressivos, como os ISRSs e benzodiazepínicos (medicamentos ansiolíticos), frequentemente podem ajudar no tratamento de pessoas com ansiedade social. A preferência é normalmente dada aos ISRSs porque, ao contrário dos benzodiazepínicos, eles não têm propensão a interferir com a terapia cognitivo-comportamental. Os benzodiazepínicos afetam o sistema nervoso central (cérebro e medula espinhal) e podem causar sonolência e problemas de memória.

Geralmente, são utilizados betabloqueadores para reduzir o aumento da frequência cardíaca, os tremores e a sudorese apresentados por pessoas que sentem angústia em situações públicas, mas esses medicamentos não reduzem a ansiedade propriamente dita.

Mais informações
Os seguintes recursos em inglês podem ser úteis. Vale ressaltar que O MANUAL não é responsável pelo conteúdo deste recurso.

National Institute of Mental Heal

                                    </p>
                                </div>
                            </article>
        
                    )}
                    {selectedType === 'Pânico' && (
                        <Link href="/about">
                            <article className="bg-white rounded-lg shadow-md overflow-hidden lx:max-w-md ">
                                <Image src="/ImagesRetriever/panicotypes.jpg" alt="Ansiedade em Crianças"
                                     className="w-full h-64 object-cover mb-4"
                                     width={500}
                                     height={500}/>
                                <div className="px-4">
                                    <h3 className="text-xl font-semibold text-black mb-2">Entenda o que é ansiedade social e como se manifesta nas crianças</h3>
                                    <p className="text-gray-700">Ansiedade em crianças.</p>
                                </div>
                            </article>
                        </Link>
                    )}
                    {selectedType === 'TOC' && (
                        <Link href="/about">
                            <article className="bg-white rounded-lg shadow-md lx:max-w-md overflow-hidden ">
                                <Image src="/ImagesRetriever/toctypes.jpg" alt="Ansiedade e Fobia Social"
                                     className="w-full h-64 object-cover mb-4"
                                     width={500}
                                     height={500}/>
                                <div className="px-4">
                                    <h3 className="text-xl font-semibold text-black mb-2">Fobia social quando o sofrimento pela timidez é tanto que a saída é se esconder</h3>
                                    <p className="text-gray-700">Ansiedade e fobia social.</p>
                                </div>
                            </article>
                        </Link>
                    )}
                    {selectedType === 'TDAH' && (
                        <Link href="/about">
                            <article className="bg-white rounded-lg shadow-md lx:max-w-md overflow-hidden">
                                <Image src="/ImagesRetriever/tdahtypes.jpeg" alt="Ansiedade e Fobia Social"
                                     className="w-full h-64 object-cover mb-4"
                                     width={500}
                                     height={500}/>
                                <div className="px-4">
                                    <h3 className="text-xl font-semibold text-black mb-2">Fobia social quando o sofrimento pela timidez é tanto que a saída é se esconder</h3>
                                    <p className="text-gray-700">Ansiedade e fobia social.</p>
                                </div>
                            </article>
                        </Link>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Types;
