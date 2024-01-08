import React  from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>Title</h1>
      <div>{children}</div>
    </>
  );
};

export default ProfileLayout;
