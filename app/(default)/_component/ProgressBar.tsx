interface ProgressBarProps {
  label?: string;
  progress: number;
}

const getProcessColor = (progress: number) => {
  if (progress < 45) return "bg-green-light";
  if (progress < 75) return "bg-green-middle";
  return "bg-green-dark";
};

const ProgressBar = ({ label, progress }: ProgressBarProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-base font-semibold">
        {label} {progress}%
      </span>
      <div className="w-full h-2 bg-gray-light rounded-full overflow-hidden">
        <div
          className={`h-full ${getProcessColor(
            progress
          )} transition-all duration-300`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
