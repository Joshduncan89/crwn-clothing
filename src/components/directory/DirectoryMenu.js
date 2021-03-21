import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "../menu-items/MenuItem";
import "./directoryMenu.styles.scss";

const DirectoryMenu = () => {
  const { sections } = useSelector((state) => state.directory);

  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default DirectoryMenu;
