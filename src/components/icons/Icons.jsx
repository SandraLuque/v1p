import { classNames } from "src/utils/classNames";
import styles from "./Icons.module.scss";
export const Icons = ({ icon, ...props }) => {
	const styleName = props.styles;
	return (
		<>
			{icon === "open" && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					className={classNames(styles.open, styles[styleName])}
					viewBox="0 0 24 24"
				>
					<title>{"open nav"}</title>
					<path d="M2 6h20M2 12h14M2 18h20" />
				</svg>
			)}
			{icon === "close" && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={24}
					height={24}
					fill="none"
					className={classNames(styles.close, styles[styleName])}
				>
					<title>{"close nav"}</title>
					<path d="m6 6 12 12m0-12L6 18" />
				</svg>
			)}
			{icon === "arrow_left" && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					data-name="Capa 2"
					viewBox="0 0 20.57 16.65"
					width={props.size}
					height={props.size}
					{...props}
				>
					<title>{"arrow_left"}</title>
					<path
						d="M20.28 9.71c.39.36.39.97 0 1.32l-5.92 5.36c-.38.35-.97.34-1.35 0l-5.8-5.32a.89.89 0 0 1 0-1.32c.34-.31.87-.31 1.21 0l4.4 4.03V1.7H.85a.85.85 0 1 1 0-1.7h12.82c.55 0 1 .45 1 1v12.74l4.4-4.04c.34-.31.87-.31 1.21 0Z"
						data-name="Capa 1"
					/>
				</svg>
			)}
			{icon === "google-play" && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={24}
					height={24}
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.0}
					className={styles[styleName]}
					{...props}
				>
					<title>{"google-play"}</title>
					<path stroke="none" d="M0 0h24v24H0z" />
					<path d="M4 3.71v16.58a.7.7 0 0 0 1.05.606l14.622-8.42a.55.55 0 0 0 0-.953L5.05 3.104A.7.7 0 0 0 4 3.711zM15 9 4.5 20.5M4.5 3.5 15 15" />
				</svg>
			)}
			{icon === "world-www" && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={24}
					height={24}
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.0}
					className={styles[styleName]}
					{...props}
				>
					<title>{"google-play"}</title>
					<path stroke="none" d="M0 0h24v24H0z" />
					<path d="M19.5 7A9 9 0 0 0 12 3a8.991 8.991 0 0 0-7.484 4" />
					<path d="M11.5 3a16.989 16.989 0 0 0-1.826 4M12.5 3a16.989 16.989 0 0 1 1.828 4M19.5 17a9 9 0 0 1-7.5 4 8.991 8.991 0 0 1-7.484-4" />
					<path d="M11.5 21a16.989 16.989 0 0 1-1.826-4M12.5 21a16.989 16.989 0 0 0 1.828-4M2 10l1 4 1.5-4L6 14l1-4M17 10l1 4 1.5-4 1.5 4 1-4M9.5 10l1 4 1.5-4 1.5 4 1-4" />
				</svg>
			)}
			{icon === "linkedin" && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={24}
					height={24}
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					className={styles[styleName]}
					{...props}
				>
					<title>{"linkedin"}</title>
					<path stroke="none" d="M0 0h24v24H0z" />
					<path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM8 11v5M8 8v.01M12 16v-5" />
					<path d="M16 16v-3a2 2 0 0 0-4 0" />
				</svg>
			)}
			{icon === "github" && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={24}
					height={24}
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					className={styles[styleName]}
					{...props}
				>
					<title>{"github"}</title>
					<path stroke="none" d="M0 0h24v24H0z" />
					<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
				</svg>
			)}
		</>
	);
};
