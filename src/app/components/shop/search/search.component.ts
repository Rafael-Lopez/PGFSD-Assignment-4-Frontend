import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // Component Interaction: Parent to Child
  @Input() products;
  @Input() resetProducts;
  // Component Interaction: Child to Parent
  @Output() filteredProducts = new EventEmitter<any>();
  searchTerm: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  doSearch = () => {
    if (this.products && this.searchTerm !== undefined && this.searchTerm.length > 0) {
      this.filteredProducts.emit(this.products.filter(product => product.name.toLowerCase().includes(this.searchTerm.toLowerCase())));
    } else {
      this.resetProducts();
    }
  }
}
