import { Before, After } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { setDefaultTimeout } from '@cucumber/cucumber';

 

Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld) {
  await this.close();
});

