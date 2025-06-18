"use client";

import {
  fetchCreateRecruitingPost,
  fetchRegisterStudy,
} from "@/api/studyRegister/studyRegister";
import StudyRegisterTag from "@/app/(default)/studyRegister/_component/studyRegisterTag";
import Button from "@/components/Button";
import Input from "@/components/Input/input";
import { useStudyRegisterForm } from "@/hooks/hooks/useStudyRegisterForm";
import { MeetingType } from "@/types/study";
import {
  LANGUAGE_MAP,
  LEVEL_MAP,
  MEETING_TYPE_MAP,
  DAY_MAP,
  PROBLEM_MAP,
  LanguageKey,
  ProblemKey,
  MeetingTypeKey,
  LevelKey,
  DayKey,
} from "@/utils/enumMaps";
import { validateStudyForm } from "@/utils/validateStudyForm";
import { useRouter } from "next/navigation";

const StudyRegister = () => {
  const router = useRouter();
  const form = useStudyRegisterForm();

  const handleCreate = async () => {
    const {
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
      capacity,
      endDate,
    } = form.getFormData();

    const mappedLanguages = languages.map(
      (l) => LANGUAGE_MAP[l as LanguageKey]
    );
    const mappedMainLanguage = mainLanguage
      ? LANGUAGE_MAP[mainLanguage as LanguageKey]
      : "";
    const mappedLevels = difficultyLevels.map((l) => LEVEL_MAP[l as LevelKey]);
    const mappedProblems = problemPlatforms.map(
      (p) => PROBLEM_MAP[p as ProblemKey]
    );
    const mappedMeetingType =
      MEETING_TYPE_MAP[meetingType as MeetingTypeKey] || "";
    const mappedDays = mainMeetingDays.map((d) => DAY_MAP[d as DayKey]);

    const error = validateStudyForm({
      title,
      description,
      applicationForm,
      languages: mappedLanguages,
      mainLanguage: mappedMainLanguage,
      difficultyLevels: mappedLevels,
      problemPlatforms: mappedProblems,
      meetingType: mappedMeetingType,
      meetingRegion,
      mainMeetingDays: mappedDays,
      capacity,
      endDate,
    });

    if (error) {
      alert(error);
      return;
    }

    try {
      const studyData = await fetchRegisterStudy({
        name: title,
        description,
        capacity,
        languages: mappedLanguages,
        difficultyLevels: mappedLevels,
        mainLanguage: mappedMainLanguage,
        problemPlatforms: mappedProblems,
        meetingType: mappedMeetingType,
        meetingRegion,
        mainMeetingDays: mappedDays,
      });

      const studyGroupId = studyData.studyGroup.id;

      const announcementData = await fetchCreateRecruitingPost({
        studyGroupId,
        title,
        description,
        recruitCapacity: capacity - 1,
        endDate,
        applicationFormContent: applicationForm,
      });

      const announcementId = announcementData.studyAnnouncement.id;

      router.push(`/studyRegisterDetail/${announcementId}`);
    } catch (error) {
      console.error("생성 중 오류 발생:", error);
      alert(
        error instanceof Error
          ? error.message
          : "알 수 없는 오류가 발생했습니다."
      );
    }
  };

  console.log("difficultyLevels:", form.difficultyLevels);
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-10">
      {/* 제목 */}
      <div className="mb-6 w-full max-w-[600px]">
        <Input
          variant="underline"
          id="title"
          value={form.title}
          onChange={(e) => form.setTitle(e.target.value)}
          placeholder="스터디 제목을 입력해주세요"
          className="py-3 text-3xl font-semibold border-gray-light"
        />
      </div>

      {/* 태그 및 설정 */}
      <StudyRegisterTag
        languages={form.languages}
        setLanguages={form.setLanguages}
        mainLanguage={form.mainLanguage}
        setMainLanguage={form.setMainLanguage}
        difficultyLevels={form.difficultyLevels}
        setDifficultyLevels={form.setDifficultyLevels}
        problemPlatforms={form.problemPlatforms}
        setProblemPlatforms={form.setProblemPlatforms}
        meetingType={form.meetingType}
        setMeetingType={form.setMeetingType}
        meetingRegion={form.meetingRegion}
        setMeetingRegion={form.setMeetingRegion}
        mainMeetingDays={form.mainMeetingDays}
        setMainMeetingDays={form.setMainMeetingDays}
        capacity={form.capacity}
        setCapacity={form.setCapacity}
        endDate={form.endDate}
        setEndDate={form.setEndDate}
      />

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
          value={form.description}
          placeholder="스터디를 간략하게 소개해주세요"
          onChange={(e) => form.setDescription(e.target.value)}
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
          value={form.applicationForm}
          onChange={(e) => form.setApplicationForm(e.target.value)}
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
