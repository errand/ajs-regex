import Validator from './Validator';

const userName = 'asdfasd-fa_sd1f-';
const validator = new Validator();

console.log(validator.validateUsername(userName));
