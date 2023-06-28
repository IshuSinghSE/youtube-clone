import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{zIndex: 1000, position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography variant="h4" fontWeight="bold" ml={1} sx={{letterSpacing: '-1px', color: "white" }}>
        YouTube
      </Typography>
      <Typography variant="button"  ml={0.7} mb={1.5} sx={{fontWeight:"bold", color: "grey" }}>
      <sup>IN</sup>
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
