import React, { Fragment, lazy, Suspense } from "react";
import MasterLayout from "../Components/MasterLayout";
import LazyLoader from "../Components/ShowLoader/LazyLoader";
const ItemOne = lazy(() => import("../Components/ItemOne"));

const ItemOnePage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <ItemOne />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};
export default ItemOnePage;
