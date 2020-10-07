import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  isdisables = false
  createServer = "No Server was created!!"
  text_entered = '';
  constructor() { 

    setTimeout(() => {
      this.isdisables = true
    }, 5000);
  }

  ngOnInit() {
  }

  oncreateServer(){
    this.createServer = "Server was created!!"
  }

  onEnterName(event){
    console.log(event)
    if (event.data == 'a' || event.data == 'e' || event.data == 'i' || event.data == 'o' || event.data == 'u'){
      this.text_entered = this.text_entered + event.data;
    }
    

  }

}
