import { Alert, AlertTitle } from "@material-ui/lab";

export default function Alerts() {
  return (
    <div style={{ marginTop: 25 }}>
      <Alert severity="info">
        <AlertTitle>Valued Patrons,</AlertTitle>Our menu has been updated. Come try our new items!
      </Alert>
    </div>
  );
}
