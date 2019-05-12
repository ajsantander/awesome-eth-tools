const cli = require('../utils/cli.js');

describe('inheritance command', () => {
  
  test('Result code should be 0', async () => {
    const result = await cli('inheritance', './test/artifacts/Test.json');
    expect(result.code).toBe(0);
  });

  test('Result stdout should be correct', async () => {
    const result = await cli('inheritance', './test/artifacts/Test.json');
    expect(result.stdout).toContain(`└─ Test
   ├─ Parent1
   │  └─ GrandParent
   └─ Parent2`);
  });
});