import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Header } from "src/components/layout/header/Header";
import { ProjectDetailItem } from "src/components/sections/projects/ProjectDetailItem";
import { GlovalContext } from "src/provider/provider";

export const ProjectDetail = ({ page }) => {
	const { projectId } = useParams();
	const { projects } = useContext(GlovalContext);
	const { files } = projects;
	const projectSelected = files.find((proj) => proj.id === projectId);

	return (
		<>
			<Header page={page} />
			<main>
				{projectSelected ? (
					<ProjectDetailItem data={projectSelected} />
				) : (
					<h2>Loading...</h2>
				)}
			</main>
		</>
	);
};
