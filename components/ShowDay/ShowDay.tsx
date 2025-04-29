type ShowDayType = "primary" | "secondary";

interface ShowDayProps {
  type?: ShowDayType;
  days: string[];
}

const Fulldays = {
  SUN: "일",
  MON: "월",
  TUE: "화",
  WED: "수",
  THU: "목",
  FRI: "금",
  SAT: "토",
};

const ShowDay = ({ days, type = "primary" }: ShowDayProps) => {
  return (
    <div className="flex gap-2 items-center">
      {Object.entries(Fulldays).map(([key, value]) => (
        <div
          key={key}
          className={`text-sm font-semibold ${
            days.includes(key)
              ? type === "primary"
                ? "text-[#7392C9]"
                : "text-[#30D1BD]"
              : "text-[#D7D7D7]"
          } `}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default ShowDay;
