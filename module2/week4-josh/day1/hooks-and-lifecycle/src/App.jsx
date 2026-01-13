import "./App.css"
import axios from "axios"
import { useState, useEffect } from "react"
import { Routes, Route, Link } from "react-router-dom"
import Posts from "./pages/Posts"
import PostDetails from "./pages/PostDetails"
import Homepage from "./pages/Homepage"
function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  // const fetchPosts = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  //   const formatted = await response.json()

  //   console.log(formatted)
  // }

  // fetchPosts()
  const fetchPosts = async () => {
    setLoading(true)
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    )

    setPosts(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  // THIS RUNS WHEN STATE IS DECLARED AND WHEN IT CHANGES
  // useEffect(() => {
  //   console.log("posts list changed!")
  // }, [posts])
  return (
    <div className="flex flex-col items-center justify-center">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/posts"
          element={<Posts posts={posts} loading={loading} />}
        />
        <Route
          path="/posts/:id"
          element={<PostDetails posts={posts} loading={loading} />}
        />
      </Routes>
    </div>
  )
}

export default App
