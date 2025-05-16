## Problem

Per the `const nullSchema` in `src/index.ts`:

```
const nullSchema = z.object({ data: z.null() }).openapi({
    ref: 'NullSchema',
});
```

`nullSchema` is a very basic schema with just `data: z.null()`. I would expect the generated type (found in `client/models/NullSchema.ts`) for this to be:

```
interface Schema {
    data: null
}
```

But the generated type is instead:

```
interface Schema {
    data: any | null
}
```

Where is the `any` coming from?

## Test steps

1. `yarn install`
2. `yarn openapi`
3. Look in `client/models/NullSchema.ts` and observe the `interface NullSchema` has `data: any | null`
