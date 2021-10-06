/* global Package */

Package.describe({
  name: 'quave:accounts-passwordless-react',
  summary: 'Passwordless for React',
  version: '1.0.0',
});

Package.onUse(api => {
  api.versionsFrom('2.5-beta.3');

  api.use(['accounts-base', 'accounts-passwordless'], ['client', 'server']);

  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('ecmascript');

  api.mainModule('Passwordless.js', 'client');
});
