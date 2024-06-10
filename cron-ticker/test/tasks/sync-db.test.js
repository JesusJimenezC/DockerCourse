const {syncDB: syncDbTest} = require("../../tasks/sync-db");
describe('Pruebas en Sync-DB', () => {
  test('Debe de ejecutar el proceso dos veces', () => {
    syncDbTest();
    const times = syncDbTest();

    expect(times).toBe(10);
  })
})