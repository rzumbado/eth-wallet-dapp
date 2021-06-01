import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { MyWeb3Service, WindowRefService } from './services';
import { ConnectView, MyMoneyView } from './views';

@NgModule({
    declarations: [
        AppComponent,
        ConnectView,
        MyMoneyView
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        MyWeb3Service,
        WindowRefService
    ],
    bootstrap: [AppComponent]
})
export class AppModule
{
}
