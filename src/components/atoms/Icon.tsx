import type { IconType } from "react-icons";
import {
  FiBookOpen,
  FiCheckCircle,
  FiClipboard,
  FiCode,
  FiCpu,
  FiFileText,
  FiGitBranch,
  FiGitPullRequest,
  FiGlobe,
  FiLayers,
  FiSearch,
  FiShield,
  FiTarget,
  FiTerminal,
  FiTrello,
} from "react-icons/fi";

const icons: Record<string, IconType> = {
  book: FiBookOpen,
  branch: FiGitBranch,
  check: FiCheckCircle,
  clipboard: FiClipboard,
  code: FiCode,
  cpu: FiCpu,
  file: FiFileText,
  globe: FiGlobe,
  layers: FiLayers,
  pr: FiGitPullRequest,
  search: FiSearch,
  shield: FiShield,
  target: FiTarget,
  terminal: FiTerminal,
  trello: FiTrello,
};

interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const Component = icons[name] ?? FiCode;
  return <Component className={className} aria-hidden="true" />;
}
