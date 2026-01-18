import { useState, useRef, useEffect } from "react";
import "./Dropdown.css";

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownChangeEvent {
  target: {
    name?: string;
    value: string;
  };
}

interface DropdownProps {
  label: string;
  name?: string;
  options?: DropdownOption[];
  value?: string;
  placeholder?: string;
  onChange: (event: DropdownChangeEvent) => void;
}

const Dropdown = ({
  label,
  name,
  options = [],
  value,
  onChange,
  placeholder,
}: DropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = (val: string) => {
    onChange({ target: { name, value: val } });
    setOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div
        className={`dropdown-selected ${open ? "open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {selectedOption ? (
          selectedOption.label
        ) : (
          <span className="dropdown-placeholder">
            {placeholder || `Select ${label}`}
          </span>
        )}
        <span className="dropdown-arrow">{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <ul className="dropdown-list">
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`dropdown-item ${
                value === opt.value ? "active" : ""
              }`}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
