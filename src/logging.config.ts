import { LogConfig, LogSeverity } from '@avl-services/ng-services';

export const LoggingConfig = new LogConfig(
  'https://vizbox.avl.com/api/theia/logs', // endpoint for logging (mandatory)
  'StarterKitWebApp',                  // database name for logs (mandatory)
  'StarterKit',                        // application name (mandatory)
  '1.0.0',                             // application version (mandatory)
  true,                                // autologging, logs automatically when user is logged in (optional)
                                       // default: false (if true requires AvlAuthService in providers)
  LogSeverity.Warning,                 // minimum message level to log (optional), default value: LogType.Info
  10_000,                              // log debounce time in milliseconds (optional), default: 30 000 ms
  5                                    // log capacity (optional), default: 10
);