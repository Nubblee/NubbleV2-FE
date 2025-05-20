"use client";
import { redirect, useParams } from "next/navigation";

const RedirectTab = () => {
  const params = useParams();
  const title = params.title;

  redirect(`/study/${title}/management/members`);
};

export default RedirectTab;
