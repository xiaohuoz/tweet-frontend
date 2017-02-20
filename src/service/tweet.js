import xFetch from './xFetch'
const headers = new Headers({'Content-Type': 'application/json'})
export async function get () {
  return xFetch('/api/tweets')
}
export async function put (tweet) {
  return xFetch('/api/tweets', {
    method: 'PUT',
    body: JSON.stringify(tweet),
    headers: headers
  })
}
export async function deleteById (_id) {
  return xFetch('/api/tweets', {
    method: 'DELETE',
    body: JSON.stringify({_id}),
    headers: headers
  })
}
