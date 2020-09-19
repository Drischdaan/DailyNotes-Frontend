import { Component } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private items: MenuItem[];
  private accountMenuItems: MenuItem[];
  private activeItem: MenuItem;

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Teams', icon: 'pi pi-fw pi-users' },
    ];
    this.activeItem = this.items[0];
    this.accountMenuItems = [
      {
        label: 'Settings',
        icon: 'pi pi-cog'
      },
      {
        separator:true
      },
      {
        label:'Logout',
        icon:'pi pi-sign-out',
        command: () => {
          this.messageService.add({severity:'info', summary:'Logging out...', detail:'Trying to reach logout service'});
        }
      }
    ];
  }

}