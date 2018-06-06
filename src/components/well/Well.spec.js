'use strict';
import assert from 'power-assert';
import WellComponent from './Well';
import {components as comps} from './fixtures/index';
import Harness from '../../../test/harness';
describe('Well Component', () => {
  it('Should build a Well component', (done) => {
    Harness.testCreate(WellComponent, comps.comp1).then((component) => {
      Harness.testElements(component, 'input[type="text"]', 2);
      done();
    });
  });

  it('Should include the correct classes', (done) => {
    Harness.testCreate(WellComponent, comps.comp1).then((component) => {
      const componentClass = component.element.getAttribute('class');
      assert(componentClass.includes('card card-body bg-faded'), 'Bootstrap 4 classes not present.');
      assert(componentClass.includes('well'), 'Bootstrap 3 classes not present.');
      done();
    });
  });
});
