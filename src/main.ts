import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// PASO 2: primer código que se ejecuta. Arranca Angular con el componente App.
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
