import { useEffect, useState } from 'react';
import { fetchRelatos } from '../Function';
import { Relato } from '../types';
import Image from "next/image";

const RelatosSection = () => {
    const [relatos, setRelatos] = useState<Relato[]>([]);

    useEffect(() => {
        const getRelatos = async () => {
            const data = await fetchRelatos();
            setRelatos(data);
        };

        getRelatos();
    }, []);

    return (
        <section className="w-full p-6">
            <h1 className="text-black text-lg font-semibold mb-4">
                Relatos Inspiradores
            </h1>
            <p className="text-gray-600 mb-6">
                Relatos de indivíduos que tiveram ansiedade e conseguiram lidar com ela
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                {relatos.map((relato) => (
                    <div key={relato._id} className="bg-white border rounded-lg p-4 shadow-lg w-80">
                        <div className="flex items-center mb-4">
                            <Image
                                src={`https://www.instagram.com/${relato.instagram}/profile.jpg`}
                                alt={relato.user}
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h2 className="font-bold text-lg">{relato.user}</h2>
                            </div>
                        </div>
                        <p className="text-gray-800 mb-4">"{relato.Mensage}"</p>
                        <p className="text-gray-600 text-sm">{new Date(relato.date).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RelatosSection;
