import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

const products = [
  { id: 1, name: "Shoes", description: "running shoes", price: 50 },
  { id: 2, name: "Shirt", description: "black t-shirt", price: 15 },
  { id: 3, name: "Hat", description: "wool hat", price: 5 },
];

export default function Products() {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
