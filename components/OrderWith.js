
import Grid from "@material-ui/core/Grid";

export default function OrderWith() {
  return (
    <div style={{ marginTop: 50, marginBottom:25 }}>
      <Grid container spacing={2} justifyContent="center"
        alignItems="center">
        <Grid item xs={12} >
          <div style={{textAlign: "center", fontWeight: 600, fontSize: 32}}>  Order Delivery:</div>

        </Grid>
        <Grid item xs={12} sm={3} align="center" >
          <a href="https://grubhub.com/restaurant/r/1437256" target="_blank"><img src="../static/grubhub_logo.png"></img></a>
        </Grid>
        <Grid item xs={12} sm={3} align="center">
          <a
            href="https://order.ubereats.com/los-angeles/food-delivery/Ichiban%20Sushi%20%26%20Bar/SSFugl8EQyqLzEvZdvo-Sw/?utm_source=web-restaurant-manager"
            target="_blank"> <img src="../static/ubereats_logo.png"></img></a>
        </Grid>
      </Grid>
    </div>
  );
}
