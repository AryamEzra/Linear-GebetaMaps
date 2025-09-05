
import React from 'react';
import Modal from './Modal';

interface Props {
  isOpen: boolean;
  onDismiss?: () => void;
}

interface HelpProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  link: string;
}
function HelpSection({ icon, title, text, link }: HelpProps) {
  return (
    <a className="flex items-start py-3" href={link}>
      <div className="pt-1">{icon}</div>
      <div className="flex flex-col justify-center flex-grow ml-3 border-b border-gray-100">
        <div className="text-gray-800 text-sm mb-1.5">{title}</div>
        <div className="text-sm font-normal text-gray-500">{text}</div>
      </div>
    </a>
  );
}
export default function HelpModal({ isOpen, onDismiss }: Props) {
  return (
    <Modal title="help" isOpen={isOpen} onDismiss={onDismiss}>
      <div className="flex flex-col w-full pl-8 pr-5 overflow-y-auto">
        <HelpSection
          icon={<img src="/assets/icons/guide.svg" alt="Guide" />}
          title="Linear Guide"
          text="Read more about Linear's features"
          link="https://docs.linear.app/Linear-Guide-cab28edf7e26469cbf0132abb539e6d0"
        />
        <HelpSection
          icon={<img src="/assets/icons/rounded-claim.svg" alt="Shortcut" />}
          title="Keyboard shortcuts"
          text="Create and update issue faster"
          link="#"
        />
        <HelpSection
          icon={<img src="/assets/icons/slack.svg" alt="Slack" />}
          title="Join our Slack community"
          text="Ask questions and help others"
          link="https://linear.app/join-slack"
        />
        <HelpSection
          icon={<img src="/assets/icons/question.svg" alt="Support" />}
          title="Contact support"
          text="Let us know if there's an issue"
          link="#"
        />
        <HelpSection
          icon={<img src="/assets/icons/chat.svg" alt="Feedback" />}
          title="Share feedback"
          text="Submit a feature request"
          link="#"
        />
      </div>
    </Modal>
  );
}
