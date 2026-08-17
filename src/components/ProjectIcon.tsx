import {
  Archive,
  BookOpen,
  FlaskConical,
  Library,
  Link2,
  PenLine,
  Search,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Project } from "@/data/projects";

const map: Record<Project["icon"], LucideIcon> = {
  book: BookOpen,
  pen: PenLine,
  users: Users,
  search: Search,
  archive: Archive,
  library: Library,
  flask: FlaskConical,
  link: Link2,
};

export function ProjectIcon({ name, className = "" }: { name: Project["icon"]; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} aria-hidden="true" />;
}
