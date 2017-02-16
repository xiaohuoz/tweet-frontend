import fetch from 'isomorphic-fetch'
function jsonParse (res) {
  return res.json().then(jsonResult => ({ jsonResult }))
}
function xFetch (url, options) {
  return fetch(url, options).then(jsonParse)
}
export default xFetch
