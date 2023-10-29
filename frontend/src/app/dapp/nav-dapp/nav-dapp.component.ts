import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-nav-dapp',
  templateUrl: './nav-dapp.component.html',
  styleUrls: ['./nav-dapp.component.css']
})
export class NavDappComponent {

  public walletConnected: boolean = false;
  public walletId: string = '';

  constructor(private walletService: WalletService){}

  connectToWallet  = () => {
    this.walletService.connectWallet();
  }

  checkWalletConnected = async () => {
    const accounts = await this.walletService.checkWalletConnected();
    if(accounts.length > 0){
      this.walletConnected = true;
      this.walletId = accounts[0];
    }
  }
  ngOnInit(): void {
    this.checkWalletConnected();
  }

}
