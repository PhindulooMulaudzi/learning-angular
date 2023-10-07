import { InjectionToken } from '@angular/core';
import { AppConfig } from './appconfig.interface';
import { environment } from 'src/environments/environment.development';

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
  apiEndpoint: environment.apiUrl,
};
