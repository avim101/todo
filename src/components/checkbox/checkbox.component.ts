import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

interface ICheckbox {
  label?: string;
  checked?: boolean;
  align?: string;
  disabled?: boolean;
  onChecked?: EventEmitter<boolean>;
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})

export class CheckboxComponent implements OnInit, ICheckbox {

  @Input() label = '';
  @Input() checked = false;
  @Input() align = 'start';
  @Input() disabled = false;
  @Output() onChecked = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  onClick($event: MouseEvent, checked: boolean): void {
    $event.stopPropagation();
    this.onChecked.emit(checked);
  }

}
