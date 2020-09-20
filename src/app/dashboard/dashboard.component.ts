import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'dn-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private items: MenuItem[];
  private accountMenuItems: MenuItem[];
  private activeItem: MenuItem;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
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
