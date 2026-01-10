import './ActionButton.css';

import type { ComponentType, SVGProps } from "react";

type ActionButtonProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  onClick?: () => void;
};

const ActionButton = ({ icon: Icon, label, onClick }: ActionButtonProps) => {
  return (
    <div className="action-button">
      <button
        className="action-button__btn"
        onClick={onClick}
        aria-label={label}
        type="button"
      >
        <Icon aria-hidden="true" />
      </button>

      <span className="action-button__tooltip" role="tooltip">
        {label}
      </span>
    </div>
  );
};

export default ActionButton;