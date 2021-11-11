/* eslint-disable quotes */
import Validator from '../Validator';

const validator = new Validator();

test('Username should contain good characters', () => {
  const userName = 'asdfa23sd-fa_sd1f';
  expect(validator.validateUsername(userName)).toBeTruthy();
});

test('Throw error if contain bad characters', () => {
  const userName = 'as!dfasd-fa_sd1f';
  expect(() => validator.validateUsername(userName)).toThrow();
});

test('Throw error if contain bad characters', () => {
  const userName = 'asdfasd@fa_sd1f';
  expect(() => validator.validateUsername(userName)).toThrow();
});

test('Throw error if starts with number', () => {
  const userName = '1asdfasdfa_sd1f';
  expect(() => validator.validateUsername(userName)).toThrow();
});

test('Throw error if starts with minus', () => {
  const userName = '-asdfasdfa_sd1f';
  expect(() => validator.validateUsername(userName)).toThrow();
});

test('Throw error if starts with _', () => {
  const userName = '_asdfasdfa_sd1f';
  expect(() => validator.validateUsername(userName)).toThrow();
});

test('Throw error if ends with _', () => {
  const userName = 'asdfasdfa_sd1f_';
  expect(() => validator.validateUsername(userName)).toThrow();
});

test('Throw error if ends with -', () => {
  const userName = 'asdfasdfa_sd1f-';
  expect(() => validator.validateUsername(userName)).toThrow();
});

test('Throw error if ends with number', () => {
  const userName = 'asdfasdfa_sd1f3';
  expect(() => validator.validateUsername(userName)).toThrow();
});

test('Throw error if contain 3 digits in a row', () => {
  const userName = 'asdfasdf_333_sd1f';
  expect(() => validator.validateUsername(userName)).toThrow();
});
