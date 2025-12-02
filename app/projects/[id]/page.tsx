
//src/app/projects/[id]/page.tsx
import { getProjectById } from "../../../src/components/data/projects";
import ProjectPageClient from "./ProjectPageClient";

export default async function Page({ params }: { params: { id: string } }) {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.id);

  return <ProjectPageClient project={project} />;
}