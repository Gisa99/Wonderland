import { Link } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import IconButton from "@mui/material/IconButton";

const Logout = () => {
  return (
    <Link to="/login">
      <IconButton
        sx={{
          "& .MuiSvgIcon-root": {
            color: "#351C59", // Cor padrão
          },
          "&:hover .MuiSvgIcon-root": {
            color: "#F2913D", // Cor no hover
          },
        }}
      >
        <ExitToAppIcon />
      </IconButton>
    </Link>
  );
};

export default Logout;
