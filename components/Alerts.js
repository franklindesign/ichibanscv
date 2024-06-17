import { Alert, AlertTitle } from "@material-ui/lab";

export default function Alerts() {
  return (
    <div style={{ marginTop: 25 }}>
      <Alert severity="info">
        <AlertTitle>Valued Patrons,</AlertTitle>Our patio is now open for
        outdoor dining. Questions? Give us a call at (661) 360-8526.
      </Alert>
    </div>
  );
}
