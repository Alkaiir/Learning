
const getPosts = async () => {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
  const json = await response.json()
  const postsId = json.slice(0, 99)
  return postsId
}
const getPost = async (postId) => {
  const url = 'https://hacker-news.firebaseio.com/v0/item/' + postId + '.json?print=pretty'
  const response = await fetch(url)
  const json = await response.json()
  return json
}

export { getPosts, getPost }
