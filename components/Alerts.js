import { Alert, AlertTitle } from "@material-ui/lab";

export default function Alerts() {
  return (
    <div style={{ marginTop: 20 }}>
      <Alert severity="info">
        <AlertTitle>Valued Patrons,</AlertTitle>
        We will continue to open our doors for take-out orders and delivery
        only. Get free delivery with Uber Eats. 30% OFF discount for sushi,
        sashimi, rolls, and appetizers.
      </Alert>
    </div>
  );
}
