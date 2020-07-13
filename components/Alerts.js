import { Alert, AlertTitle } from "@material-ui/lab";

export default function Alerts() {
  return (
    <div style={{ marginTop: 20 }}>
      <Alert severity="info">
        <AlertTitle>Valued Patrons,</AlertTitle>Our patio is now open for
        outdoor seating. We're also offering: 30% OFF sushi, sashimi, and rolls
        for all diners. Questions? Give us a call.
      </Alert>
    </div>
  );
}
