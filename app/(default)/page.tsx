import ProfileImage from "@/components/ProfileImage";

export default function Home() {
  return (
    <div className="flex justify-center">
      너블 홈
      <ProfileImage type="circle" size={72} />
      <ProfileImage src="/nubble.png" type="rounded" size={72} />
    </div>
  );
}
