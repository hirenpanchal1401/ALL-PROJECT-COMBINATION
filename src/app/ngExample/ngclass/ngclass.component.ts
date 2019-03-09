import { Component} from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent{

  constructor() { }

    //Example of ngClass
    img:string="rounded";

    imgtype1()
      {
         this.img ="rounded";
      }
    imgtype2()
      {
         this.img ="img-circle";
      }
    imgtype3()
      {
         this.img ="img-thumbnail";
      }



}
