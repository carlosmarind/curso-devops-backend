import { AppService } from './app.service';

describe('CalculoService', () => {
  const service = new AppService();

  test('suma dos números', () => {
    expect(service.getHello()).toBe('Hello World!');
  });
});
