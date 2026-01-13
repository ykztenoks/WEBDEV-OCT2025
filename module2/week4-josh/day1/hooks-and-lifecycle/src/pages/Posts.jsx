import { Link } from "react-router-dom"
function Posts({ posts, loading }) {
  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        posts.map((post) => (
          <div className="flex flex-col gap-4 w-[50vw]">
            <Link to={`/posts/${post.id}`}>
              <h1 className="text-2xl font-bold hover:text-blue-500">
                {post.title}
              </h1>
            </Link>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Posts
