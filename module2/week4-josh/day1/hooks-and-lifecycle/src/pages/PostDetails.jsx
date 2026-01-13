import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function PostDetails({ posts, loading }) {
  const [post, setPost] = useState(undefined)
  const { id } = useParams()

  // const fetchPost = async () => {
  //   const response = await axios.get(
  //     `https://jsonplaceholder.typicode.com/posts/${id}`
  //   )
  //   setPost(response.data)
  // }

  // useEffect(() => {
  //   fetchPost()
  // }, [id])

  useEffect(() => {
    posts && setPost(posts.find((element) => String(element.id) === id))
  }, [posts])

  return (
    <div>
      {!loading && post ? (
        <>
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p>{post.body}</p>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  )
}

export default PostDetails
