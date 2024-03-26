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
} from "@mui/material";

interface IFeedbackModalProps {
  open: boolean;
  onClose: () => void;
}

const FeedbackModal = ({ open, onClose }: IFeedbackModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        Обратный звонок{" "}
        <IconButton style={{ float: "right" }} onClick={onClose}>
          <CloseIcon color="primary"></CloseIcon>
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Просто оставьте контакты и мы с вами свяжемся в ближайшее время!
        </DialogContentText>
        <Stack spacing={4} margin={4}>
          <TextField
            label="Как к Вам обращаться?"
            variant="outlined"
          ></TextField>
          <TextField label="Номер телефона" variant="outlined"></TextField>
          <Button type="submit" variant="contained">
            Отправить
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackModal;
