import { PassThrough } from 'stream'
import type { EntryContext } from '@remix-run/node'
import { Response } from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import { renderToPipeableStream } from 'react-dom/server'

import { dbConnection } from './database'

const ABORT_DELAY = 5000

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let didError = false

    const { pipe, abort } = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        onShellReady: async () => {
          const body = new PassThrough()

          responseHeaders.set('Content-Type', 'text/html')
          await dbConnection()
          resolve(
            new Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          )

          pipe(body)
        },
        onShellError: async err => {
          await dbConnection()

          reject(err)
        },
        onError: error => {
          didError = true

          console.error(error)
        }
      }
    )

    setTimeout(abort, ABORT_DELAY)
  })
}
