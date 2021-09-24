import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  dataLoaded = false;
  filterText = '';

  constructor(
    private userService: UserService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((response) => {
      if ((this.users = response)) {
        this.toastrService.info('Veriler Listelendi', 'Başarılı!');
      } else {
        this.toastrService.error('İşlem Başaeısız', 'Hata!', {
          timeOut: 1000,
        });
      }
      this.dataLoaded = true;
    });
  }
}
