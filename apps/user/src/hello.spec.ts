import { hello } from './hello';
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {

  it('should return hello 🗺️', () => {
    const result = hello();
    expect(result).to.equal('Hello 🗺️!');
  });

});
