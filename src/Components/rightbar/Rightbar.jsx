import './rightbar.css'
import { Users } from "../../dummydata"
import Online from '../Online/Online'

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="Assets/gift.png" alt="" className='birthdayImg' />
          <span className="birthdayText"><b>abi_karthi</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img src="Assets/ad.png" alt="" className='rightbarAd' />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u =>
          (
            <Online key={u.id} user={u} />
          ))}

        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
      <h4 className='rightbarTitle'>User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Chennai</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Sattur</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">RelationShip:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className='rightbarTitle'>User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="Assets/person/1.jpeg" className='rigtbarFollowingImg' alt="" />
          <span className="rightbarFollowingName">Jennieee</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Assets/person/2.jpeg" className='rigtbarFollowingImg' alt="" />
          <span className="rightbarFollowingName">Jennieee</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Assets/person/3.jpeg" className='rigtbarFollowingImg' alt="" />
          <span className="rightbarFollowingName">Jennieee</span>
        </div>
        
        <div className="rightbarFollowing">
          <img src="Assets/person/4.jpeg" className='rigtbarFollowingImg' alt="" />
          <span className="rightbarFollowingName">Jennieee</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Assets/person/5.jpeg" className='rigtbarFollowingImg' alt="" />
          <span className="rightbarFollowingName">Jennieee</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Assets/person/6.jpeg" className='rigtbarFollowingImg' alt="" />
          <span className="rightbarFollowingName">Jennieee</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Assets/person/7.jpeg" className='rigtbarFollowingImg' alt="" />
          <span className="rightbarFollowingName">Jennieee</span>
        </div>
        <div className="rightbarFollowing">
          <img src="Assets/person/9.jpeg" className='rigtbarFollowingImg' alt="" />
          <span className="rightbarFollowingName">Jennieee</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       {profile  ? <ProfileRightbar /> : <HomeRightbar/>}
      </div>
    </div>
  )
}

export default Rightbar