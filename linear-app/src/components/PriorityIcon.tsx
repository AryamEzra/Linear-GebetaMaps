import SignalUrgentIcon from '/assets/icons/claim.svg';
import SignalNoPriorityIcon from '/assets/icons/dots.svg';
import SignalMediumIcon from '/assets/icons/signal-medium.svg';
import SignalStrongIcon from '/assets/icons/signal-strong.svg';
import SignalWeakIcon from '/assets/icons/signal-weak.svg';
import classNames from 'classnames';

interface Props {
  priority: string;
  className?: string;
}

const ICONS: Record<string, string> = {
  high: SignalStrongIcon,
  medium: SignalMediumIcon,
  low: SignalWeakIcon,
  urgent: SignalUrgentIcon,
  no_priority: SignalNoPriorityIcon,
};

export default function PriorityIcon({ priority, className }: Props) {
  const iconSrc = ICONS[priority] || SignalNoPriorityIcon;
  const classes = classNames('w-3.5 h-3.5 rounded', className);
  return <img src={iconSrc} className={classes} alt={priority} />;
}
