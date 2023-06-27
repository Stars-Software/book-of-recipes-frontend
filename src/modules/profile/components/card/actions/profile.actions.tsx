import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { ChangeAvatar } from "./forms/avatar";
import ChangePasswordForm from "./forms/password";

const ProfileSettings = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Password</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ChangePasswordForm />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Avatar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ChangeAvatar />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ProfileSettings;
