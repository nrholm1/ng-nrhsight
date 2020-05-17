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
  @Output() goPage = new EventEmitter<number>(); 

  constructor() { }

  ngOnInit(): void {
  }

  onPrev(): void {
    this.goPrev.emit(true); // onPrev emits true from the goPrev event emitter
  }
  onNext(): void {
    this.goNext.emit(true); // onNext emits true from the goNext event emitter
  }

  onPage(n: number): void {
    this.goPage.emit(n);
  }

  totalPages(): number {
    return Math.ceil(this.count / this.perPage) || 0;
  }

  isLastPage(): boolean {
    return this.perPage * this.page >= this.count;
  }

  getMin(): number {
    return ((this.perPage * this.page) - this.perPage) + 1;
  }

  getMax(): number {
    let max = this.perPage * this.page;
    if (max > this.count) {
      max = this.count;
    }
    return max;
  }

  getPages(): number[] {
    const totalPages = Math.ceil(this.count / this.perPage);
    const thisPage = this.page || 1;
    const pagesToShow = this.pagesToShow || 9;
    const pages: number[] = [];
    pages.push(thisPage);
    
    console.log("Starting loop with: total pages:", totalPages, "thisPage:", thisPage, "pagesToShow:", pagesToShow); 
    for(let i = 0; i < pagesToShow - 1; i++) { 
      if(pages.length < pagesToShow)
        if(Math.min.apply(null, pages) > 1)
          pages.push(Math.min.apply(null, pages) - 1);
      if(pages.length < pagesToShow) 
        if(Math.max.apply(null, pages) < totalPages)
          pages.push(Math.max.apply(null, pages) + 1); 
    }
    
    pages.sort((a, b) => a - b);
    return pages;
  }

  // getPages(): number[] {
  //   const totalPages = Math.ceil(this.count / this.perPage);
  //   const thisPage = this.page || 1;
  //   const pagesToShow = this.pagesToShow || 9;
  //   const pages: number[] = [];
  //   pages.push(thisPage);


  //   return pages;
  // }
}
