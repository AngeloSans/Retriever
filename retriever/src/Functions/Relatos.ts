// getData.ts
import { sanityClient } from './sanity';
import { Relato } from './types';

export const fetchRelatos = async (): Promise<Relato[]> => {
    const query = `*[_type == "Relato"]`;
    try {
        const relatos: Relato[] = await sanityClient.fetch(query);
        return relatos;
    } catch (error) {
        console.error('Error fetching relatos:', error);
        throw error;
    }
};
