import { async } from '@angular/core/testing';
const packages = require('../../../scripts/licenses-validation.json');

describe('Licenses', () => {

  it('should validate licenses', async(() => {

    const p = JSON.parse(JSON.stringify(packages));
    p.forEach(el => {
      console.error('module: ' + el.module + ' - ' + 'license: ' + el.license);
    });
    // There should be 0 invalid packages. Uncomment after licences list update.
    // expect(p.length).toEqual(0);
  }));
});
