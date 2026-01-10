import './ActionGroup.css';
import type { ReactNode } from 'react';

type ActionGroupProps = {
  children: ReactNode;
};

const ActionGroup = ({ children }: ActionGroupProps) => {
  return (
    <div className="action-group">
      {children}
    </div>
  );
};

export default ActionGroup;
