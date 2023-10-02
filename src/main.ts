//
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { TestoComponent } from './app/testo/testo.component';

(async () => {

  const app = await createApplication({
    providers: [
      /* your global providers here */
    ],
  });

  const testoElement = createCustomElement(TestoComponent, {
    injector: app.injector,
  });

  customElements.define('my-testo', testoElement);

})();
