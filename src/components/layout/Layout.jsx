import { AnimatePresence } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>
    </div>
  );
}

export default Layout;