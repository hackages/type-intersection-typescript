import {describe, expect, it} from 'vitest'

function hello(){}

describe('hello world', () => { 
    it('hello is a function', () => {
        expect(typeof hello).toBe("function");
    })
 });