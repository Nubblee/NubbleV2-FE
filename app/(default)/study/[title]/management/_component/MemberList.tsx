import MemberCard from "./MemberCard";

const MemberData = [
  {
    name: "명수",
    written: 32,
    reviews: 18,
    recently: "2025.01.19",
  },
  {
    name: "명수",
    written: 32,
    reviews: 18,
    recently: "2025.01.19",
  },
  {
    name: "명수",
    written: 32,
    reviews: 18,
    recently: "2025.01.19",
  },
  {
    name: "명수",
    written: 32,
    reviews: 18,
    recently: "2025.01.19",
  },
  {
    name: "명수",
    written: 32,
    reviews: 18,
    recently: "2025.01.19",
  },
  {
    name: "명수",
    written: 32,
    reviews: 18,
    recently: "2025.01.19",
  },
  {
    name: "명수",
    written: 32,
    reviews: 18,
    recently: "2025.01.19",
  },
  {
    name: "명수",
    written: 32,
    reviews: 18,
    recently: "2025.01.19",
  },
  {
    name: "명수",
    written: 32,
    reviews: 18,
    recently: "2025.01.19",
  },
];

const MemberList = () => {
  return (
    <>
      {MemberData.map((member, idx) => (
        <MemberCard key={idx} {...member} />
      ))}
    </>
  );
};

export default MemberList;
