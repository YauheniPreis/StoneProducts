import React, { useState } from "react";

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

import { enableYM } from "../YandexMetrika/YandexMetrika";
import { useStyles } from "./styles";

interface IFeedbackModalProps {
  open: boolean;
  onClose: () => void;
}

const FeedbackModal = ({ open, onClose }: IFeedbackModalProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const sendEmail = async (): Promise<void> => {
    const formValues = { name, phoneNumber };

    let result;
    try {
      if (enableYM) {
        // window.ym(process.env.YM_ID, "reachGoal", "1234567");
      }
      const data = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await data.json();
    } catch (error) {
      result = { message: `Failed: ${error}` };
    }

    alert(result.message);
  };

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
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></TextField>
          <TextField
            label="Номер телефона"
            variant="outlined"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          ></TextField>
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            size="large"
            color="error"
            disabled={!name || !phoneNumber}
            onClick={sendEmail}
          >
            <Typography className={classes.buttonText}>Отправить</Typography>
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackModal;
