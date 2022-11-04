import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mcheckbox';
  _courselist:course[] | undefined;
  

  ngOnInit(){
    this.getcourses();
  }

  getcourses(){
    this._courselist=[
      {id:1,name:"C#",isselected:false},
      {id:2,name:"Angular",isselected:false},
      {id:3,name:"Asp.net",isselected:false},
      {id:4,name:"SQL",isselected:false},
      {id:5,name:"Python",isselected:false},


    ]
  }
  onchange(){
    console.log(this._courselist);
  }

}
class course{
  id:number | undefined;
  name: string | undefined;
  isselected: boolean | undefined;
}
