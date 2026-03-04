const { storage, batch } = require('./index');

describe('micro-local-storage', () => {
  test('should process string input', () => {
    expect(storage('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => storage(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = storage('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
