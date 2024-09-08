import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Link from "next/link";
import 'aos/dist/aos.css';
import AOS from "aos";
import Image from "next/image";

const tiposAnsiedade = [
    {
        tipo: "Transtorno de Pânico",
        img: "/ImagesRetriever/panico.jpg",
        width: 500, 
        height: 300,
    },
    {
        tipo: "Agorafobia",
        img: "/ImagesRetriever/agorafobia.jpg",
        width: 500,
        height: 300,
    },
    {
        tipo: "Fobias Específicas",
        img: "/ImagesRetriever/fobiasespecificas.jpg",
        width: 500,
        height: 300,
    },
    {
        tipo: "Transtorno de Ansiedade Social ou fobia social",
        img: "/ImagesRetriever/fobiasocial.jpg",
        width: 500,
        height: 300,
    },
    {
        tipo: "Transtorno de Ansiedade Generalizada",
        img: "/ImagesRetriever/tag.jpg",
        width: 500,
        height: 300,
    },
];

const Home: React.FC = () => {
    const [imagemAtual, setImagemAtual] = useState(tiposAnsiedade[0].img);
    const [itemSelecionado, setItemSelecionado] = useState(0);
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    const handleItemClick = ({ index, img }: { index: number; img: string }) => {
        setImagemAtual(img);
        setItemSelecionado(index);
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setItemSelecionado((prevIndex) => {
                const nextIndex = (prevIndex + 1) % tiposAnsiedade.length;
                setImagemAtual(tiposAnsiedade[nextIndex].img);
                return nextIndex;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setIsFirstLoad(false);
    }, []);

    return (
        <main className="bg-white flex flex-col min-h-screen items-center justify-between p-0">
            
            <div className="relative w-full bg-cover bg-center">
                <Nav/>
            </div>
            <header className="w-full">
                <Link href="/anxietyabout">
                    <div
                        className="relative w-full h-screen bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/ImagesRetriever/womanSad.png')",
                            minHeight: "320px",
                        }}
                    >
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-6">
                            <h2
                                className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isFirstLoad ? "aos-init aos-animate" : ""}`}
                                data-aos={isFirstLoad ? "fade-up" : ""}
                            >
                                O que é Ansiedade?
                            </h2>
                            <p
                                className={`text-sm sm:text-base md:text-lg hidden sm:block ${isFirstLoad ? "aos-init aos-animate" : ""}`}
                                data-aos={isFirstLoad ? "fade-up" : ""}
                                data-aos-delay="200"
                            >
                                A ansiedade é uma resposta natural do corpo a situações de
                                perigo, estresse ou desafio. É uma reação adaptativa que nos
                                prepara para lidar com ameaças percebidas. No entanto, em alguns
                                casos, a ansiedade pode se tornar desproporcional, crônica e
                                afetar negativamente a qualidade de vida.
                            </p>
                        </div>
                    </div>
                </Link>
            </header>

            <section className="w-full p-6" data-aos={isFirstLoad ? "fade-up" : ""}>
                <div className="flex items-center space-x-4 mb-4">
                    <h1 className="text-black text-lg font-semibold">Explorar</h1>
                    <Link href="/explorer" className="text-purple-900">
                        Ver mais
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link href="/suport" data-aos={isFirstLoad ? "fade-up" : ""}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src="/ImagesRetriever/homemdascavernas.jpg"
                                alt="Ansiedade na pré-história"
                                className="w-full h-48 object-cover"
                                width={500}
                                height={300}
                            />
                            <div className="p-4">
                                <h2 className="text-black text-md font-semibold">
                                    Ansiedade na pré-história
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    Foi a sensação de insegurança que criou o homem moderno.
                                    Entenda aqui as origens, a importância e os efeitos da
                                    ansiedade para nós.
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/suport" data-aos={isFirstLoad ? "fade-up" : ""} data-aos-delay="200">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src="/ImagesRetriever/anxietyciency.jpg"
                                alt="Como a ciência explica a ansiedade e o estresse"
                                className="w-full h-48 object-cover"
                                width={500}
                                height={300}
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
                        </div>
                    </Link>
                    <Link href="/suport" data-aos={isFirstLoad ? "fade-up" : ""} data-aos-delay="400">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src="/ImagesRetriever/anxiouwoman.jpg"
                                alt="Transtornos de ansiedade em mulheres"
                                className="w-full h-48 object-cover"
                                width={500}
                                height={300}
                            />
                            <div className="p-4">
                                <h2 className="text-black text-md font-semibold">
                                    Transtornos de ansiedade em mulheres
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    Mulheres apresentam um risco significativamente maior
                                    comparado com os homens para o desenvolvimento de
                                    transtornos de ansiedade ao longo da vida.
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            <section className="w-full p-6" data-aos={isFirstLoad ? "fade-up" : ""}>
                <h1 className="text-black text-lg font-semibold mb-4">
                    Descubra os Tipos de Ansiedade
                </h1>
                <div className="flex flex-col items-center md:flex-row">
                    <Link href="/explorer" className="w-full md:w-1/2 h-96 object-cover">
                        <Image
                            src={imagemAtual}
                            alt="Tipos de Ansiedade"
                            className="w-full md:w-1/2 h-96 object-cover"
                            width={500}
                            height={300}
                        />
                    </Link>

                    <div className="flex flex-col mt-4 md:mt-0 md:ml-4">
                        {tiposAnsiedade.map((tipo, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer p-4 mb-2 border ${
                                    itemSelecionado === index
                                        ? "border-black bg-gray-200"
                                        : "border-gray-300"
                                }`}
                                onClick={() => handleItemClick({index, img: tipo.img})}
                                data-aos={isFirstLoad ? "fade-up" : ""}
                                data-aos-delay={`${index * 100}`}
                            >
                                <h2 className="text-black text-lg font-semibold">
                                    {tipo.tipo}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full p-6" data-aos={isFirstLoad ? "fade-up" : ""}>
                <div className="flex items-center space-x-4 mb-4">
                    <h1 className="text-black text-lg font-semibold">Ansiedade e Autoestima</h1>
                    <Link href="/explorer" className="text-purple-900">
                        Ver mais
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link href="/suport" data-aos={isFirstLoad ? "fade-up" : ""}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src="/ImagesRetriever/baixaautoestima1.png"
                                alt="Ansiedade e Autoestima"
                                className="w-full h-48 object-cover"
                                width={500}
                                height={300}
                            />
                            <div className="p-4">
                                <h2 className="text-black text-md font-semibold">
                                    Ansiedade e Autoestima
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    Quando a ansiedade se manifesta em forma de autocrítica,
                                    medo de julgamentos e preocupação excessiva com o que os outros pensam,
                                    pode levar a uma diminuição da autoestima e autoconfiança.
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/suport" data-aos={isFirstLoad ? "fade-up" : ""} data-aos-delay="200">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src="/ImagesRetriever/baixaautoestima2.jpeg"
                                alt="Como a ciência explica a ansiedade e o estresse"
                                className="w-full h-48 object-cover"
                                width={500}
                                height={300}
                            />
                            <div className="p-4">
                                <h2 className="text-black text-md font-semibold">
                                    Ansiedade pode ser sintoma de baixa autoestima
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    Porém, pouco se relaciona a baixa autoestima com o aparecimento de transtornos
                                    ansiosos.
                                    Mas, será que realmente existe ligação?
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/suport" data-aos={isFirstLoad ? "fade-up" : ""} data-aos-delay="400">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src="/ImagesRetriever/baixaautoestima3.webp"
                                alt="Transtornos de ansiedade em mulheres"
                                className="w-full h-48 object-cover"
                                width={500}
                                height={300}
                            />
                            <div className="p-4">
                                <h2 className="text-black text-md font-semibold">
                                    Boa autoestima pode combater os sintomas de ansiedade
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    Pessoas com baixa autoestima tendem a tentar corresponder às expectativas dos
                                    outros,
                                    se desgastam com medo da opinião alheia..
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            <section className="w-full p-6" data-aos={isFirstLoad ? "fade-up" : ""}>
                <div className="flex items-center space-x-4 mb-4">
                    <h1 className="text-black text-lg font-semibold">Tecnologia e Ansiedade</h1>
                    <Link href="/explorer" className="text-purple-900">
                        Ver mais
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link href="/suport" data-aos={isFirstLoad ? "fade-up" : ""}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src="/ImagesRetriever/tecnologia1.jpg"
                                alt="Ansiedade na pré-história"
                                className="w-full h-48 object-cover"
                                width={500}
                                height={300}
                            />
                            <div className="p-4">
                                <h2 className="text-black text-md font-semibold">
                                    Tecnologia, crianças, adolescentes e ansiedade: o que fazer?
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    O vício tecnológico é um tema que, cada vez mais, tem preocupado pais, educadores,
                                    famílias, profissionais da área da saúde e a sociedade como um todo..
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/suport" data-aos={isFirstLoad ? "fade-up" : ""} data-aos-delay="200">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src="/ImagesRetriever/tecnologia2.jpg"
                                alt="Como a ciência explica a ansiedade e o estresse"
                                className="w-full h-48 object-cover"
                                width={500}
                                height={300}
                            />
                            <div className="p-4">
                                <h2 className="text-black text-md font-semibold">
                                    Quando o uso abusivo da tecnologia leva à solidão e até depressão
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    Não é de hoje que os especialistas vêm estudando como a tecnologia
                                    pode desencadear a solidão e, em casos mais graves,
                                    até mesmo depressão..

                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/suport" data-aos={isFirstLoad ? "fade-up" : ""} data-aos-delay="400">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src="/ImagesRetriever/tecnologia3.webp"
                                alt="Transtornos de ansiedade em mulheres"
                                className="w-full h-48 object-cover"
                                width={500}
                                height={300}
                            />
                            <div className="p-4">
                                <h2 className="text-black text-md font-semibold">
                                    Adolescentes contam o que causa ansiedade ao usar Whats, Insta e TikTok
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    O TikTok: fico passando a ForYou e acabo perdendo a noção do tempo,
                                    deixando de realizar atividades da vida real. O WhatsApp: causa ansiedade no...
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
            <section className="w-full p-6" data-aos={isFirstLoad ? "fade-up" : ""}>
                <h1 className="text-black text-2xl text-center font-semibold mb-4">
                    Saiba Mais sobre Ansiedade!
                </h1>
                <div className="flex justify-center">
                    <iframe
                        width="660"
                        height="415"
                        src="https://www.youtube.com/embed/Tv0gJTBmVuc"
                        title="Anxiety video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            <Footer/>
        </main>
    );
};

export default Home;
