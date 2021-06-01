import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectView, MyMoneyView } from './views';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/connect',
        pathMatch: 'full'
    },
    {
        path: 'connect',
        component: ConnectView
    },
    {
        path: 'my-money',
        component: MyMoneyView
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule
{
}
