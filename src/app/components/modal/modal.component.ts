import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/modal.service';
import { ImageCroppedEvent, base64ToFile, Dimensions, ImageTransform } from 'ngx-image-cropper';


interface Image {
  name: string;
  src: any;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})


export class ModalComponent implements OnInit {
  @Input() modalStatus!: String;
  @Input() modalTitle!: String;
  @Output() btnClick1 : EventEmitter<any> = new EventEmitter<any>();
  @Output() imageEvent : EventEmitter<any> = new EventEmitter<any>();


  
  public imageInfo : Image = {
    name: '',
    src: ''
  }

  constructor(private modalService: ModalService) { }

  status: Boolean = true;
  btnName: String = 'Save Changes'
  cancelBtn: String = 'Cancel'
  primary: String = 'primary';
  secondary: String = 'secondary';
  isImageSelected: Boolean = false

  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = true;
  transform: ImageTransform = {};

  

  ngOnInit(): void {
    console.log(this.modalStatus)
    console.log(this.imageInfo)
    const removeStoredImageInfo = this.modalService.storeImageInfo({})
  }

  fileChangeEvent(event: any): void {
    this.isImageSelected = true
    this.imageInfo.name = event.target.files[0].name
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.imageInfo.src = event.base64;
    console.log(event,  base64ToFile(this.croppedImage));
  }
  imageLoaded(image: HTMLImageElement) {
    // show cropper
    this.showCropper = true;
    console.log('Image loaded');
  }
  cropperReady(sourceImageDimensions: Dimensions) {
    console.log('Cropper ready', sourceImageDimensions);
  }
  loadImageFailed() {
    this.showCropper = true;
    console.log('Image loaded');
    // show message
  }

  closeModal(value: String) {
    console.log(value)
    this.isImageSelected = false;
    this.modalService.modalStatus = value;
    this.modalStatus = this.modalService.closeModal()
    this.btnClick1.emit(this.modalStatus)
  }

  reUpload() {
    this.isImageSelected = false;
  }

  saveImage(){
    console.log('save image called')
    this.modalService.storeImageInfo(this.imageInfo)
    this.imageEvent.emit(true)
    this.closeModal('modal_hide')
  }
}
