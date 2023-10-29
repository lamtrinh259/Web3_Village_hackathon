import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-dapp-main-page',
  templateUrl: './dapp-main-page.component.html',
  styleUrls: ['./dapp-main-page.component.css']
})
export class DappMainPageComponent implements OnInit {

  constructor(
    private router: Router,
    private walletService: WalletService) { }

  gotTo(route: string) {
    this.router.navigate([route])
  }

  public walletConnected: boolean = false;
  public walletId: string = '';

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
