export declare class AppService {
    getHello(): string;
    getHi(): string;
    buscarPokemon(nombreOrId: string): Promise<{
        error: string;
        id?: undefined;
        nombre?: undefined;
        imagen?: undefined;
        tipos?: undefined;
    } | {
        id: any;
        nombre: any;
        imagen: any;
        tipos: any;
        error?: undefined;
    } | null>;
    getPokemonIndex(): string;
}
