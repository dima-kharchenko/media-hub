import Sidebar from '../Components/Sidebar';
import Recommended from '../Components/Recommended';
import RecentLibraries from '../Components/RecentLibraries';
import ColumnsLayout from './ColumnsLayout';

function ProfileLayout({ children }) {
  return (
    <ColumnsLayout left={
        [<Sidebar key="sidebar"/>, <RecentLibraries key="recent_libraries"/>]
    }
    center={
        children 
    }
    right={
        <Recommended />
    }/>
  );
}

export default ProfileLayout;
