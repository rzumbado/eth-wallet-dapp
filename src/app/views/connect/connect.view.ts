import { Component, Renderer2, OnDestroy } from '@angular/core';

@Component({
    selector: 'connect-view',
    templateUrl: './connect.view.html',
    styleUrls: ['./connect.view.css']
})
export class ConnectView implements OnDestroy
{
    constructor(
        private _renderer: Renderer2)
    {
        this._renderer.addClass(document.body, 'text-center');
        this._renderer.addClass(document.body, 'connectView');
    }

    public ngOnDestroy(): void
    {
        this._renderer.removeClass(document.body, 'text-center');
        this._renderer.removeClass(document.body, 'connectView');
    } // ngOnDestroy
}
