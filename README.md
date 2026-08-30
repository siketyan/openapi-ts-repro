# openapi-ts-repro

This is a reproduction repository for explaining my use case with hey-api/openapi-ts.

## The problem

The contents of `src/api/{foo,bar}/generated/` directories are mostly the same, causing the bundled size to be unnecessarily large.

It would be nice if we could share the common code between the two directories.

### As Is

```
- src/
  - api/
    - foo/generated/
      - client/
      - core/
      - types.gen.ts
    - bar/generated/
      - client/
      - core/
      - types.gen.ts
```

### To Be

```
- src/
  - api/
    - common/
      - client/
      - core/
    - foo/generated/
      - types.gen.ts
    - bar/generated/
      - types.gen.ts
```
