import { deepFreeze } from '../src/index';

describe('deepFreeze', () => {
  it('should freeze a simple object', () => {
    const obj = { a: 1, b: 2 };
    const frozenObj = deepFreeze(obj);
    
    expect(Object.isFrozen(frozenObj)).toBe(true);
    expect(() => {
      (frozenObj as any).a = 3;
    }).toThrow();
  });

  it('should freeze nested objects', () => {
    const obj = { 
      a: 1, 
      b: { 
        c: 2, 
        d: { e: 3 } 
      } 
    };
    const frozenObj = deepFreeze(obj);
    
    expect(Object.isFrozen(frozenObj)).toBe(true);
    expect(Object.isFrozen((frozenObj as any).b)).toBe(true);
    expect(Object.isFrozen((frozenObj as any).b.d)).toBe(true);
    
    expect(() => {
      (frozenObj as any).b.c = 4;
    }).toThrow();
  });
});