import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

// Set default timeout to 30 seconds for all steps
setDefaultTimeout(30 * 1000);

Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld) {
  await this.close();
});

