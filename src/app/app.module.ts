import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageCropperModule } from 'ngx-image-cropper';


import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { ButtonComponent } from './components/button/button.component';
import { ModalService } from './modal.service';
import { EllipsizesPipe } from './ellipsizes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ButtonComponent,
    EllipsizesPipe
  ],
  imports: [
    BrowserModule,
    ImageCropperModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
