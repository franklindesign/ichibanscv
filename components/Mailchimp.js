import Mailchimp from "react-mailchimp-form";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function MailchimpForm() {
  const classes = useStyles();
  return (
    <Mailchimp
      action="https://facebook.us3.list-manage.com/subscribe/post?u=1d5a47e0c5045755b31f3e12b&amp;id=c463e52d9b"
      fields={[
        {
          name: "EMAIL",
          placeholder: "Email",
          type: "email",
          required: true
        },
        {
          name: "FNAME",
          placeholder: "name",
          type: "text",
          required: true
        }
      ]}
      messages={{
        sending: "Sending...",
        success: "Thank you for subscribing!",
        error: "An unexpected internal error has occurred.",
        empty: "You must write an e-mail.",
        duplicate: "Too many subscribe attempts for this email address",
        button: "Subscribe!"
      }}
    />
  );
}
