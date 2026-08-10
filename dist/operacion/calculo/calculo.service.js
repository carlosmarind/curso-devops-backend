"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculoService = void 0;
const common_1 = require("@nestjs/common");
let CalculoService = class CalculoService {
    operar(operacion = '', a, b) {
        if (operacion === 'suma') {
            return this.#suma(a, b);
        }
        else if (operacion === 'resta') {
            return this.#resta(a, b);
        }
        else if (operacion === 'multiplicar') {
            return this.#multiplicar(a, b);
        }
        else if (operacion === 'dividir') {
            return this.#dividir(a, b);
        }
        throw new Error('operacion invalida. Valores permitidos: suma, resta, multiplicar, dividir');
    }
    #suma(a, b) {
        return a + b;
    }
    #resta(a, b) {
        return a - b;
    }
    #multiplicar(a, b) {
        return a * b;
    }
    #dividir(a, b) {
        if (b === 0) {
            throw new Error('no se puede dividir por cero');
        }
        return a / b;
    }
};
exports.CalculoService = CalculoService;
exports.CalculoService = CalculoService = __decorate([
    (0, common_1.Injectable)()
], CalculoService);
//# sourceMappingURL=calculo.service.js.map