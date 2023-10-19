import { Outlet } from "react-router-dom";
import { GrainOverlay } from "src/components/grainOverlay/GrainOverlay";
export const MainLayout = () => {
	return (
		<>
			<Outlet />
			<GrainOverlay />
		</>
	);
};
