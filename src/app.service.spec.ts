import { AppService } from './app.service';

describe('CalculoService', () => {
  const service = new AppService();

  test('Hello', () => {
    expect(service.getHello()).toBe('Hello World!');
  });
  test('Hi', () => {
    expect(service.getHi()).toBe('Hi there!!!');
  });
});
