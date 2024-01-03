import { useContext } from "react";
import { Icons } from "src/components/icons/Icons";
import { GlovalContext } from "src/provider/provider";
export const SocialPill = () => {
	const { socials } = useContext(GlovalContext);

	return (
		<ul className="crossCenter gap-1">
			{socials?.map((item) => (
				<li key={item.id}>
					<a
						href={item.link}
						target="_blank"
						rel="noopener noreferrer"
						className="d-if"
					>
						<Icons icon={item.icon} styles="filltrans" />
						<span className="ml-1">{item.name}</span>
					</a>
				</li>
			))}
		</ul>
	);
};
