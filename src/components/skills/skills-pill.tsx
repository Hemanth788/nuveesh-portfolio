import { FC, SVGProps } from "react";

export type SkillPillProps = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>> | null;
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon: Icon } = props;
  return (
    <div className="flex items-center gap-2 px-4 py-3 overflow-hidden text-sm bg-white border rounded-lg shadow-sm w-max border-accent/20 dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg">
      {Icon && <Icon className="w-5 h-5 sm:h-8 sm:w-8" />}
      <span className="font-medium">{name}</span>
    </div>
  );
}
