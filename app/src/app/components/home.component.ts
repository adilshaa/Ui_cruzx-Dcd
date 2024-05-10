// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_tPQw1ZYUvNkaa0NL(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_tPQw1ZYUvNkaa0NL(bh) {
    try {
      bh = this.sd_vGm5AyHgi7KgsyyZ(bh);
      //appendnew_next_sd_tPQw1ZYUvNkaa0NL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tPQw1ZYUvNkaa0NL');
    }
  }

  insureUp(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_3uav6M1viC3WLmzu(bh);
      //appendnew_next_insureUp
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b3zJV0bwyMn1m7dG');
    }
  }
  //appendnew_flow_homeComponent_start

  sd_vGm5AyHgi7KgsyyZ(bh) {
    try {
      bh = this.sd_oExKQDkOnt8mJjGF(bh);
      //appendnew_next_sd_vGm5AyHgi7KgsyyZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vGm5AyHgi7KgsyyZ');
    }
  }

  sd_oExKQDkOnt8mJjGF(bh) {
    try {
      const page = this.page;
      page.insureModal = false;
      //appendnew_next_sd_oExKQDkOnt8mJjGF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oExKQDkOnt8mJjGF');
    }
  }

  sd_3uav6M1viC3WLmzu(bh) {
    try {
      const page = this.page;

      if (page.insureModal == false) {
        page.insureModal = true;
      } else {
        page.insureModal = false;
      }
      //appendnew_next_sd_3uav6M1viC3WLmzu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3uav6M1viC3WLmzu');
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
  //appendnew_flow_homeComponent_Catch
}