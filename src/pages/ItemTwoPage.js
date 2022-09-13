import React, {Fragment, lazy, Suspense} from 'react';
import LazyLoader from '../Components/ShowLoader/LazyLoader';
import MasterLayout from "../Components/MasterLayout";
const ItemTwo =lazy(() => import('../Components/ItemTwo'));

const ItemTwoPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader />}>
                    <ItemTwo/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ItemTwoPage;

