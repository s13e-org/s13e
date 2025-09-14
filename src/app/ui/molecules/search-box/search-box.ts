import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './search-box.html',
  styleUrl: './search-box.css'
})
export class SearchBox {
  @Input() placeholder: string = 'Search...';
  @Input() fetchSuggestions!: (query: string) => Promise<string[]>;

  @Input() customClasses: {
    input?: string;
    button?: string;
    list?: string;
    item?: string;
  } = {};

  @Output() search = new EventEmitter<string>();

  query: string = '';
  suggestions: string[] = [];
  showList: boolean = false;

  async onInput() {
    if (!this.query) {
      this.suggestions = [];
      this.showList = false;
      return;
    }
    if (this.fetchSuggestions) {
      this.suggestions = await this.fetchSuggestions(this.query);
      this.showList = this.suggestions.length > 0;
    }
  }

  selectItem(item: string) {
    this.query = item;
    this.suggestions = [];
    this.showList = false;
    this.search.emit(item);
  }

  onButtonClick() {
    if (this.query) this.search.emit(this.query);
  }
}
