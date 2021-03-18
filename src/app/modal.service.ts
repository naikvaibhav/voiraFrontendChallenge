import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalStatus: String = 'modal_hide'
  imageObj!: Object;
  constructor() { }

  openModal = () => {
    return this.modalStatus = 'modal'
  }

  closeModal = () => {
    return this.modalStatus = 'modal_hide'
  }

  storeImageInfo = (data: Object) => {
    console.log('data', data)
    return this.imageObj = data
  }
}
