### `tryCatch`函数的中文说明文档

#### 功能

`tryCatch` 是一个实用工具函数，用于安全处理异步操作。它以标准化的对象形式封装结果和错误，简化了错误处理。

---

#### 类型定义

1. **`Success<T>`**  
   表示操作成功的结果：

   ```typescript
   type Success<T> = {
     data: T;
     error: null;
   };
   ```

2. **`Failure<E>`**  
   表示操作失败的结果：

   ```typescript
   type Failure<E> = {
     data: null;
     error: E;
   };
   ```

3. **`Result<T, E = Error>`**  
   成功和失败结果的联合类型：
   ```typescript
   type Result<T, E = Error> = Success<T> | Failure<E>;
   ```

---

#### 函数签名

```typescript
export async function tryCatch<T, E = Error>(
  promise: Promise<T>,
): Promise<Result<T, E>>;
```

---

#### 参数

- **`promise: Promise<T>`**  
   一个表示异步操作的 `Promise`。

---

#### 返回值

函数返回一个`Promise`，包含以下两种情况：

1. **成功**：

   ```typescript
   { data: T, error: null }
   ```

   - `data`：包含`Promise`的解析结果。
   - `error`：始终为`null`。

2. **失败**：
   ```typescript
   { data: null, error: E }
   ```
   - `data`：始终为`null`。
   - `error`：包含捕获到的错误。

---

#### 使用示例

```typescript
async function fetchData() {
  const result = await tryCatch(fetch('https://example.com'));

  if (result.error) {
    console.error('请求失败：', result.error);
  } else {
    console.log('请求成功：', result.data);
  }
}
```

---

#### 优势

- **集中错误处理**：减少代码中重复的 `try...catch` 块。
- **类型安全**：明确的类型保证代码安全性。
- **可读性强**：简化了异步操作的逻辑处理。
