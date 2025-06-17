"use client";

import StudyRegisterTag from "@/app/(default)/studyRegister/_component/studyRegisterTag";
import Input from "@/components/Input/input";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  fetchCreateRecruitingPost,
  fetchRegisterStudy,
} from "@/api/studyRegister/studyRegister";
import { DayType } from "@/types/day";
import { MeetingType } from "@/types/study";
import { validateStudyForm } from "@/utils/validateStudyForm";

const StudyRegister = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [applicationForm, setApplicationForm] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [mainLanguage, setMainLanguage] = useState("");
  const [difficultyLevels, setDifficultyLevels] = useState<string[]>([]);
  const [problemPlatforms, setProblemPlatforms] = useState<string[]>([]);
  const [meetingType, setMeetingType] = useState<MeetingType | "">("");
  const [meetingRegion, setMeetingRegion] = useState("");
  const [mainMeetingDays, setMainMeetingDays] = useState<DayType[]>([]);

  const handleCreate = async () => {
    const error = validateStudyForm({
      title,
      description,
      applicationForm,
      languages,
      mainLanguage,
      difficultyLevels,
      problemPlatforms,
      meetingType,
      meetingRegion,
      mainMeetingDays,
    });

    if (error) {
      alert(error);
      return;
    }

    try {
      const studyData = await fetchRegisterStudy({
        name: title,
        description,
        capacity: 5,
        languages,
        difficultyLevels,
        mainLanguage,
        problemPlatforms,
        meetingType: meetingType as MeetingType,
        meetingRegion,
        mainMeetingDays,
      });

      const studyGroupId = studyData.studyGroup.id;

      await fetchCreateRecruitingPost({
        studyGroupId,
        title,
        description,
        recruitCapacity: 5,
        endDate: new Date().toISOString(),
        applicationFormContent: applicationForm,
      });

      router.push(`/study/${studyGroupId}`);
    } catch (error) {
      console.error("생성 중 오류 발생:", error);
      alert(
        error instanceof Error
          ? error.message
          : "알 수 없는 오류가 발생했습니다."
      );
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-10">
      {/* 제목 */}
      <div className="mb-6 w-full max-w-[600px]">
        <Input
          variant="underline"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="스터디 제목을 입력해주세요"
          className="py-3 text-3xl font-semibold border-gray-light"
        />
      </div>

      {/* 태그 및 설정 */}
      <StudyRegisterTag />

      {/* 스터디 소개 */}
      <div className="mt-10 w-full max-w-[600px]">
        <label
          htmlFor="introduction"
          className="font-bold text-black block mb-2"
        >
          스터디 소개 <span className="text-red">*</span>
        </label>
        <textarea
          id="description"
          value={description}
          placeholder="스터디를 간략하게 소개해주세요"
          onChange={(e) => setDescription(e.target.value)}
          className="w-full h-[200px] p-3 border border-gray-light rounded-md focus:outline-none focus:border-green-middle resize-none"
        />
      </div>

      {/* 스터디 신청 양식 */}
      <div className="mt-10 w-full max-w-[600px]">
        <label
          htmlFor="applicationForm"
          className="font-bold text-black block mb-2"
        >
          스터디 신청 양식 <span className="text-red">*</span>
        </label>
        <textarea
          id="applicationForm"
          value={applicationForm}
          onChange={(e) => setApplicationForm(e.target.value)}
          placeholder={`코딩스터디 언어:\n코딩스터디 레벨:\n선호하는 코딩테스트 사이트:\n가능한 스터디 시간:\n원하는 스터디 요일:\n이 스터디에 가입하고 싶은 이유:\n깃허브 아이디:\n사는 지역:`}
          className="w-full h-[240px] p-3 border border-gray-light rounded-md focus:outline-none focus:border-green-middle resize-none"
        />
      </div>

      {/* 버튼 영역 */}
      <div className="mt-10 flex gap-4">
        <Button variant="outlined" className="px-6 py-2">
          임시저장
        </Button>
        <Button className="px-6 py-2" onClick={handleCreate}>
          생성하기
        </Button>
      </div>
    </div>
  );
};

export default StudyRegister;
