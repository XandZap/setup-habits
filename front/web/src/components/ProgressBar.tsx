import * as Progress from "@radix-ui/react-progress";

interface ProgressBarProps {
  progress: number;
}
function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <Progress.Root className="h-3 rounded-xl bg-zinc-700 w-full mt-4 overflow-hidden">
      <Progress.Indicator
        className="h-3 rounded-xl bg-violet-700 transition-transform delay-500"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
}

export default ProgressBar;
