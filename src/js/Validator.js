/** @module Validator
 * Class validating input.
 */
export default class Validator {
  /**
   * Create a point.
   * @param {regexp} onlyCharactersRule - The regexp rule.
   */
  constructor() {
    this.onlyCharactersRule = /^[-_\w\d]+$/g;
    this.goodStartRule = /^[^-_\d]/g;
    this.goodEndRule = /.+[^-_\d]$/g;
    this.threeDigitsRule = /.+[^-_\d]$/g;
  }

  /**
   * Check if Username fit the Rules
   * @param {string} str - The string containing username to check.
   * @return {boolean} true if OK.
   */
  validateUsername(str){
    if(this.onlyCharactersRule.test(str)){
      if(this.goodStartRule.test(str)){
        if(this.goodEndRule.test(str)){
          return true;
        } else {
          throw new Error('Username should not end with digits, - or _');
        }
      } else {
        throw new Error('Username should not start with digits, - or _');
      }
    } else {
      throw new Error('Username should contain only latin characters, - or _');
    }
  }

}
