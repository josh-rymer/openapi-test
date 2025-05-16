import 'zod-openapi/extend';
import fs from 'node:fs'
import { z } from 'zod';
import { createDocument } from 'zod-openapi';

const schema = z.object({ data: z.null() }).openapi({
    ref: 'schema',
});

const doc = createDocument({
    openapi: '3.1.0',
    info: {
        title: 'My API',
        version: '1.0.0',
    },
    paths: {
        '/': {
            put: {
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {},
                        },
                    },
                },
                responses: {
                    '200': {
                        description: '200 OK',
                        content: {
                            'application/json': { schema },
                        },
                    },
                },
            },
        },
    },
});

fs.writeFileSync('openapi.json', JSON.stringify(doc, undefined, 2))
