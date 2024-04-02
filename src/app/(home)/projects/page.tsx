import { Header } from "@/components/header";
import Projects from "@/components/projects";
import { client } from "@/lib/sanity";
import { projectsQuery } from "@/utils/query";
import type { Projects as ProjectsType } from "@/app/types/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "My latest projects and collaborations with the open-source community.",
};

const ProjectsPage = async () => {
  const projects = (await client.fetch<ProjectsType[]>(projectsQuery)) ?? [];
  return (
    <section>
      <Header
        page
        title="Projects"
        description="My latest projects and collaborations with the open-source community."
      />
      <Projects projects={projects} />
    </section>
  );
};

export default ProjectsPage;
