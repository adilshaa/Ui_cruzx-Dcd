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
  selector: 'bh-tabletest',
  templateUrl: './tabletest.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class tabletestComponent {
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
      this.sd_ZXhgjJg36nRYoisK(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    Object.assign(this.page, { selected: 5 });

    //append_listeners
  }

  sd_ZXhgjJg36nRYoisK(bh) {
    try {
      bh = this.sd_ry2V9rkovjVNXc79(bh);
      //appendnew_next_sd_ZXhgjJg36nRYoisK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZXhgjJg36nRYoisK');
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
      bh = this.sd_irJzwAGH1C8R5Y5V(bh);
      //appendnew_next_onNext
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PZiyxJOGy1bHX1JP');
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
      bh = this.sd_b96OwxVUI6DSxhPD(bh);
      //appendnew_next_onPreviouse
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WhJvQ4DFY1w3K5rX');
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
      bh = this.sd_C8e2CpU7rgktKVMD(bh);
      //appendnew_next_onPageChanges
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EwmagRREHNfEFNDw');
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
      bh = this.sd_SGWikVejEFtMo50G(bh);
      //appendnew_next_setLimit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GCJ6ZZHD6uXPxDzl');
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
      bh = this.sd_XCH7wRBP6AT8rfoo(bh);
      //appendnew_next_search
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZkVgfQ2I9JQcui6v');
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
      bh = this.sd_9hjRrQmr2fRfTjdu(bh);
      //appendnew_next_toggleOption
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VcJFX11VckhLgiPB');
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
      bh = this.sd_w3ej76zS9a7IFaAr(bh);
      //appendnew_next_filterMenu
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8wpmTmRd4cilC5Zo');
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
      bh = this.sd_rQs37J0PRMx9M3b1(bh);
      //appendnew_next_filterClose
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m0syyhM1VerOxvbP');
    }
  }
  //appendnew_flow_tabletestComponent_start

  sd_ry2V9rkovjVNXc79(bh) {
    try {
      bh = this.sd_Vhx4J0wIG4052L5N(bh);
      bh = this.sd_JlnZlrE1e9lbcJxH(bh);
      bh = this.sd_ztuvV2zpVoX22hUS(bh);
      //appendnew_next_sd_ry2V9rkovjVNXc79
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ry2V9rkovjVNXc79');
    }
  }

  sd_Vhx4J0wIG4052L5N(bh) {
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

      //appendnew_next_sd_Vhx4J0wIG4052L5N
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vhx4J0wIG4052L5N');
    }
  }

  sd_JlnZlrE1e9lbcJxH(bh) {
    try {
      const page = this.page;
      page.data = [
        { id: 1, name: 'John Doe', age: 28, place: 'New York' },
        { id: 1, name: 'John Doe', age: 28, place: 'New York' },
        { id: 1, name: 'John Doe', age: 28, place: 'New York' },

        { id: 1, name: 'John Doe', age: 28, place: 'New York' },

        { id: 1, name: 'John Doe', age: 28, place: 'New York' },

        { id: 1, name: 'John Doe', age: 28, place: 'New York' },

        { id: 1, name: 'John Doe', age: 28, place: 'New York' },

        { id: 1, name: 'John Doe', age: 28, place: 'New York' },

        { id: 1, name: 'John Doe', age: 28, place: 'New York' },

        { id: 1, name: 'John Doe', age: 28, place: 'New York' },

        { id: 1, name: 'John Doe', age: 28, place: 'New York' },

        { id: 2, name: 'Jane Smith', age: 34, place: 'Los Angeles' },
        { id: 3, name: 'Michael Johnson', age: 45, place: 'Chicago' },
        { id: 4, name: 'Emily Davis', age: 22, place: 'Houston' },
        { id: 5, name: 'Christopher Brown', age: 30, place: 'Phoenix' },
        { id: 6, name: 'Amanda Wilson', age: 27, place: 'Philadelphia' },
        { id: 7, name: 'Joshua Martinez', age: 35, place: 'San Antonio' },
        { id: 15, name: 'Christopher Brown', age: 30, place: 'Phoenix' },
        { id: 16, name: 'Amanda Wilson', age: 27, place: 'Philadelphia' },
        { id: 17, name: 'Joshua Martinez', age: 35, place: 'San Antonio' },
        { id: 18, name: 'Jessica Garcia', age: 29, place: 'San Diego' },
        { id: 19, name: 'David Lee', age: 41, place: 'Dallas' },
        { id: 20, name: 'Sarah Harris', age: 33, place: 'San Jose' },
        { id: 9, name: 'David Lee', age: 41, place: 'Dallas' },
        { id: 10, name: 'Sarah Harris', age: 33, place: 'San Jose' },
        { id: 11, name: 'John Doe', age: 28, place: 'New York' },
        { id: 12, name: 'Jane Smith', age: 34, place: 'Los Angeles' },
        { id: 13, name: 'Michael Johnson', age: 45, place: 'Chicago' },
        { id: 14, name: 'Emily Davis', age: 22, place: 'Houston' },
      ];

      page.pageLimit = [5, 10, 20, 30];
      page.table;
      page.compPages;
      page.currentPage = 1;
      page.itemsPerPage = page.selected;

      //  function paginate(){
      //     const startIndex = (page.currentPage - 1) *  page.itemsPerPage;
      //     const endIndex = startIndex +  page.itemsPerPage;
      //     page.table= new MatTableDataSource(page.data.slice(startIndex, endIndex))
      //     page.compPages=getPage(page.data.length,page.table.filteredData.length)

      //  }

      //  skip Pages

      //appendnew_next_sd_JlnZlrE1e9lbcJxH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JlnZlrE1e9lbcJxH');
    }
  }

  sd_ztuvV2zpVoX22hUS(bh) {
    try {
      const page = this.page;
      page.paginate = paginate;
      page.totalPages = totalPages;
      page.getPage = getPage;
      page.catchData = [];
      paginate(page.data);
      function paginate(data: any) {
        const startIndex = (page.currentPage - 1) * page.itemsPerPage;
        const endIndex = startIndex + page.itemsPerPage;
        page.table = new MatTableDataSource(data.slice(startIndex, endIndex));
        page.catchData = data;
        page.compPages = getPage(data.length, page.itemsPerPage);
        console.log(page.compPages.length, 'total');
      }

      function totalPages(actualArray, filterdData) {
        let length = actualArray / filterdData;
        let total = Math.ceil(length);
        return total;
      }

      function getPage(actualArray, filterdData) {
        //  console.log(actualArray,filterdData)
        //  page.compPages=Array.from({ length: totalPages() }, (_, index) => index + 1);
        return Array.from(
          { length: totalPages(actualArray, filterdData) },
          (_, index) => index + 1
        );
      }

      //appendnew_next_sd_ztuvV2zpVoX22hUS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ztuvV2zpVoX22hUS');
    }
  }

  sd_irJzwAGH1C8R5Y5V(bh) {
    try {
      const page = this.page;

      if (
        page.currentPage <
        page.totalPages(page.catchData.length - 1, page.itemsPerPage)
      ) {
        page.currentPage++;
        page.paginate(page.catchData);
      }
      //appendnew_next_sd_irJzwAGH1C8R5Y5V
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_irJzwAGH1C8R5Y5V');
    }
  }

  sd_b96OwxVUI6DSxhPD(bh) {
    try {
      const page = this.page;

      if (page.currentPage > 1) {
        page.currentPage--;
        page.paginate(page.catchData);
      }
      //appendnew_next_sd_b96OwxVUI6DSxhPD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b96OwxVUI6DSxhPD');
    }
  }

  sd_C8e2CpU7rgktKVMD(bh) {
    try {
      const page = this.page;
      let pages = bh.input.page;
      page.currentPage = pages;
      page.paginate(page.catchData);
      //appendnew_next_sd_C8e2CpU7rgktKVMD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C8e2CpU7rgktKVMD');
    }
  }

  sd_SGWikVejEFtMo50G(bh) {
    try {
      const page = this.page;
      page.itemsPerPage = page.selected;
      if (page.compPages.length >= 1) {
        page.currentPage = 1;
        page.paginate(page.catchData);
      }

      //appendnew_next_sd_SGWikVejEFtMo50G
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SGWikVejEFtMo50G');
    }
  }

  sd_XCH7wRBP6AT8rfoo(bh) {
    try {
      const page = this.page;
      const target = bh.input.query.target as HTMLInputElement;
      let query = target.value;
      page.searchQuery = target.value;
      function constructRegexPattern(input) {
        const escapedInput = input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Create a pattern that matches the input string exactly, case-insensitively
        return new RegExp(escapedInput, 'i');
      }

      function searchNames(input: any) {
        page.paginate(page.catchData);
        //  const startIndex = (page.currentPage - 1) *  page.itemsPerPage;
        //  const endIndex = startIndex +  page.itemsPerPage;
        let names = page.data;

        const regex = constructRegexPattern(input);
        // console.log('reg',regex)
        let matchingNames = names?.filter((name) => regex.test(name.name));
        page.catchData = matchingNames;
        if (page.compPages.length >= 1) {
          page.currentPage = 1;
        }
        page.paginate(page.catchData);
        //  console.log(page.compPages)
      }

      searchNames(query);

      //appendnew_next_sd_XCH7wRBP6AT8rfoo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XCH7wRBP6AT8rfoo');
    }
  }

  sd_9hjRrQmr2fRfTjdu(bh) {
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
      //appendnew_next_sd_9hjRrQmr2fRfTjdu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9hjRrQmr2fRfTjdu');
    }
  }

  sd_w3ej76zS9a7IFaAr(bh) {
    try {
      const page = this.page;
      let event = bh.input.event;

      event.stopPropagation();
      console.log(event);
      //appendnew_next_sd_w3ej76zS9a7IFaAr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w3ej76zS9a7IFaAr');
    }
  }

  sd_rQs37J0PRMx9M3b1(bh) {
    try {
      const page = this.page;
      let div = bh.input.div;
      console.log(div);
      page.hiddenDivs[div] = !page.hiddenDivs[div];

      //appendnew_next_sd_rQs37J0PRMx9M3b1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rQs37J0PRMx9M3b1');
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
  //appendnew_flow_tabletestComponent_Catch
}
