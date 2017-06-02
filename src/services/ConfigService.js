import { environments } from '../environment';

let Config = environments.development;

switch (process.env.NODE_ENV) {
  case 'production':
    Config = environments.production
    break;
  default:
    Config = environments.development;
}

export default Config
