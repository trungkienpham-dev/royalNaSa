// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { of } from 'rxjs';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import { AdminSmtService } from '../services/adminSmt.service';
// import * as AdminSmtAction from './actions'

// @Injectable()
// export class AdminSMTEffects {

//   findNations = createEffect(() =>
//     this.actions$.pipe(
//         ofType(AdminSmtAction.FindCrrSmt),
//         mergeMap(({ payload }) =>
//           this.adminSMTService.findCrrSmt(payload).pipe(
//             map((res:any) =>
//               AdminSmtAction.FindCrrSmtSuccess({ success: res })
//             ),
//             catchError((error) =>
//               of(AdminSmtAction.FindCrrSmtFail(( error )))
//             )
//           )
//         )
//     )
//   );

//   constructor(
//     private actions$: Actions,
//     private adminSMTService: AdminSmtService
//   ) { }
// }
