import './sidebar.css'
import { RssFeed,Chat,PlayCircleFilled, PeopleAlt,Bookmarks,HelpOutline,WorkOutline,Event,School} from '@mui/icons-material'
import {Users} from "../../dummydata"
import CloseFriend from '../CloseFriend/CloseFriend'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarItem">
            <RssFeed className='sidebarIcon' />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarItem">
            <Chat className='sidebarIcon' />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarItem">
            <PlayCircleFilled className='sidebarIcon' />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarItem">
            <PeopleAlt className='sidebarIcon' />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarItem">
            <Bookmarks className='sidebarIcon' />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarItem">
            <HelpOutline className='sidebarIcon' />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarItem">
            <WorkOutline className='sidebarIcon' />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarItem">
            <Event className='sidebarIcon' />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarItem">
            <School className='sidebarIcon' />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr' />
        <ul className="sidebarFriendList">
          {Users.map(u => (
            <CloseFriend key={u.id} user={u} />
          ))}


         
        </ul>
      </div>
    </div>
  )
}

export default Sidebar