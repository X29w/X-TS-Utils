# CatchError

## 概述

`catchError` 是一个泛型函数，用于处理 Promise 的错误。它接受一个 Promise 和一个可选的错误类型数组，并在 Promise 被拒绝时捕获特定类型的错误。该函数返回一个 Promise，包含成功或错误的结果。

## 类型参数

- `T`: 表示 Promise 成功解析时返回的值的类型。
- `E`: 表示要捕获的错误类型的构造函数，必须是 `Error` 的子类。

## 参数

- `promise: Promise<T>`: 需要处理的 Promise 对象。
- `errorsToCatch?: E[]`: 可选参数，表示要捕获的错误类型数组。如果未提供，则捕获所有错误。

## 返回值

返回一个 Promise，解析为以下两种情况之一：

- `[undefined, T]`: 表示 Promise 成功解析，返回成功的数据。
- `[InstanceType<E>]`: 表示捕获到的错误实例。

## 使用示例

```typescript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new TypeError('发生了类型错误')), 1000);
});

const handlePromise = async () => {
  const result = await catchError(myPromise, [TypeError]);
  if (result[0] === undefined) {
    console.log('成功:', result[1]);
  } else {
    console.error('捕获到错误:', result[0]);
  }
};

handlePromise();
```

## 详细说明

1. **Promise 处理**: 函数首先尝试解析传入的 Promise。如果成功，返回一个包含 `undefined` 和成功数据的数组。
2. **错误捕获**: 如果 Promise 被拒绝，函数会检查 `errorsToCatch` 参数。如果未提供该参数，函数将返回捕获到的错误。如果提供了参数，函数会检查错误是否是指定类型之一。如果是，则返回该错误；否则，抛出错误以供外部处理。
3. **类型安全**: 该函数利用 TypeScript 的类型系统，确保在处理 Promise 和错误时的类型安全。

## 注意事项

- 确保传入的 `errorsToCatch` 数组中的构造函数是 `Error` 的子类。
- 该函数适用于需要对特定错误类型进行处理的场景，提供了灵活的错误管理机制。

```

```
