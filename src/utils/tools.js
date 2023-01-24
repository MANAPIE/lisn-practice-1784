export const apiUrl = process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000'
export const staticUrl = process.env.VUE_APP_STATIC_BASE_URL || ''

export function isArray (value) {
  return Array.isArray(value)
}

export function isPlainObject (value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}
