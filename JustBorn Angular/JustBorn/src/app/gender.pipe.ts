import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(u_name: any, u_gender: any): any {
    if (u_gender == "Male"){
      return "Mr. " + u_name;
    }else{
      return "Ms. " + u_name;

    }
      
  }

}
