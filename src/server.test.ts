import req from 'supertest';

import server from './server';

test('[GET] /_healthcheck', async () => {
  const res = await req(server).get('/_healthcheck');
  expect(res.body.status).toBe('OK');
  expect(res.body.uptime).toBeTruthy();
});
