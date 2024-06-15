import {describe, expect, it} from 'vitest'
import { hello } from '.';

describe('hello world', () => { 
    it('hello is a function', () => {
        expect(typeof hello).toBe("function");
    })
 });