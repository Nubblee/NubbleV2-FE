import { redirect } from "next/navigation";

const Page = () => {
  redirect("/study/[title]/management/members");
};

export default Page;
