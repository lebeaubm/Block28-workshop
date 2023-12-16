import { Link } from 'react-router-dom'

const AllPosts = ({posts}) => {
    return (
      <div>
        <h1>All Posts</h1>
        <ol>
          {
            posts.map((post) => {
              return (
                <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
              )
            })
          }
        </ol>
      </div>
    )
  }

  export default AllPosts