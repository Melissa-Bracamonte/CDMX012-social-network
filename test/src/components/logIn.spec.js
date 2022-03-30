import {
  loginUserWithEmail,
} from '../../../src/database/firebase.js';

// jest.mock('../../../src/database/firebase-import.js');

describe('loginUserWithEmail', () => {
  it('Should return an object', () => {
    const email = 'triadacinco@gmail.com';
    const password = 'triadacinco';
    expect(typeof loginUserWithEmail(email, password)).toBe('object');
  });
  it('Should return true', async () => {
    const email = 'triadacinco@gmail.com';
    const password = 'triadacinco';
    const result = await loginUserWithEmail(email, password);
    expect(result.status).toBe(true);
  });
  it('Should return false', async () => {
    const email = 'hola@gmail.com';
    const password = 'triadacinco';
    const result = await loginUserWithEmail(email, password);
    expect(result.status).toBe(false);
  });
});
