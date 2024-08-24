/*import { client } from '../sanity/lib/sanity';
import { Relato } from '../sanity/lib/sanity';

export const fetchRelatos = async (): Promise<Relato[]> => {
    const query = `*[_type == "Relato"]`;
    try {
        const relatos: Relato[] = client.fetch(query);
        return relatos;
    } catch (error) {
        console.error('Error fetching relatos:', error);
        throw error;
    }
};
*/