import { classNames } from "src/utils/classNames";
import styles from "./Titles.module.scss";

export const Titles = ({ children, variant, ...props }) => {
	const styleTitle = props.st;
	return (
		<div className={classNames(styles[variant], styleTitle)}>{children}</div>
	);
};
