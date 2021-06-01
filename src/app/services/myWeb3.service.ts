import { Injectable } from '@angular/core';
import { WindowRefService } from "./windowRef.service";
import { environment } from "../../environments/environment";

declare var WalletConnectProvider: any;
declare var Web3Modal: any;
declare var Web3: any;

@Injectable({
    providedIn: 'root'
})
export class MyWeb3Service
{
    private _web3Modal: any;
    private _web3: any;
    private _account: string | undefined;

    constructor(
        private _windowRef: WindowRefService)
    {
        Web3Modal = _windowRef.nativeWindow.Web3Modal.default;
        WalletConnectProvider = _windowRef.nativeWindow.WalletConnectProvider.default;
        
        const providerOptions = {
            walletconnect: {
                package: WalletConnectProvider,
                options: {
                    infuraId: environment.infuraId
                }
            }
        };

        this._web3Modal = new Web3Modal({
            network: "mainnet", // TODO make it connect to any other net
            cacheProvider: true,
            providerOptions
        });
    } // constructor

    public get connected(): boolean
    {
        return this._web3 !== undefined;
    }

    public get wallet(): any
    {
        return this._account;
    } 

    public async connectWallet()
    {
        if ( this._web3 )
            throw new Error('You are already connected dummy!');

        const provider = await this._web3Modal.connect();
        this._web3 = new Web3(provider);
        const accounts = await this._web3.eth.getAccounts(); // let's play only with the first connected account
        this._account = accounts[0];
    } // connectWallet

    public getMyMoney(): Promise<any>
    {
        return this._web3.eth.getBalance(this._account);
    } // getMyMoney
}
