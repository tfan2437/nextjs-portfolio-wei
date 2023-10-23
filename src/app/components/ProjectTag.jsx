import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-[#ffffff] hover:text-[#3342ED] text-[#3342ED] border-[#3342ED] bg-transparent"
    : "text-[#ffffff] bg-[#3342ED] hover:text-[#3342ED]";
  return (
    <button
      className={`${buttonStyles} font-found-bold border-2 border-[#000000] rounded-sm ml-2 px-6 py-1 text-xl cursor-pointer bg-transparent`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
