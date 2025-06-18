import { apiClient, ServerClient } from "@/api/apiClient";
import { apiEndPoints } from "@/api/apiEndPoints";
import { CreateRecruitingPostParams, RegisterStudyParams } from "@/types/study";
import axios from "axios";

//스터디 생성
export const fetchRegisterStudy = async ({
  name,
  description,
  capacity,
  languages,
  difficultyLevels,
  mainLanguage,
  problemPlatforms,
  meetingType,
  meetingRegion,
  mainMeetingDays,
}: RegisterStudyParams) => {
  try {
    const res = await apiClient.post(
      apiEndPoints.STUDY.REGISTER,
      {
        name,
        description,
        capacity,
        languages,
        difficultyLevels,
        mainLanguage,
        problemPlatforms,
        meetingType,
        meetingRegion,
        mainMeetingDays,
      },
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data) {
        throw new Error(error.response.data.detail);
      }
    }
    throw new Error("스터디 생성 중 오류가 발생했습니다.");
  }
};

//모집공고 생성
export const fetchCreateRecruitingPost = async ({
  studyGroupId,
  title,
  description,
  recruitCapacity,
  endDate,
  applicationFormContent,
}: CreateRecruitingPostParams) => {
  try {
    const res = await apiClient.post(
      apiEndPoints.STUDY.ANNOUNCEMENT_POST,
      {
        studyGroupId,
        title,
        description,
        recruitCapacity,
        endDate,
        applicationFormContent,
      },
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data) {
        throw new Error(error.response.data.detail);
      }
    }
    throw new Error("모집공고 생성 중 오류가 발생했습니다.");
  }
};

//모집공고 조회
export const fetchGetAnnouncement = async (announcementId: string) => {
  try {
    const endpoint = apiEndPoints.STUDY.ANNOUNCEMENT_GET.replace(
      "{announcementId}",
      announcementId
    );

    const res = await ServerClient.get(endpoint, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("실제 axios 에러:", error);
    if (axios.isAxiosError(error)) {
      if (error.response?.data) {
        throw new Error(error.response.data.detail);
      }
    }
    throw new Error("모집공고 조회 중 오류가 발생했습니다.");
  }
};
