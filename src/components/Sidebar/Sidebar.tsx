import React, { useState } from "react";

import { useRouter } from "next/router";

import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";

import FeedbackModal from "components/FeedbackModal/FeedbackModal";

import { FEEDBACK_BUTTON_TEXT, PAGES } from "constants/common.constants";

import { useStyles } from "./styles";

interface ISidebarProps {
  showSidebar: boolean;
  onSidebarClick: () => void;
}

const Sidebar = ({ showSidebar, onSidebarClick }: ISidebarProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const classes = useStyles();
  const router = useRouter();

  const handleNavigate = (link: string): void => {
    router.push(link);
    onSidebarClick();
  };

  const handleOpenModal = (): void => {
    setOpenModal(true);
    onSidebarClick();
  };

  const handleCloseModal = (): void => {
    setOpenModal(false);
  };

  return (
    <React.Fragment>
      <Drawer
        classes={{ paper: classes.drawer }}
        anchor="right"
        open={showSidebar}
        onClose={onSidebarClick}
      >
        <IconButton className={classes.iconButton} onClick={onSidebarClick}>
          <CloseIcon fontSize="large" />
        </IconButton>

        <List className={classes.list}>
          {PAGES.map((page, index) => (
            <ListItemButton
              key={index}
              className={classes.listItemButton}
              onClick={() => handleNavigate(page.link)}
            >
              <Typography className={classes.listItemText}>
                {page.title}
              </Typography>
            </ListItemButton>
          ))}
        </List>

        <Box className={classes.footer}>
          <Button
            className={classes.footerButton}
            variant="contained"
            size="large"
            color="error"
            onClick={handleOpenModal}
          >
            <Typography className={classes.footerButtoText}>
              {FEEDBACK_BUTTON_TEXT}
            </Typography>
          </Button>
        </Box>
      </Drawer>
      <FeedbackModal open={openModal} onClose={handleCloseModal} />
    </React.Fragment>
  );
};

export default Sidebar;
