import React from "react";
import {
  Button,
  TableHome,
  TDHome,
  THHome,
  TRHome,
} from "../../../../components";

const HomeScreenProductTable = (props) => {
  return (
    <TableHome>
      <thead>
        <TRHome>
          <THHome>Product ID</THHome>
          <THHome>Product Name</THHome>
          <THHome>Product Price</THHome>
          <THHome>Edit</THHome>
          <THHome>Delete</THHome>
        </TRHome>
      </thead>
      <tbody>
        {props.homeState.displayData.map((data) => (
          <TRHome key={data.id}>
            <TDHome>{data.productId}</TDHome>
            <TDHome>{data.name}</TDHome>
            <TDHome>{data.price}</TDHome>
            <TDHome>
              <Button
                height="2rem"
                padding="0 0.5rem"
                backgroundColor="green"
                onClick={() => {
                  props.homeButtonHandlers.navToProduct(data.id);
                }}
              >
                edit
              </Button>
            </TDHome>
            <TDHome>
              <Button
                height="2rem"
                padding="0 0.5rem"
                backgroundColor="red"
                onClick={() => {
                  props.homeButtonHandlers.handleDeleteProduct(data.id);
                }}
              >
                delete
              </Button>
            </TDHome>
          </TRHome>
        ))}
      </tbody>
    </TableHome>
  );
};

export default HomeScreenProductTable;
