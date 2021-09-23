import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent {
    companyDetails:any
    constructor(){
        this.companyDetails={
            name:'DBS',
            logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyZV26RlSZjaUBPRDgbt42eGBPNHooYcL3yxxaSX0aVaX-bJbt&s"
        }
    }
}