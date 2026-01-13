import { Link } from "react-router-dom"

function Homepage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl">hello world</h1>
      <Link to="/posts">
        <h2 className="text-blue-600">check out the latest posts</h2>
      </Link>
    </div>
  )
}

export default Homepage
