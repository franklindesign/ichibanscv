import UberEats from "./UberEats";
import GrubHub from "./GrubHub";
import Grid from "@material-ui/core/Grid";

export default function OrderWith() {
  return (
    <div style={{ marginTop: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} container justify="center">
          Want to order online? Delivery/Pickup:
        </Grid>
        <Grid item xs={12} sm={6}>
          <GrubHub></GrubHub>
        </Grid>
        <Grid item xs={12} sm={6}>
          <UberEats></UberEats>
        </Grid>
      </Grid>
    </div>
  );
}
