import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "src/components/layout/header/Header";
import { ProjectDetailItem } from "src/components/sections/projects/ProjectDetailItem";

export const ProjectDetail = ({ page }) => {
  const params = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`/api/projects/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProject(data.projects));
  }, [params.id]);
  return (
    <>
      <Header page={page} />
      <main>
        {project ? <ProjectDetailItem data={project} /> : <h2>Loading...</h2>}
      </main>
    </>
  );
};
