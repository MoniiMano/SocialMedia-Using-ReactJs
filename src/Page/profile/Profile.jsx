import './profie.css'
import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Feed from '../../Components/feed/Feed'
import Rightbar from '../../Components/rightbar/Rightbar'

function Profile() {
    return (
        <div>
            <Topbar />
            <div className='profile'>
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="Assets/post/3.jpeg" className='profileCoverImg' alt="" />
                            <img src="Assets/person/8.jpeg" className='profileUserImg' alt="" />
                        </div>
                    <div className="profileInfo">
                        <h4 className='profileInfoName'>monii_mano</h4>
                        <span className='profileInfoDesc'>Hello Sweeities!</span>
                    </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile