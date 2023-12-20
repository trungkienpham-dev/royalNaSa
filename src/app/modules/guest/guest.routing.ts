import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../guest/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./category/category.module').then((m) => m.CategoryModule)
  },
  {
    path: 'introduce',
    loadChildren: () =>
      import('./introduce/introduce.module').then((m) => m.IntroduceModule)
  },
  {
    path: 'quotation',
    loadChildren: () =>
      import('./quotation/quotation.module').then((m) => m.QuotationModule)
  },
  {
    path: 'q&a',
    loadChildren: () =>
      import('./qa/qa.module').then((m) => m.QAModule)
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule)
  }
]

export const GuestRoutes = RouterModule.forChild(routes);
