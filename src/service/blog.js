import xFetch from './xFetch'
const headers = new Headers({'Content-Type': 'application/json'})
export async function get () {
  return xFetch('/api/blogs')
}
export async function put (json) {
  return xFetch('/api/blogs', {
    method: 'PUT',
    body: JSON.stringify(json),
    headers: headers
  })
}
export async function post (json) {
  return xFetch('/api/blogs', {
    method: 'POST',
    body: JSON.stringify({json}),
    headers: headers
  })
}
export async function deleteById (_id) {
  return xFetch('/api/blogs', {
    method: 'DELETE',
    body: JSON.stringify({_id}),
    headers: headers
  })
}
