import ApproveCard from "./ApproveCard";

const approveItems = [
  {
    name: "명수",
    image: "/basicProfile.png",
    requestedAt: "2025-05-15",
    requestMessage:
      "코딩스터디 언어: JavaScript, TypeScript\n코딩스터디 레벨: 초급\n선호하는 코딩테스트 사이트: 프로그래머스\n가능한 스터디 시간: 평일 저녁 8시~10시\n원하는 스터디 요일: 월, 수, 금\n이 스터디에 가입하고 싶은 이유: 혼자 공부하다 보니 동기 부여가 안 돼서 같이 꾸준히 해보고 싶어요. \n깃허브 아이디: yujin-dev \n사는 지역: 서울 강남구",
  },
  {
    name: "재석",
    image: "/basicProfile.png",
    requestedAt: "2025-05-15",
    requestMessage:
      "코딩스터디 언어: Python\n코딩스터디 레벨: 중급\n선호하는 코딩테스트 사이트: 백준\n가능한 스터디 시간: 주말 오전 10시~12시\n원하는 스터디 요일: 토, 일\n이 스터디에 가입하고 싶은 이유: 알고리즘 실력을 꾸준히 키워서 개발 직군으로 전향하고 싶습니다.\n깃허브 아이디: pycoco88\n사는 지역: 대구 수성구",
  },
  {
    name: "취준생",
    image: "/basicProfile.png",
    requestedAt: "2025-05-15",
    requestMessage:
      "코딩스터디 언어: Java, Kotlin\n코딩스터디 레벨: 고급\n선호하는 코딩테스트 사이트: LeetCode\n가능한 스터디 시간: 평일 오전 7시~8시 (출근 전)\n원하는 스터디 요일: 월~금\n이 스터디에 가입하고 싶은 이유: 실리콘밸리 취업을 목표로 꾸준히 LeetCode 문제를 풀고 싶어서 지원합니다.\n깃허브 아이디: backendpro\n사는 지역: 인천 연수구",
  },
  {
    name: "낙방여우",
    image: "/basicProfile.png",
    requestedAt: "2025-05-15",
    requestMessage:
      "코딩스터디 언어: JavaScript\n코딩스터디 레벨: 입문\n선호하는 코딩테스트 사이트: CodeUp\n가능한 스터디 시간: 오후 2시~4시\n원하는 스터디 요일: 월, 수\n이 스터디에 가입하고 싶은 이유: 프론트엔드 개발자로 취업 준비 중인데, 알고리즘이 약해서 함께 공부하고 싶습니다.\n깃허브 아이디: frontendhopeful\n사는 지역: 경기 고양시",
  },
];

const ApproveList = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      {approveItems.map((item, idx) => (
        <ApproveCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default ApproveList;
