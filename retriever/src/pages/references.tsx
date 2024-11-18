import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../app/globals.css';
import React from "react";

const references = [
    {
        title: "BIERMAN, Gavin; ABADI, Martín; TORGERSEN, Mads.",
        description: "Understanding TypeScript. In: JONES, R. (Ed.). ECOOP 2014 – European Conference on Object-Oriented Programming. Lecture Notes in Computer Science, v. 8586, Springer-Verlag, Berlin Heidelberg, 2014, p. 257-281.",
    },
    {
        title: "CEREJA, Margarida Teresa de Jesus; NOBRE, Thalita Lacerda.",
        description: "O uso da internet e a relação com o sentimento de ansiedade em jovens entre 18 a 25 anos. Leopoldianum, [S.l.], v. 44, n. 124, p. [inserir página inicial]-[inserir página final], 17 dez. 2018.",
        link: "https://doi.org/10.58422/releo2018.e853"
    },
    {
        title: "COSTA, Camilla Oleiro da; BRANCO, Jerônimo Costa; VIEIRA, Igor Soares; SOUZA, Luciano Dias de Mattos; SILVA, Ricardo Azevedo da.",
        description: "Prevalência de ansiedade e fatores associados em adultos jovens. Jornal Brasileiro de Psiquiatria, v. 68, n. 2, p. 92-100, 2019.",
        link: "https://doi.org/10.1590/0047-2085000000232"
    },
    {
        title: "CRESWELL, John W.",
        description: "Investigação qualitativa e projeto de pesquisa: escolhendo entre cinco abordagens. 3. ed. Porto Alegre: Penso, 2014.",
    },
    {
        title: "MARCHETTI, Flávia M.; LADEIRA, Márcio B.; BULHÕES, Iara R.; CASCÃO, Marlon P.",
        description: "Avaliação do Tempo Padrão em Montagens Industriais. In: ENCONTRO NACIONAL DE ENGENHARIA DE PRODUÇÃO, 30., 2010, São Carlos. Anais [...]. São Carlos: ABEPRO, 2010.",
        link: "https://abepro.org.br/biblioteca/enegep2010_TN_STP_113_745_15156.pdf"
    },
    {
        title: "MEDEIROS, Antonio C.; FERREIRA, Laura M.",
        description: "Análise e Melhoria de Processos na Produção Industrial. Repositório Ânima Educação, 2019.",
        link: "https://repositorio-api.animaeducacao.com.br/server/api/core/bitstreams/7abc69b0-7a1f-4227-9cb8-f0e0ea3d0cff/content"
    },
    {
        title: "SILVA, Edna Lúcia da; MENEZES, Estera Muszkat.",
        description: "Metodologia da Pesquisa e Elaboração de Dissertação. 3. ed. revisada e atualizada. Florianópolis: Universidade Federal de Santa Catarina, Programa de Pós-Graduação em Engenharia de Produção, Laboratório de Ensino a Distância, 2001.",
    },
    {
        title: "SILVA, Jessica Belém da; ANASTÁCIO, Francisca Alexandra de Macedo.",
        description: "Método Kanban como Ferramenta de Controle de Gestão. Id on Line Rev. Mult. Psic., vol. 13, n. 43, p. 1018-1027, 2019.",
        link: "http://idonline.emnuvens.com.br/id"
    },
    {
        title: "CNN BRASIL",
        description: "Casos de ansiedade e depressão cresceram 25% durante a pandemia, diz OMS.",
        link: "https://www.cnnbrasil.com.br/saude/casos-de-ansiedade-e-depressao-cresceram-25-durante-pandemia-diz-oms/"
    },
    {
        title: "CNN BRASIL",
        description: "Ansiedade: o que é, como controlar e principais sintomas.",
        link: "https://www.cnnbrasil.com.br/saude/ansiedade/#:~:text=A%20ansiedade%20é%20uma%20reação,com%20sintomas%20mentais%20e%20físicos."
    },
    {
        title: "CNN BRASIL",
        description: "Pandemia de Covid-19 provoca aumento global em distúrbios de ansiedade e depressão.",
        link: "https://www.cnnbrasil.com.br/saude/pandemia-de-covid-19-provoca-aumento-global-em-disturbios-de-ansiedade-e-depressao/"
    },
    {
        title: "FIGMA",
        description: "Figma Developers Documentation.",
        link: "https://www.figma.com/developers/docs"
    },
    {
        title: "NEXT.JS",
        description: "Client-side Rendering.",
        link: "https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering"
    },
    {
        title: "NBC NEWS",
        description: "Social media is driving teen mental health crisis, surgeon general warns.",
        link: "https://www.nbcnews.com/health/health-news/social-media-mental-health-anxiety-depression-teens-surgeon-general-rcna85575"
    },
    {
        title: "O GLOBO",
        description: "Volume de uso de redes sociais pode afetar saúde mental.",
        link: "https://oglobo.globo.com/patrocinado/dino/noticia/2023/05/volume-de-uso-de-redes-sociais-pode-afetar-saude-mental.ghtml"
    },
    {
        title: "SANITY.IO",
        description: "A Short Introduction to Sanity.io.",
        link: "https://www.sanity.io/docs/a-short-introduction-to-sanity-io"
    },
    {
        title: "Estado de Minas",
        description: "Redes sociais geram ansiedade?",
        link: "https://www.em.com.br/app/noticia/saude-e-bem-viver/2023/01/15/interna_bem_viver,1444096/redes-sociais-geram-ansiedade.shtml"
    }
];

export default function References() {
    return (
        <main className="bg-gray-100 flex min-h-screen flex-col items-center">
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
                <title>Referências</title>
            </Head>

            <div className="relative w-full bg-cover bg-center">
                <Nav />
            </div>
            <section className="container mt-20 mx-auto px-4 py-16">
                <h2 className="text-3xl mt-20 font-bold text-left text-[#9A2AF3] mb-12">Referências</h2>
                <ul className="space-y-8">
                    {references.map((ref, index) => (
                        <li key={index} className="border-b pb-4">
                            <h3 className="text-xl text-gray-950 font-semibold mb-2">{ref.title}</h3>
                            <p className="text-gray-700 mb-2">{ref.description}</p>
                            {ref.link && (
                                <a href={ref.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Acessar
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </section>
            <Footer />
        </main>
    );
}
