import { Component, AfterViewInit } from '@angular/core';
import { MyWeb3Service } from './../../services';
import { Router } from '@angular/router';

@Component({
    selector: 'myMoney-view',
    templateUrl: './myMoney.view.html',
    styleUrls: ['./myMoney.view.css']
})
export class MyMoneyView implements AfterViewInit
{
    public loading: boolean;
    public amount: number | undefined;
    public wallet: string | undefined;

    constructor(
        private _myWeb3: MyWeb3Service,
        private _router: Router)
    {
        this.loading = true;
        if ( ! this._myWeb3.connected )
        {
            this._router.navigate(['/']);
        }
    }

    public ngAfterViewInit(): void
    {
        this._myWeb3.getMyMoney().then(
            (amount: number) =>
            {
                let realAmount = amount / Math.pow(10, 18);
                this.amount = realAmount;
                this.wallet = this._myWeb3.wallet;
                this.loading = false;
            });
    } // ngAfterViewInit
}
