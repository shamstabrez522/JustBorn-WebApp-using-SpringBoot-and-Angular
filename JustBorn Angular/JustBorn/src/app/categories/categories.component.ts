import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { JustBornServiceService } from '../just-born-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  category: any;
  countCat:any;
  constructor(private jbs: JustBornServiceService) { }

  ngOnInit(): void {
    this.jbs.getAllCategories().subscribe((data: any) => {
      console.log(data);
      this.category = data;
    });
  }
  delete(c_id: number) {
    console.log(c_id);
    confirm("Are Sure want to delete ?");
    this.jbs.deleteCategories(c_id).subscribe((data: any) => {
      this.category = data;
    })
  }
  style() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    });
  }
  success(){
    Swal.fire({
      title: 'Thank You',
      text: 'Visit Again 😊',
      imageUrl: '/assets/logo.png',
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: 'Custom image',
    });
  }
}
