import { Alert, AlertTitle } from "@material-ui/lab";

export default function Alerts() {
  return (
    <div style={{ marginTop: 20 }}>
      <Alert severity="info">
        <AlertTitle>Valued Patrons,</AlertTitle>Our patio is now open for
        outdoor dining. No All-You-Can-Eat options at this time. But we are
        offering: 20% OFF sushi, sashimi, and rolls for all outdoor diners.
        Questions? Give us a call.
      </Alert>
    </div>
  );
}
