import { sleep, throttle, retry, timeout } from '../index'

describe('sleep', () => {
    it('should resolve after the specified delay', async () => {
        const start = Date.now()
        await sleep(100)
        const elapsed = Date.now() - start
        expect(elapsed).toBeGreaterThanOrEqual(90)
    })

    it('should return a Promise', () => {
        expect(sleep(0)).toBeInstanceOf(Promise)
    })
})

describe('throttle', () => {
    beforeEach(() => jest.useFakeTimers())
    afterEach(() => jest.useRealTimers())

    it('should call the function immediately on first call', () => {
        const fn = jest.fn()
        const throttled = throttle(fn, 100)
        throttled()
        expect(fn).toHaveBeenCalledTimes(1)
    })

    it('should not call the function again within the wait period', () => {
        const fn = jest.fn()
        const throttled = throttle(fn, 100)
        throttled()
        throttled()
        throttled()
        expect(fn).toHaveBeenCalledTimes(1)
    })

    it('should call trailing invocation after wait period', () => {
        const fn = jest.fn()
        const throttled = throttle(fn, 100)
        throttled()
        throttled()
        jest.advanceTimersByTime(100)
        expect(fn).toHaveBeenCalledTimes(2)
    })
})

describe('retry', () => {
    it('should resolve on first success', async () => {
        const fn = jest.fn().mockResolvedValue('ok')
        const result = await retry(fn, 3)
        expect(result).toBe('ok')
        expect(fn).toHaveBeenCalledTimes(1)
    })

    it('should retry on failure and succeed', async () => {
        const fn = jest.fn()
            .mockRejectedValueOnce(new Error('fail'))
            .mockResolvedValueOnce('ok')
        const result = await retry(fn, 3)
        expect(result).toBe('ok')
        expect(fn).toHaveBeenCalledTimes(2)
    })

    it('should throw after all attempts are exhausted', async () => {
        const fn = jest.fn().mockRejectedValue(new Error('always fails'))
        await expect(retry(fn, 3)).rejects.toThrow('always fails')
        expect(fn).toHaveBeenCalledTimes(3)
    })
})

describe('timeout', () => {
    it('should resolve if promise completes in time', async () => {
        const result = await timeout(Promise.resolve('done'), 1000)
        expect(result).toBe('done')
    })

    it('should reject if promise exceeds timeout', async () => {
        const slow = new Promise<void>(resolve => setTimeout(resolve, 5000))
        await expect(timeout(slow, 50)).rejects.toThrow(/timed out/i)
    })
})
