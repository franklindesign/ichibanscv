import { Alert, AlertTitle } from "@material-ui/lab";

export default function Alerts() {
  return (
    <div style={{ marginTop: 20 }}>
      <Alert severity="info">
        <AlertTitle>Valued Patrons,</AlertTitle>Our dining tables are available
        for dine-in once again. We encourage social distancing practices and
        masks to be worn before seating. Offer: 30% OFF Take-out and Happy Hour
        for sushi, sashimi, and rolls. Limited time offer: Free soft drinks for
        anyone dining-in until the end of June.
      </Alert>
    </div>
  );
}
