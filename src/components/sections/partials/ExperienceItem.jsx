export const ExperienceItem = ({ experiencie, clases }) => {
	const { title, description, link, date } = experiencie;
	return (
		<>
			<div className={clases}>{""}</div>
			<time className="color">{date}</time>
			<h4 className="fn-h mt-2">{title}</h4>
			<p>{description}</p>
		</>
	);
};
