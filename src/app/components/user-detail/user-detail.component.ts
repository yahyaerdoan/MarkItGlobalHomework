import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user: User;
  dataLoaded = false;

  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getUsers(params['id']);
    });
  }
  getUsers(id: number) {
    this.userService.getUserById(id).subscribe((response) => {
      if ((this.user = response)) {
        this.toastrService.info('Veriler Listelendi', 'Başarılı!');
      } else {
        this.toastrService.error('İşlem Başarısız', 'Hata!', {
          timeOut: 1000,
        });
      }
      console.log(this.getUsers);
      this.dataLoaded = true;
    });
  }
}
