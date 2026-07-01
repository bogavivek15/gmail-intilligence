const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

export function getBackendUrl(path = '') {
  return `${API_BASE_URL}${path}`;
}

export async function apiRequest(path, options = {}) {
  const headers = new Headers(options.headers || {});
  const init = {
    ...options,
    credentials: 'include',
    headers
  };

  if (options.body && typeof options.body !== 'string') {
    headers.set('content-type', 'application/json');
    init.body = JSON.stringify(options.body);
  }

  const response = await fetch(getBackendUrl(path), init);
  const contentType = response.headers.get('content-type') || '';
  const payload = contentType.includes('application/json') ? await response.json() : null;

  if (!response.ok) {
    const error = new Error(payload?.error?.message || `Request failed: ${response.status}`);
    error.code = payload?.error?.code;
    error.status = response.status;
    throw error;
  }

  return payload?.data ?? payload;
}

