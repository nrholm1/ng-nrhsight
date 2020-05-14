import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {


  @Input() page: number;
  @Input() count: number;
  @Input() perPage: number;
  @Input() pagesToShow: number;
  @Input() loading: boolean;

  @Output() goPrev = new EventEmitter<boolean>(); // event emitter - output from event emitter
  @Output() goNext = new EventEmitter<boolean>(); // event emitter - output from event emitter

  constructor() { }

  ngOnInit(): void {
  }

  onPrev(): void {
    this.goPrev.emit(true); // onPrev emits true from the goPrev event emitter
  }
  onNext(): void {
    this.goNext.emit(true); // onNext emits true from the goNext event emitter
  }

}
