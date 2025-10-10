import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  imports: [FormsModule],
  templateUrl: './input-box.html',
  styleUrl: './input-box.css'
})
export class InputBox {
  message: string = '';
  @Output() sendMessage = new EventEmitter<string>();

  send() {
    if (this.message.trim()) {
      this.sendMessage.emit(this.message);  
      this.message = '';                     
    }
    // console.log("---- input box")
  }
}
