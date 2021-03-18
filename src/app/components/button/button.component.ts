import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/modal.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() name!: String;
  @Input() class!: String;
  @Input() action!: String;
  btnName!: String;
  @Output() btnClick : EventEmitter<any> = new EventEmitter<any>();

  constructor(private modalService: ModalService) { 
  }

  ngOnInit(): void {
    this.btnName = this.name
  }

  onClick = () => {
    this.btnClick.emit('modal')
  }
}
