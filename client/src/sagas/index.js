import { call, all } from 'redux-saga/effects';
import { fetchOrders } from './order';
import { fetchProductCategories, fetchProducts, fetchProductDetails } from './product';
import { fetchSalesReportProducts, fetchSalesReportCategories } from './report';
import { fetchDashboardData } from './dashboard';

export default function* rootSaga() {
  yield all([
    call(fetchOrders),
    call(fetchProductCategories),
    call(fetchProducts),
    call(fetchProductDetails),
    call(fetchDashboardData),
    call(fetchSalesReportProducts),
    call(fetchSalesReportCategories),
  ]);
}
