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
    <>
      <span className="text-base font-semibold">
        {label} {progress}%
      </span>
      <div className="w-full h-3 bg-gray-light rounded-full overflow-hidden">
        <div
          className={`h-full ${getProcessColor(
            progress
          )} transition-all duration-300`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
};

export default ProgressBar;
