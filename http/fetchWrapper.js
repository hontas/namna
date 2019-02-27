export function makeRequest(url, options = {}) {
  return fetch(url, options).then(async (resp) => {
    const contentType = resp.headers.get('content-type');
    let body = '';
    if (contentType.includes('json')) {
      body = await resp.json();
    } else if (contentType.includes('text')) {
      body = await resp.text();
    }

    const response = {
      ...resp,
      body
    };

    if (resp.ok) return response;
    return Promise.reject(response);
  });
}

export function getBody({ body }) {
  return body;
}

export function get(url, options = {}) {
  return makeRequest(url, {
    ...options,
    method: 'GET'
  });
}
