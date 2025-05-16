## Problem

Per the `const schema` in `src/index.ts`, there is a very basic schema with just `data: z.null()`. I would expect the generated type (found in `client/models/Schema.ts`) for this to be:

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
3. Look in `client/models/Schema.ts` and observe the `interface Schema` has `data: any | null`
