import './post.css'
import { MoreVert } from '@mui/icons-material'
import {Users} from "../../dummydata"
import { useState } from 'react'

function Post({ post })
 {
  const [like,setLike]=useState(post.like)
  const [islike,setIsLike]=useState(false)
  const likeHandler=()=>{
    setLike(islike ? like-1 :like+1)
    setIsLike(!islike)
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" className='postProfileImg' />
            <span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className='postImg' src={post.photo} alt="" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeicon' src="/Assets/like.png" onClick={likeHandler} alt="" />
            <img className='likeicon' src="/Assets/heart.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">{post.comments} Comments</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post