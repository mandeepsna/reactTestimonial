import React from "react";

interface buttonProps {
  children?: React.ReactNode;
  click?: () => void;
}
const Button = (props: buttonProps) => {
  return (
    <div>
      <button onClick={props.click}>{props.children}</button>
    </div>
  );
};

export default Button;
