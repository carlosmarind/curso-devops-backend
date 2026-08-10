import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHome(): string;
    getHello(): string;
    getHi(): string;
    obtenerPokemon(nombre: string): Promise<{
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
}
