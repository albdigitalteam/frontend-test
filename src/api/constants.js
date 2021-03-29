const endpoint = 'https://jsonplaceholder.typicode.com'

const method = {
    post: { method: 'POST' },
    get: { method: 'GET' },
    put: { method: 'PUT' },
    delete: { method: 'DELETE' },
}

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

export {
    endpoint,
    method,
    headers,
}
