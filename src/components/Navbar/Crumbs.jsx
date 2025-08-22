import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";

const Crumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link component={RouterLink} to="/">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography key={to} color="text.primary">
            {value}
          </Typography>
        ) : (
          <Link key={to} component={RouterLink} to={to}>
            {value}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Crumbs;