import React from "react";
import "./SideOption.scss";
export default function SideOption({ title, Icon, background,font }) {
  return (
    <div className="side-option">
      {Icon ? (
        <Icon
          style={{ background: background }}
          className={
            !background ? " side-option-icon " : "side-option-icon theme"
          }
        />
      ) : (
        <></>
      )}
      <p style={{fontFamily : font ? 'Gotham Light' : 'Gotham Black'}}>{title}</p>
    </div>
  );
}
