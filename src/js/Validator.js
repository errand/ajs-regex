/** @module Validator
 * Class validating input.
 */
export default class Validator {
  /**
   * Create a point.
   * @param {regexp} goodCharactersRule - Regex rule to test if string contain only letters, numbers, - and _
   * @param {regexp} goodStartRule - Regex rule to test if string not starts with number, - and _
   * @param {regexp} goodEndRule - Regex rule to test if string not ends with number, - and _
   * @param {regexp} threeDigitsRule - Regex rule to test if string doesn't contain 3 digits in a row
   */
  constructor() {
    this.goodCharactersRule = /^[-_\w\d]+$/g;
    this.goodStartRule = /^[^-_\d]/g;
    this.goodEndRule = /.+[^-_\d]$/g;
    this.threeDigitsRule = /.+[\d]{3}.+/g;
  }

  /**
   * Check if Username fit the Rules
   * @param {string} str - The string containing username to check.
   * @return {boolean} true if OK.
   */
  validateUsername(str) {
    if (!this.goodCharactersRule.test(str)) {
      throw new Error('Username should contain only latin characters, - or _');
    } else if (!this.goodStartRule.test(str)) {
      throw new Error('Username should not start with digits, - or _');
    } else if (!this.goodEndRule.test(str)) {
      throw new Error('Username should not end with digits, - or _');
    } else if (this.threeDigitsRule.test(str)) {
      throw new Error('Username should not contain three digits in a row');
    }
    return true;
  }
}
