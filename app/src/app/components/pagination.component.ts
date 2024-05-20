// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-pagination',
  templateUrl: './pagination.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class paginationComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_daG46IeyumuEacuY(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    Object.assign(this.page, { selected: 4 });

    //append_listeners
  }

  sd_daG46IeyumuEacuY(bh) {
    try {
      bh = this.sd_h2hRWWjZBtrsMw99(bh);
      //appendnew_next_sd_daG46IeyumuEacuY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_daG46IeyumuEacuY');
    }
  }

  onNext(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_9CwxRi7ioUJNCcjc(bh);
      //appendnew_next_onNext
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4vfoahczLi31hVAF');
    }
  }

  onPreviouse(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_aDpBdYeDpv2Bkg9C(bh);
      //appendnew_next_onPreviouse
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gjdpa3ZEWeg4FQ3N');
    }
  }

  onPageChanges(page: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { page };
      bh.local = {};
      bh = this.sd_zJZOABnbMFSVy3PH(bh);
      //appendnew_next_onPageChanges
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O7wiyGTHXpjaOo5P');
    }
  }

  setLimit(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_upDFi5NxbnvfQdJP(bh);
      //appendnew_next_setLimit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lvIZLaoGcMhted5T');
    }
  }

  search(query: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { query };
      bh.local = {};
      bh = this.sd_0db6YkM5PfnYCGaV(bh);
      //appendnew_next_search
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ur0vVc2Wk1mWvY1p');
    }
  }

  toggleOption(option: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { option };
      bh.local = {};
      bh = this.sd_7RCC5LYaiuMw4jsL(bh);
      //appendnew_next_toggleOption
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_U4xZPki5KdQSAVde');
    }
  }

  filterMenu(query: any = undefined, option: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { query, option };
      bh.local = {};
      bh = this.sd_x1dsMdnXBwdjEd4H(bh);
      //appendnew_next_filterMenu
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_91xpqbqUqrn7cr4w');
    }
  }

  filterClose(div: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { div };
      bh.local = {};
      bh = this.sd_65Z0hJNK9zgBUPv4(bh);
      //appendnew_next_filterClose
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jLq2XWvyKT9TXscq');
    }
  }
  //appendnew_flow_paginationComponent_start

  sd_h2hRWWjZBtrsMw99(bh) {
    try {
      bh = this.sd_YljjIucV4q6l83fH(bh);
      bh = this.sd_f5KAdPPrHeMNj9HC(bh);
      //appendnew_next_sd_h2hRWWjZBtrsMw99
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h2hRWWjZBtrsMw99');
    }
  }

  sd_YljjIucV4q6l83fH(bh) {
    try {
      const page = this.page;
      page.data = [
        { id: 1, name: 'John Doe', age: 28, place: 'New York' },
        { id: 2, name: 'Jane Smith', age: 34, place: 'Los Angeles' },
        { id: 3, name: 'Michael Johnson', age: 45, place: 'Chicago' },
        { id: 4, name: 'Emily Davis', age: 22, place: 'Houston' },
        { id: 5, name: 'Christopher Brown', age: 30, place: 'Phoenix' },
        { id: 6, name: 'Amanda Wilson', age: 27, place: 'Philadelphia' },
        { id: 7, name: 'Joshua Martinez', age: 35, place: 'San Antonio' },
        { id: 8, name: 'Jessica Garcia', age: 29, place: 'San Diego' },
        { id: 9, name: 'David Lee', age: 41, place: 'Dallas' },
        { id: 10, name: 'Sarah Harris', age: 33, place: 'San Jose' },
        { id: 11, name: 'John Doe', age: 28, place: 'New York' },
        { id: 12, name: 'Jane Smith', age: 34, place: 'Los Angeles' },
        { id: 13, name: 'Michael Johnson', age: 45, place: 'Chicago' },
        { id: 14, name: 'Emily Davis', age: 22, place: 'Houston' },
        { id: 15, name: 'Christopher Brown', age: 30, place: 'Phoenix' },
        { id: 16, name: 'Amanda Wilson', age: 27, place: 'Philadelphia' },
        { id: 17, name: 'Joshua Martinez', age: 35, place: 'San Antonio' },
        { id: 18, name: 'Jessica Garcia', age: 29, place: 'San Diego' },
        { id: 19, name: 'David Lee', age: 41, place: 'Dallas' },
        { id: 20, name: 'Sarah Harris', age: 33, place: 'San Jose' },
      ];

      page.currentPage = 1;
      page.itemsPerPage = 2;
      page.pageLimit = [5, 10, 20, 30];
      page.displayedPages = [0, 1];
      page.table;
      page.compPages = getPage();
      paginate();

      page.paginate = paginate;
      console.log(page.selected);
      console.log(page.data.length / page.selected, 'divided');

      function paginate() {
        page.compPages;

        const startIndex = (page.currentPage - 1) * page.selected;
        const endIndex = startIndex + page.selected;
        page.table = new MatTableDataSource(
          page.data.slice(startIndex, endIndex)
        );

        if (page.currentPage < page.compPages.length && page.currentPage >= 2) {
          page.buttons = [
            page.currentPage - 1,
            page.currentPage,
            page.currentPage + 1,
          ];
        }
      }

      page.totalPages = totalPages;

      function totalPages() {
        let total = Math.ceil(page.data.length / page.selected);
        return total;
      }

      function getPage() {
        return Array.from({ length: totalPages() }, (_, index) => index + 1);
      }

      //  skip Pages

      page.buttons = [
        page.currentPage,
        page.currentPage + 1,
        page.currentPage + 2,
      ];

      console.log(page.buttons);
      //appendnew_next_sd_YljjIucV4q6l83fH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YljjIucV4q6l83fH');
    }
  }

  sd_f5KAdPPrHeMNj9HC(bh) {
    try {
      const page = this.page;
      page.primaryOptions = [
        {
          value: 'electronics',
          status: false,
          secondaryOptions: {
            name: 'Electronics',
            options: ['Smartphones', 'Laptops', 'Tablets'],
          },
        },
        {
          value: 'clothing',
          status: false,
          secondaryOptions: {
            name: 'Clothing',
            options: ['Men', 'Women', 'Children'],
          },
        },
        {
          value: 'home-appliances',
          status: false,
          secondaryOptions: {
            name: 'Home Appliances',
            options: ['Refrigerators', 'Washing Machines', 'Microwaves'],
          },
        },
      ];

      page.hiddenDivs = {
        name: true,
        id: false,
      };
      page.searchQuery = '';

      //appendnew_next_sd_f5KAdPPrHeMNj9HC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f5KAdPPrHeMNj9HC');
    }
  }

  sd_9CwxRi7ioUJNCcjc(bh) {
    try {
      const page = this.page;

      if (page.currentPage < page.totalPages()) {
        page.currentPage++;
        //  if(page.currentPage<page.compPages.length && page.currentPage>=2){
        //  page.buttons=[page.currentPage-1,page.currentPage,page.currentPage+1]

        //  }

        page.paginate();
      }
      //appendnew_next_sd_9CwxRi7ioUJNCcjc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9CwxRi7ioUJNCcjc');
    }
  }

  sd_aDpBdYeDpv2Bkg9C(bh) {
    try {
      const page = this.page;

      if (page.currentPage > 1) {
        page.currentPage--;
        // if(page.currentPage<page.compPages.length && page.currentPage>=2){
        // page.buttons=[page.currentPage-1,page.currentPage,page.currentPage+1]
        // }

        page.paginate();
      }
      //appendnew_next_sd_aDpBdYeDpv2Bkg9C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aDpBdYeDpv2Bkg9C');
    }
  }

  sd_zJZOABnbMFSVy3PH(bh) {
    try {
      const page = this.page;
      let pages = bh.input.page;
      page.currentPage = pages;
      if (page.currentPage < page.compPages.length && page.currentPage >= 2) {
        page.buttons = [
          page.currentPage - 1,
          page.currentPage,
          page.currentPage + 1,
        ];
      }
      page.paginate();
      //appendnew_next_sd_zJZOABnbMFSVy3PH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zJZOABnbMFSVy3PH');
    }
  }

  sd_upDFi5NxbnvfQdJP(bh) {
    try {
      const page = this.page;
      page.itemsPerPage = page.selected;
      console.log(page.itemsPerPage);
      page.paginate();

      //appendnew_next_sd_upDFi5NxbnvfQdJP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_upDFi5NxbnvfQdJP');
    }
  }

  sd_0db6YkM5PfnYCGaV(bh) {
    try {
      const page = this.page;
      const target = bh.input.query.target as HTMLInputElement;
      console.log(target.value);
      let query = target.value;

      function constructRegexPattern(input) {
        const escapedInput = input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Create a pattern that matches the input string exactly, case-insensitively
        return new RegExp(escapedInput, 'i');
      }

      function searchNames(input: any) {
        page.paginate();
        let names = page.table?.filteredData;
        const regex = constructRegexPattern(input);
        // console.log('reg',regex)
        let matchingNames = names?.filter((name) => regex.test(name.name));
        page.table = new MatTableDataSource(matchingNames);
      }

      searchNames(query);

      //appendnew_next_sd_0db6YkM5PfnYCGaV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0db6YkM5PfnYCGaV');
    }
  }

  sd_7RCC5LYaiuMw4jsL(bh) {
    try {
      const page = this.page;
      console.log(bh.input.option);
      let obj = bh.input.option;
      page.primaryOptions.map((ite) => {
        if (ite.value === obj.value) {
          if (ite.status == false) {
            return (ite.status = true);
          } else {
            ite.status = false;
          }
        }
        return ite;
      });

      console.log(page.primaryOptions);
      //appendnew_next_sd_7RCC5LYaiuMw4jsL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7RCC5LYaiuMw4jsL');
    }
  }

  sd_x1dsMdnXBwdjEd4H(bh) {
    try {
      const page = this.page;
      let event = bh.input.event;

      event.stopPropagation();
      console.log(event);
      //appendnew_next_sd_x1dsMdnXBwdjEd4H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x1dsMdnXBwdjEd4H');
    }
  }

  sd_65Z0hJNK9zgBUPv4(bh) {
    try {
      const page = this.page;
      let div = bh.input.div;
      console.log(div);
      page.hiddenDivs[div] = !page.hiddenDivs[div];

      //appendnew_next_sd_65Z0hJNK9zgBUPv4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_65Z0hJNK9zgBUPv4');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_paginationComponent_Catch
}
