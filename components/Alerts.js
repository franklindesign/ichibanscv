import { Alert, AlertTitle } from "@material-ui/lab";

export default function Alerts() {
  return (
    <div style={{ marginTop: 20 }}>
      <Alert severity="info">
        <AlertTitle>Valued Patrons,</AlertTitle>Our patio is now open for
        outdoor dining. No All-You-Can-Eat (AYCE) options at this time.
        Questions? Give us a call.
      </Alert>
    </div>
  );
}
