import Button from "@/components/Button";
import StudyRegisterDetailTag from "./_component/studyRegisterDetailTag";
import { fetchGetAnnouncement } from "@/api/studyRegister/studyRegister";

type Props = {
  params: Promise<{ id: string }>;
};

const StudyDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  console.log("params in page:", params);

  const data = await fetchGetAnnouncement(id);
  const announcement = data.studyAnnouncement.announcement;
  const studyGroup = data.studyAnnouncement.studyGroup;
  // const meta = data.studyAnnouncement.meta;

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-10">
      {/* 제목 */}
      <div className="mb-6 w-full max-w-[600px] border-b-1 border-gray-middle pb-6">
        <div className="flex justify-between items-end">
          <div className="text-3xl font-bold">{announcement.title}</div>
          <p className="text-gray-middle text-sm self-end">
            {announcement.createdAt.split("T")[0]}
          </p>
        </div>
      </div>
      {/* 스터디 정보 */}
      <div className="w-full max-w-[600px] flex flex-col border-b-1 border-gray-middle pb-6">
        <StudyRegisterDetailTag
          languages={studyGroup.languages}
          levels={studyGroup.difficultyLevels}
          platforms={studyGroup.problemPlatforms}
          meetingType={studyGroup.meetingType}
          region={studyGroup.meetingRegion}
          days={studyGroup.mainMeetingDays}
          capacity={announcement.recruitCapacity}
          endDate={announcement.endDate}
        />
      </div>
      <div className="mt-6 w-full max-w-[600px] whitespace-pre-wrap">
        {announcement.description}
      </div>
      <div className="mt-6 w-full max-w-[600px] flex gap-4 justify-center">
        <Button variant="outlined">모집마감</Button>
        <Button>수정하기</Button>
      </div>
    </div>
  );
};

export default StudyDetailPage;
