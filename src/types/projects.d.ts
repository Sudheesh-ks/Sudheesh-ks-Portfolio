export type ProjectTag = {
  label: string;
  cls: string;
};

export type Project = {
  id: number;
  image: string;
  placeholder: string;
  title: string;
  desc: string;
  tags: ProjectTag[];
  link: string;
  livelink?: string;
  hero: boolean;
};

export type ProjectCardProps = {
  project: Project;
  hero?: boolean;
  delay?: number;
};