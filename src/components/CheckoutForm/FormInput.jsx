import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";

export default function FormInput({ name, label, required }) {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        control={control}
        render={() => (
          <TextField name={name} label={label} required={required} fullWidth />
        )}
      />
    </Grid>
  );
}
