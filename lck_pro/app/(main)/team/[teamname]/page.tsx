"use client";

const TeamPage = (props: any) => {
  console.log(props.params.teamname);

  return <div className="bg-white h-screen">{props.params.teamname}</div>;
};

export default TeamPage;
