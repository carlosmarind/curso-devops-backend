import { CalculoService } from './calculo.service';
import { type Response } from 'express';
export declare class CalculoController {
    private readonly calculoService;
    constructor(calculoService: CalculoService);
    operar(res: Response, operacion: string, a: number, b: number): Response<any, Record<string, any>>;
}
