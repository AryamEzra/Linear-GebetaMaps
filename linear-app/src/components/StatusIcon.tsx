import CancelIcon from '/assets/icons/cancel.svg';
import BacklogIcon from '/assets/icons/circle-dot.svg';
import TodoIcon from '/assets/icons/circle.svg';
import DoneIcon from '/assets/icons/done.svg';
import InProgressIcon from '/assets/icons/half-circle.svg';
import classNames from 'classnames';

interface Props {
  status: string;
  className?: string;
}

const statusIcons: Record<string, string> = {
  backlog: BacklogIcon,
  todo: TodoIcon,
  in_progress: InProgressIcon,
  done: DoneIcon,
  canceled: CancelIcon,
};

export default function StatusIcon({ status, className }: Props) {
  const classes = classNames('w-3.5 h-3.5 rounded', className);
  return <img src={statusIcons[status]} className={classes} alt={status} />;
}
