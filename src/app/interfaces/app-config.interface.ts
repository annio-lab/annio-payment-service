import { IDatabaseConfig, IMicroServiceConfig } from '@annio/core/interfaces';

export interface IAppConfig {
  project: {
    package: any;
  };
  env: {
    name: string;
    port: number;
    protocol: 'http' | 'https';
  };
  database: IDatabaseConfig;
  services: {
    order: IMicroServiceConfig;
  };
}
