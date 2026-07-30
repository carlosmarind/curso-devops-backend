"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
    getHi() {
        return 'Hi there!!!';
    }
    getPokemonIndex() {
        return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>API Pokédex Index</title>
      <style>
        * { box-sizing: border-box; font-family: 'Courier New', Courier, monospace; }
        body {
          background-color: #121212;
          color: #00ff66;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
        }
        .pokedex-card {
          background: #dc0a2d;
          border: 4px solid #8b0000;
          border-radius: 20px;
          padding: 25px;
          width: 90%;
          max-width: 450px;
          box-shadow: 0 10px 0 #8b0000, 0 15px 25px rgba(0,0,0,0.5);
        }
        .top-lights {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .big-blue-light {
          width: 50px;
          height: 50px;
          background: radial-gradient(circle at 30% 30%, #00f0ff, #004080);
          border: 4px solid #fff;
          border-radius: 50%;
          box-shadow: 0 0 15px #00f0ff;
        }
        .small-light {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          border: 2px solid #000;
        }
        .red { background: #ff0000; }
        .yellow { background: #ffcc00; }
        .green { background: #00ff00; }
        .screen {
          background-color: #222;
          border: 4px solid #dedede;
          border-radius: 10px;
          padding: 15px;
          box-shadow: inset 0 0 10px #000;
        }
        h1 {
          color: #fff;
          font-size: 1.2rem;
          text-align: center;
          margin-top: 0;
          text-shadow: 0 0 5px #00ff66;
        }
        .endpoint-list {
          list-style: none;
          padding: 0;
        }
        .endpoint-item {
          margin-bottom: 12px;
        }
        .btn {
          display: block;
          background-color: #00ff66;
          color: #000;
          text-decoration: none;
          padding: 10px;
          border-radius: 5px;
          font-weight: bold;
          text-align: center;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
          width: 100%;
        }
        .btn:hover {
          background-color: #fff;
          box-shadow: 0 0 10px #fff;
          transform: scale(1.02);
        }
        .desc {
          color: #aaa;
          font-size: 0.8rem;
          margin-top: 4px;
          display: block;
        }
        .calc-box {
          background: #111;
          border: 2px solid #00ff66;
          border-radius: 8px;
          padding: 12px;
          margin-top: 8px;
        }
        .calc-inputs {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
        }
        .calc-inputs input, .calc-box select {
          background: #000;
          color: #00ff66;
          border: 1px solid #00ff66;
          padding: 6px 10px;
          border-radius: 4px;
          font-weight: bold;
          width: 100%;
        }
        .calc-inputs input::placeholder {
          color: #006622;
        }
      </style>
    </head>
    <body>
      <div class="pokedex-card">
        <div class="top-lights">
          <div class="big-blue-light"></div>
          <div class="small-light red"></div>
          <div class="small-light yellow"></div>
          <div class="small-light green"></div>
        </div>
        
        <div class="screen">
          <h1>Nico-Dex v1.0 ⚡</h1>
          <p style="text-align:center; font-size:0.8rem; color:#fff;">Rutas activas en el servidor:</p>
          
          <ul class="endpoint-list">
            <li class="endpoint-item">
              <a class="btn" href="/saludo" target="_blank">GET /saludo</a>
              <span class="desc">Retorna un saludo formal.</span>
            </li>
            <li class="endpoint-item">
              <a class="btn" href="/hi" target="_blank">GET /hi</a>
              <span class="desc">Retorna un saludo casual.</span>
            </li>
            <li class="endpoint-item">
              <span class="desc" style="color: #00ff66; font-weight: bold;">⚡ Módulo de Cálculo:</span>
              <form class="calc-box" action="/calculo" method="GET" target="_blank">
                <div class="calc-inputs">
                  <input type="number" name="a" placeholder="Número A" value="10" required>
                  <input type="number" name="b" placeholder="Número B" value="5" required>
                </div>
                <select name="operacion" style="margin-bottom: 8px;">
                  <option value="suma">Suma (+)</option>
                  <option value="resta">Resta (-)</option>
                  <option value="multiplicacion">Multiplicación (x)</option>
                  <option value="division">División (/)</option>
                </select>
                <button type="submit" class="btn">Ejecutar Cálculo ⚡</button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </body>
    </html>
    `;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map