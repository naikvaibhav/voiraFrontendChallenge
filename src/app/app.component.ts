import { ConstantPool } from '@angular/compiler';
import { Component, Output } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'voiraFrontendChallenge';
  btnName = 'Click to open modal';
  modalStatus: any = 'modal_hide';
  primary: String = 'primary';
  modalTitle: String = 'Change Organization Image';
  isImageSaved: Boolean = false
  image: any
  constructor(private modalService: ModalService) { }

  ngOnInit() {
    console.log(this.modalService.imageObj)
  }

  triggerModal(value: String) {
    this.modalStatus = this.modalService.openModal()
    console.log(this.modalStatus)
  }
  checkStatus(value: String){
    console.log(value)
    this.modalStatus = value
  }

  imageEventCalled(value: Boolean){
    console.log('imageEventCalled', value)
    if(value){
      this.isImageSaved = true
      this.image = this.modalService.imageObj
    }
  }
}
