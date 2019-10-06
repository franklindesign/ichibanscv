import MailchimpForm from "../components/Mailchimp";
import Layout from "../components/Layout";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100vh"
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Emails() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <MailchimpForm></MailchimpForm>
      </div>
    </Layout>
  );
}

// <!-- Begin Mailchimp Signup Form -->
// <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
// <style type="text/css">
// 	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
// 	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
// 	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
// </style>
// <div id="mc_embed_signup">
// <form action="https://facebook.us3.list-manage.com/subscribe/post?u=1d5a47e0c5045755b31f3e12b&amp;id=c463e52d9b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//     <div id="mc_embed_signup_scroll">
// 	<h2>Subscribe</h2>
// <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
// <div class="mc-field-group">
// 	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
// </label>
// 	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
// </div>
// <div class="mc-field-group">
// 	<label for="mce-FNAME">First Name  <span class="asterisk">*</span>
// </label>
// 	<input type="text" value="" name="FNAME" class="required" id="mce-FNAME">
// </div>
// <div class="mc-field-group">
// 	<label for="mce-LNAME">Last Name </label>
// 	<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
// </div>
// <div class="mc-field-group size1of2">
// 	<label for="mce-MMERGE3-month">Birthday </label>
// 	<div class="datefield">
// 		<span class="subfield monthfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="MM" size="2" maxlength="2" name="MMERGE3[month]" id="mce-MMERGE3-month"></span> /
// 		<span class="subfield dayfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="DD" size="2" maxlength="2" name="MMERGE3[day]" id="mce-MMERGE3-day"></span>
// 		<span class="small-meta nowrap">( mm / dd )</span>
// 	</div>
// </div>	<div id="mce-responses" class="clear">
// 		<div class="response" id="mce-error-response" style="display:none"></div>
// 		<div class="response" id="mce-success-response" style="display:none"></div>
// 	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
//     <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_1d5a47e0c5045755b31f3e12b_c463e52d9b" tabindex="-1" value=""></div>
//     <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
//     </div>
// </form>
// </div>

// <!--End mc_embed_signup--></div>
