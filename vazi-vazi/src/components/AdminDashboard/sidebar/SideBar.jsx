import "./SideBar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Logo from '../../../assets/logo-w.png';


const SideBar = () => {
  return (
    <div id="sidebar">
      <div className="sidebarMenu">
        <span className="logo-section">
          <Link to='/'>
            <div>
              <img src={Logo} alt="logo" width='70' height='70' />
            <h2 className="sidebarTitle">Dashboard</h2>
            </div>
          </Link>
        </span>

        <ul className="sidebarList">
          <Link to="/admin-dashboard" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
          </Link>
          <li className="sidebarListItem">
            <Timeline className="sidebarIcon" />
            Analytics
          </li>
          <li className="sidebarListItem">
            <TrendingUp className="sidebarIcon" />
            Sales
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Quick Menu</h3>
        <ul className="sidebarList">
          <Link to="/admin-dashboard/userlist" className="link">
            <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
              Users
            </li>
          </Link>
          <Link to="/admin-dashboard/productlist" className="link">
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              Products
            </li>
          </Link>
          <li className="sidebarListItem">
            <AttachMoney className="sidebarIcon" />
            Transactions
          </li>
          <li className="sidebarListItem">
            <BarChart className="sidebarIcon" />
            Reports
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Notifications</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MailOutline className="sidebarIcon" />
            Mail
          </li>
          <li className="sidebarListItem">
            <DynamicFeed className="sidebarIcon" />
            Feedback
          </li>
          <li className="sidebarListItem">
            <ChatBubbleOutline className="sidebarIcon" />
            Messages
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Staff</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            Manage
          </li>
          <li className="sidebarListItem">
            <Report className="sidebarIcon" />
            Reports
          </li>
        </ul>
      </div>
    </div >
  );
}

export default SideBar;