import { AuthConfig } from '@avl-ng-controls/auth';
import { environment } from './environments/environment';

// if you want to use local petstore-server use http://localhost:65435
export const basePath = environment.apiUrl; // 'https://vizbox.avl.com/api';
// export const basePath = 'http://localhost:5000';

export const authConfig: AuthConfig = {
  tokenUrl: basePath + '/identitybroker-tokens',
  loginUrl: basePath + '/identitybroker-login',
  refreshUrl: basePath + '/identitybroker-tokens/refresh',
  loginUrlParamRedirect: 'redirectUrl',
  loginUrlParamChallenge: 'pkceChallenge',
  loginUrlParamNonce: 'nonce',
  logoutUrl: basePath + '/identitybroker-logout',
};

export const notificationEndpoint = 'https://localhost:5001/notification';

