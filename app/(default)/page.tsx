import Button from "@/components/Button";
import Input from "@/components/Input/input";

export default function Home() {
  return (
    <div className="text-2xl font-bold w-[300px] ">
      너블 홈
      <Input validMessage="성공입니다" />
      <Button variant="primary" className="mr-1">
        로그인
      </Button>
      <Button variant="secondary" className="mr-1">
        회원가입
      </Button>
      <Button variant="outlined">로그아웃</Button>
    </div>
  );
}
