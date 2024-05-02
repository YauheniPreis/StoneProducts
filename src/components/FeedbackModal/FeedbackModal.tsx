import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useStyles } from "./styles";

interface IFeedbackModalProps {
  open: boolean;
  onClose: () => void;
}

const FeedbackModal = ({ open, onClose }: IFeedbackModalProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="md"
    >
      <IconButton className={classes.closeButton} onClick={onClose}>
        <CloseIcon className={classes.closeIcon}></CloseIcon>
      </IconButton>
      <DialogTitle className={classes.title}>Обратный звонок</DialogTitle>
      <DialogContent className={classes.content}>
        <DialogContentText className={classes.description}>
          Просто оставьте контакты и мы с вами свяжемся в ближайшее время!
        </DialogContentText>
        <Stack className={classes.form} spacing={4}>
          <TextField
            label="Как к Вам обращаться?"
            variant="outlined"
          ></TextField>
          <TextField label="Номер телефона" variant="outlined"></TextField>
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            size="large"
            color="error"
          >
            <Typography className={classes.buttonText}>Отправить</Typography>
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackModal;
