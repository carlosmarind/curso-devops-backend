import { CalculoService } from './calculo.service';

describe('CalculoService', () => {
  const calculoService = new CalculoService();

  test('suma dos numeros', () => {
    expect(calculoService.operar('suma', 10, 20)).toBe(30);
  });

  test('suma dos numeros', () => {
    expect(calculoService.operar('suma', 40, 40)).toBe(80);
  });

  test('restar dos numeros', () => {
    expect(calculoService.operar('resta', 40, 40)).toBe(0);
  });
  test('multiplicar dos numeros', () => {
    expect(calculoService.operar('multiplicar', 40, 40)).toBe(1600);
  });
});

describe('CalculoService Unit (solo Jest)', () => {
  let service: CalculoService;

  beforeEach(() => {
    service = new CalculoService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('deberia sumar correctamente', () => {
    expect(service.operar('suma', 8, 12)).toBe(20);
    expect(service.operar('suma', -5, 2)).toBe(-3);
    expect(service.operar('suma', 0, 0)).toBe(0);
  });

  test('deberia restar correctamente', () => {
    expect(service.operar('resta', 20, 5)).toBe(15);
    expect(service.operar('resta', 5, 20)).toBe(-15);
    expect(service.operar('resta', 0, 0)).toBe(0);
  });

  test('deberia multiplicar correctamente', () => {
    expect(service.operar('multiplicar', 6, 7)).toBe(42);
    expect(service.operar('multiplicar', -3, 4)).toBe(-12);
    expect(service.operar('multiplicar', 100, 0)).toBe(0);
  });

  test('deberia dividir correctamente', () => {
    expect(service.operar('dividir', 16, 4)).toBe(4);
    expect(service.operar('dividir', 7, 2)).toBe(3.5);
    expect(service.operar('dividir', 0, 5)).toBe(0);
  });

  test('deberia ser determinista para la misma entrada', () => {
    const primerResultado = service.operar('multiplicar', 3, 9);
    const segundoResultado = service.operar('multiplicar', 3, 9);

    expect(primerResultado).toBe(segundoResultado);
  });

  test('deberia lanzar error para operaciones no soportadas', () => {
    expect(() => service.operar('potencia', 2, 3)).toThrow(
      'operacion invalida. Valores permitidos: suma, resta, multiplicar, dividir',
    );
  });

  test('deberia lanzar error si intenta dividir por cero', () => {
    expect(() => service.operar('dividir', 25, 0)).toThrow(
      'no se puede dividir por cero',
    );
  });
});
