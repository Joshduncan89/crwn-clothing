import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../../actions/cartActions";
import LoadingSpinner from "../loading/LoadingSpinner";
import {
  Container,
  Card,
  CardMedia,
  Grid,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#e0e0e0",
    borderRadius: "12px",
  },
  divider: {
    backgroundColor: "grey",
    width: "100%",
    height: "1px",
    marginTop: "9px",
    marginBottom: "9px",
  },
  descriptor: {
    color: "",
    fontSize: ".9em",
    fontWeight: "bold",
  },
  button: {
    minWidth: "165px",
    padding: " 0 12px 0 12px",
    fontSize: "13px",
    backgroundColor: "black",
    color: "white",
    fontFamily: "Open Sans Condensed",
    width: "auto",
    height: "50px",
    fontWeight: "bolder",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
      border: "1px solid black",
    },
  },
}));

const CollectionProduct = ({ match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const productId = match.params.itemId;

  const shop = useSelector((state) => state.shop);
  const { collections: shopData } = shop;

  useEffect(() => {
    const getId = (value) => {
      const obj = shopData.find((obj) => {
        return obj.items.some((i) => i._id === value);
      });
      if (obj) {
        setProduct(
          obj.items.find((i) => {
            return i._id === value;
          })
        );
      }
    };
    getId(productId);
    setLoading(false);
  }, [shopData, productId, product]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Container maxWidth='md' className={classes.container}>
          <Grid container alignItems='center' direction='column' spacing={4}>
            <Grid item>
              <Card>
                <CardMedia
                  title='image-title'
                  image={product.imageUrl}
                  style={{
                    maxWidth: "300px",
                    maxHeight: "350px",
                  }}
                  component='img'
                />
              </Card>
              <Grid item>
                <Divider className={classes.divider} />
              </Grid>
              <Grid item>
                <Typography className={classes.descriptor}>
                  ${product.price} - {product.name}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Grid container justify='center' spacing={2}>
            <Grid item>
              <Button
                className={classes.button}
                onClick={() => dispatch(addItemToCart(product))}
              >
                ADD TO CART
              </Button>
            </Grid>
            <Grid item>
              <Button className={classes.button}>BACK</Button>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default CollectionProduct;
