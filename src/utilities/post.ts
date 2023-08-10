type ContentType = 'application/json' | 'text/plain';

export default function post(url = '', data?: object | string) {
  let body: string | undefined = undefined;
  let contentType: ContentType = 'text/plain';

  if (typeof data === 'string') {
    contentType = 'text/plain';
    body = data;
  }

  if (typeof data === 'object') {
    contentType = 'application/json';
    body = JSON.stringify(data);
  }

  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': contentType,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body,
  });
}
