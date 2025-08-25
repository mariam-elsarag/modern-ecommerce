import React from "react";
import type { AvatarPropsType } from "./Avatar.types";

const Avatar = ({ avatar, fullName }: AvatarPropsType) => {
  const base = `w-[48px] h-[48px] rounded-full flex items-center justify-center text-center`;
  const nameArray = fullName?.split(" ");
  const name = nameArray ? `${nameArray[0][0]} ${nameArray[1][0]}` : "";
  return (
    <figure className={`${base}`}>
      {avatar ? (
        <img
          src={avatar}
          alt="avatar"
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <p className="w-full h-full rounded-full flex items-center justify-center text-center bg-primary-100 text-primary-900 body">
          {name}
        </p>
      )}
    </figure>
  );
};

export default Avatar;
