import xFetch from './xFetch'
const headers = new Headers({'Content-Type': 'application/json'})
export async function login (query) {
  return xFetch('/auth/login.do', {
    method: 'POST',
    body: `{"user_name": "${query.username}", "password": "${query.password}"}`,
    headers: headers
  })
}
