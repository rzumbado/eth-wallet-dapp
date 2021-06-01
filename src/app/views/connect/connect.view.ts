import { Component, Renderer2, OnDestroy } from '@angular/core';
import { MyWeb3Service } from './../../services';
import { Router } from '@angular/router';

@Component({
    selector: 'connect-view',
    templateUrl: './connect.view.html',
    styleUrls: ['./connect.view.css']
})
export class ConnectView implements OnDestroy
{
    constructor(
        private _renderer: Renderer2,
        private _myWeb3: MyWeb3Service,
        private _router: Router)
    {
        this._renderer.addClass(document.body, 'text-center');
        this._renderer.addClass(document.body, 'connectView');
    }

    public ngOnDestroy(): void
    {
        this._renderer.removeClass(document.body, 'text-center');
        this._renderer.removeClass(document.body, 'connectView');
    } // ngOnDestroy

    public connect()
    {
        this._myWeb3.connectWallet()
            .then(() =>
            {
                this._router.navigate(['/my-money']);
            });
    } // connect
}
