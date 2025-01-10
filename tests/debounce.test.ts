import { debounce } from '../index'

jest.useFakeTimers()

describe('debounce function', () => {
  it('should delay function execution', () => {
    const func = jest.fn()
    const debouncedFn = debounce(func, 1000)

    debouncedFn()
    expect(func).not.toBeCalled()

    jest.advanceTimersByTime(500)
    expect(func).not.toBeCalled()

    jest.advanceTimersByTime(500)
    expect(func).toBeCalled()
    expect(func).toBeCalledTimes(1)
  })

  it('should cancel previous timer on subsequent calls', () => {
    const func = jest.fn()
    const debouncedFn = debounce(func, 1000)

    debouncedFn()
    jest.advanceTimersByTime(500)
    debouncedFn()
    jest.advanceTimersByTime(500)
    expect(func).not.toBeCalled()

    jest.advanceTimersByTime(500)
    expect(func).toBeCalled()
    expect(func).toBeCalledTimes(1)
  })

  it('should pass arguments to the function', () => {
    const func = jest.fn()
    const debouncedFn = debounce(func, 1000)

    debouncedFn('test', 123)
    jest.runAllTimers()

    expect(func).toBeCalledWith('test', 123)
  })
}) 