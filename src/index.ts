import 'zod-openapi/extend';
import fs from 'node:fs'
import { z } from 'zod';
import { createDocument } from 'zod-openapi';

const nullSchema = z.object({ data: z.null() }).openapi({
    ref: 'NullSchema',
});

const doc = createDocument({
    openapi: '3.1.0',
    info: {
        title: 'My API',
        version: '1.0.0',
    },
    paths: {
        '/nullSchema': {
            get: {
                responses: {
                    '200': {
                        description: '200 OK',
                        content: {
                            'application/json': { schema: nullSchema },
                        },
                    },
                },
            }
        },
    },
});

fs.writeFileSync('openapi.json', JSON.stringify(doc, undefined, 2))
