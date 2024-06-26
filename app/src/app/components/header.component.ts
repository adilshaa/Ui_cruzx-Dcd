// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, EventEmitter, Injector, Output } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-header',
  templateUrl: './header.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class headerComponent {
  @Output('open')
  public open: any = new EventEmitter<any>();
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
      this.sd_4Q5qYjNPpqLwtieb(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_4Q5qYjNPpqLwtieb(bh) {
    try {
      bh = this.sd_UFTTAKBm8QND1tMF(bh);
      //appendnew_next_sd_4Q5qYjNPpqLwtieb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4Q5qYjNPpqLwtieb');
    }
  }

  openModal(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_2xv0op0RKlNu2sIv(bh);
      //appendnew_next_openModal
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IVgTuUemzNzQC5mA');
    }
  }
  //appendnew_flow_headerComponent_start

  sd_UFTTAKBm8QND1tMF(bh) {
    try {
      this.page.id = bh.pageInput;
      bh = this.sd_l4qKEgiZ3IgxCE4n(bh);
      //appendnew_next_sd_UFTTAKBm8QND1tMF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UFTTAKBm8QND1tMF');
    }
  }

  sd_l4qKEgiZ3IgxCE4n(bh) {
    try {
      const page = this.page; // page.content=page.id.id
      // // console.log(page.content)
      //appendnew_next_sd_l4qKEgiZ3IgxCE4n
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l4qKEgiZ3IgxCE4n');
    }
  }

  sd_2xv0op0RKlNu2sIv(bh) {
    try {
      const page = this.page;
      bh.local.id = '1';
      // console.log(bh.input.id)
      bh = this.sd_Rq4JVdgcXegy3eVC(bh);
      //appendnew_next_sd_2xv0op0RKlNu2sIv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2xv0op0RKlNu2sIv');
    }
  }

  sd_Rq4JVdgcXegy3eVC(bh) {
    try {
      bh.pageOutput.open.emit(bh.local.id);
      //appendnew_next_sd_Rq4JVdgcXegy3eVC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Rq4JVdgcXegy3eVC');
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
  //appendnew_flow_headerComponent_Catch
}
