import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { categories, listArray } from 'src/app/util/constants';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
})
export class TestingPage implements OnInit {
  products = listArray;
  productsDup = this.products;
  searchTerm!: string;
  categories: any = categories;
  filterByCategory: any = '';
  priceRange: any = '';
  @ViewChild(IonModal) modal!: IonModal;
  isSort = false;
  isFilter = false;
  isSortModalOpen = false;
  isFilterModalOpen = false;
  constructor() {}

  ngOnInit() {}

  filterSearchData(event: any) {
    const searchTerm = event.detail.value;
    if (searchTerm.trim() === '') {
      this.products = this.productsDup;
    } else {
      this.products = this.products.filter((item) => {
        // Remove non-alphanumeric characters and spaces from the search term
        const searchRegex = new RegExp(
          searchTerm.replace(/[^a-zA-Z0-9]/g, ''),
          'i'
        );

        // Remove non-alphanumeric characters and spaces from the data items
        const itemData = item.name + item.description;
        const itemDataCleaned = itemData.replace(/[^a-zA-Z0-9]/g, '');

        // Check if the cleaned data contains the cleaned search term
        return itemDataCleaned.match(searchRegex);
      });
    }
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  filterProducts() {
    if (this.filterByCategory || this.priceRange) {
      this.applyFilter();
      this.isFilterModalOpen = false;
      this.modal.dismiss(null, 'confirm');
    }
  }

  filterByCategoryF(event: any) {
    this.filterByCategory = event.target.value.toLowerCase();
  }

  filterByPrice(event: any) {
    this.priceRange = event.target.value.toLowerCase();
  }

  applyFilter() {
    this.products = this.productsDup;
    if (this.filterByCategory && !this.priceRange) {
      this.products = this.products.filter(
        (item) => item.category.toLowerCase() === this.filterByCategory
      );
    } else if (!this.filterByCategory && this.priceRange) {
      switch (this.priceRange) {
        case '<500':
          this.products = this.products.filter((item) => item.price < 500);
          break;
        case '501-2000':
          this.products = this.products.filter(
            (item) => item.price >= 501 && item.price <= 2000
          );
          break;
        case '>2000':
          this.products = this.products.filter((item) => item.price > 2000);
          break;
        default:
          this.products = this.products;
          break;
      }
    } else if (this.filterByCategory && this.priceRange) {
      switch (this.priceRange) {
        case '<500':
          this.products = this.products.filter(
            (item) =>
              item.category.toLowerCase() === this.filterByCategory &&
              item.price < 500
          );
          break;
        case '501-2000':
          this.products = this.products.filter(
            (item) =>
              item.category.toLowerCase() === this.filterByCategory &&
              item.price >= 501 &&
              item.price <= 2000
          );
          break;
        case '>2000':
          this.products = this.products.filter(
            (item) =>
              item.category.toLowerCase() === this.filterByCategory &&
              item.price > 2000
          );
          break;
        default:
          this.products = this.products;
          break;
      }
    } else {
      this.products = this.products;
    }
    this.isFilter = true;
  }

  clearFilter() {
    this.products = this.productsDup;
    this.isFilter = false;
    this.filterByCategory = '';
    this.priceRange = '';
    this.modal.dismiss(null, 'confirm');
  }

  clearSort() {
    this.products = this.productsDup;
    this.isSort = false;
    this.modal.dismiss(null, 'confirm');
  }

  sortByName() {
    this.products = this.products
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
    this.isSort = true;
    this.closeSortModal();
  }

  sortByCategoryF() {
    this.products = this.products
      .slice()
      .sort((a, b) => a.category.localeCompare(b.category));
    this.isSort = true;
    this.closeSortModal();
  }

  closeSortModal() {
    this.isSortModalOpen = false;
  }

  clearAllFilters() {
    this.products = this.productsDup;
    this.isFilter = false;
    this.filterByCategory = '';
    this.priceRange = '';
    this.isSort = false;
    this.isSortModalOpen = false;
    this.searchTerm = '';
  }
}
