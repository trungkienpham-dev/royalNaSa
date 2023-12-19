// import { createReducer, on } from '@ngrx/store';
// import * as AdminSmtAction from './actions'

// export const AdminSMTFeatureKey = 'adminSMT';
// export interface AdminSMTState {
//   dataCrrSmt: {};
// }
// export const initialState: AdminSMTState = {
//   dataCrrSmt: {}
// };

// export const AdminSMTReducer = createReducer(
//     initialState,
//     on(AdminSmtAction.FindCrrSmt, (state, _) => ({
//       ...state,
//       loading: true
//     })),
//     on(AdminSmtAction.FindCrrSmtSuccess, (state, { success }) => {
//       return {
//         ...state,
//         dataCrrSmt: success.data,
//       }
//     }),
//     on(AdminSmtAction.FindCrrSmtFail, (state, { error }) => ({
//       ...state,
//       error
//     })),
// )
