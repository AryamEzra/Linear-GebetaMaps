import { useState, useRef } from 'react';
import classnames from 'classnames';
import { FiCircle } from 'react-icons/fi';
import { MdKeyboardArrowDown as ExpandMore } from 'react-icons/md';
import Avatar from './Avatar';
import ProfileMenu from './ProfileMenu';
import ItemGroup from './ItemGroup';
import SearchBox from './SearchBox';
import HelpModal from './HelpModal';
import InviteBox from './InviteBox';
import IssueModal from './IssueModal';

interface LeftMenuProps {
  showMenu?: boolean;
  onCloseMenu?: () => void;
}


function LeftMenu({ showMenu = true }: LeftMenuProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showIssueModal, setShowIssueModal] = useState(false);

  const classes = classnames(
    'lg:static inset-0 transform duration-300 lg:relative lg:translate-x-0 bg-white flex flex-col flex-shrink-0 w-56 font-sans text-sm text-gray-700 border-r border-gray-100 lg:shadow-none justify-items-start',
    {
      'hidden': !showMenu,
      'block': showMenu,
    }
  );

  return (
    <>
      <div className={classes} ref={ref}>
        {/* Top menu*/}
        <div className="flex flex-col flex-grow-0 flex-shrink-0 px-5 py-3">
          <div className="flex items-center justify-between">
            {/* Project selection */}
            <div className="flex items-center p-2 pr-3 rounded cursor-pointer hover:bg-gray-100">
              <div className="flex text-sm items-center justify-center rounded-sm w-4.5 h-4.5 text-white bg-yellow-500 mr-2.5">
                G
              </div>
              <div className="text-sm font-medium">github</div>
            </div>
            {/* User avatar  */}
            <div className="relative">
              <div
                className="flex items-center justify-center p-2 rounded cursor-pointer hover:bg-gray-100"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
                <Avatar name="Aryam Ezra" online={true} />
                <ExpandMore size={13} className="ml-2" />
              </div>
              <ProfileMenu
                isOpen={showProfileMenu}
                onDismiss={() => setShowProfileMenu(false)}
                className="absolute top-10"
              />
            </div>
          </div>
          {/* Create issue btn */}
          <button
            className="inline-flex items-center px-2 py-2 mt-3 bg-white border border-gray-300 rounded hover:bg-gray-100 focus:outline-none h-7"
            onClick={() => setShowIssueModal(true)}
          >
            <img src="/assets/icons/add.svg" className="mr-2.5 w-3.5 h-3.5" alt="Add" /> New Issue
          </button>
        </div>
        {/* Search box */}
        <div className="flex flex-col flex-shrink flex-grow overflow-y-auto mb-0.5 px-4">
          <SearchBox className="mt-5" />
          {/* actions */}
          <div className="group relative w-full mt-0.5 py-2 px-2 h-7 flex items-center rounded hover:bg-gray-100 cursor-pointer">
            <img src="/assets/icons/inbox.svg" className="w-3.5 h-3.5 mr-4 text-sm text-gray-500 group-hover:text-gray-600" alt="Inbox" />
            <span>Inbox</span>
          </div>
          <div className="group relative w-full mt-0.5 py-2 px-2 h-7 flex items-center rounded hover:bg-gray-100 cursor-pointer">
            <img src="/assets/icons/issue.svg" className="w-3.5 h-3.5 mr-4 text-gray-500 group-hover:text-gray-600" alt="Issues" />
            <span>Issues</span>
          </div>
          <div className="group relative w-full mt-0.5 py-2 px-2 h-7 flex items-center rounded hover:bg-gray-100 cursor-pointer">
            <img src="/assets/icons/view.svg" className="w-3.5 h-3.5 mr-4 text-gray-500 group-hover:text-gray-600" alt="Views" />
            <span>Views</span>
          </div>
          {/* Teams */}
          <h3 className="px-2 mt-5 text-xs text-gray-500">Your teams</h3>
          <ItemGroup title="Github">
            <div className="flex items-center pl-8 rounded cursor-pointer group h-7 hover:bg-gray-100">
              <FiCircle className="w-3.5 h-3.5 mr-2 text-gray-500 group-hover:text-gray-600" />
              <span>Issues</span>
            </div>
            <div className="flex items-center pl-8 rounded cursor-pointer h-7 hover:bg-gray-100">
              <span className="w-3 h-3 mr-2"></span>
              <span>Backlog</span>
            </div>
            <div className="flex items-center pl-8 rounded cursor-pointer h-7 hover:bg-gray-100">
              <span className="w-3 h-3 mr-2"></span>
              <span>All</span>
            </div>
            <div className="flex items-center pl-8 rounded cursor-pointer h-7 hover:bg-gray-100">
              <span className="w-3 h-3 mr-2"></span>
              <span>Board</span>
            </div>
            <div className="flex items-center pl-8 rounded cursor-pointer group h-7 hover:bg-gray-100">
              <img src="/assets/icons/project.svg" className="w-3 h-3 mr-2 text-gray-500 group-hover:text-gray-700" alt="Projects" />
              <span>Projects</span>
            </div>
            <div className="flex items-center pl-8 rounded cursor-pointer group h-7 hover:bg-gray-100">
              <img src="/assets/icons/archive.svg" className="w-3 h-3 mr-2 text-gray-500 group-hover:text-gray-700" alt="Archives" />
              <span>Archives</span>
            </div>
          </ItemGroup>
          {/* extra space */}
          <div className="flex flex-col flex-grow flex-shrink" />
          {/* bottom group */}
          <div className="px-2 pb-2 text-gray-500 mt-7">
            <button
              className="inline-flex focus:outline-none"
              onClick={() => setShowInviteModal(true)}
            >
              <img src="/assets/icons/add.svg" className="w-3 mr-2" alt="Invite" /> Invite people
            </button>
            <button
              className="inline-flex mt-1 focus:outline-none"
              onClick={() => setShowHelpModal(true)}
            >
              <img src="/assets/icons/help.svg" className="w-3 mr-2" alt="Help" /> Help & Feedback
            </button>
          </div>
        </div>
      </div>
      {/* Modals */}
      <HelpModal isOpen={showHelpModal} onDismiss={() => setShowHelpModal(false)} />
      <InviteBox isOpen={showInviteModal} onDismiss={() => setShowInviteModal(false)} />
      <IssueModal isOpen={showIssueModal} onDismiss={() => setShowIssueModal(false)} />
    </>
  );
}

export default LeftMenu;
