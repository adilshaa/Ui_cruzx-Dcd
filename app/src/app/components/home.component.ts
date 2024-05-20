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

  modalController(types: any = undefined, content: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { types, content };
      bh.local = {};
      bh = this.sd_KViMFN3fLVMskZ68(bh);
      //appendnew_next_modalController
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0RAscsre6mPJ3SI2');
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
      bh = this.sd_pi4OYqzmmUDlzvI0(bh);
      //appendnew_next_openModal
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cxtZhBAMOlkHKroZ');
    }
  }

  switchModalCnt(content: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { content };
      bh.local = {};
      bh = this.sd_09RIR1M40VmVl2Ce(bh);
      //appendnew_next_switchModalCnt
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HSPqSdfJVauXoM2l');
    }
  }

  riseUpgrade(open: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { open };
      bh.local = {};
      bh = this.sd_IY16xYHT1tuTz823(bh);
      //appendnew_next_riseUpgrade
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PqTnV0mBAgFwb1ey');
    }
  }

  upgrade(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_PSUViJutHBh4gyY0(bh);
      //appendnew_next_upgrade
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LrdpBJPkO6ZnVlcU');
    }
  }

  proceed(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_iwDUybU5pMhVbcwF(bh);
      //appendnew_next_proceed
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ceEKMOV6j3RiEWRi');
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
      page.leftModal = false;
      page.bottomModal = false;
      page.modalContent = 'basic';
      page.overlay = false;

      page.centerModal = false;
      page.upgrade = false;
      page.timing = false;
      page.upgrading = true;
      page.counter = 0;

      function toFloat() {
        return Math.floor(page.counter).toString();
      }
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
        page.overlay = true;
      } else {
        page.insureModal = false;
        page.overlay = false;
      }
      //appendnew_next_sd_3uav6M1viC3WLmzu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3uav6M1viC3WLmzu');
    }
  }

  sd_KViMFN3fLVMskZ68(bh) {
    try {
      const page = this.page;
      let types = bh.input.types;
      let content = bh.input.content;

      console.log(types, content);
      page.modalContent = content;

      const left = () => {
        if (!page.leftModal) {
          page.leftModal = true;
          page.bottomModal = true;

          page.overlay = true;
        } else {
          page.leftModal = false;
          page.bottomModal = false;

          page.overlay = false;
        }
      };
      const center = () => {
        if (!page.centerModal) {
          page.overlay = true;

          page.centerModal = true;
        } else {
          page.centerModal = false;
          page.overlay = false;
        }
      };

      if (types === 'left') {
        left();
      } else if (types == 'close') {
        page.overlay = false;
        page.leftModal = false;
        page.centerModal = false;
        page.bottomModal = false;
        page.insureModal = false;
      }

      //appendnew_next_sd_KViMFN3fLVMskZ68
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KViMFN3fLVMskZ68');
    }
  }

  sd_pi4OYqzmmUDlzvI0(bh) {
    try {
      const page = this.page;
      console.log('open');
      //appendnew_next_sd_pi4OYqzmmUDlzvI0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pi4OYqzmmUDlzvI0');
    }
  }

  sd_09RIR1M40VmVl2Ce(bh) {
    try {
      const page = this.page;
      page.modalContent = bh.input.content;
      //appendnew_next_sd_09RIR1M40VmVl2Ce
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_09RIR1M40VmVl2Ce');
    }
  }

  sd_IY16xYHT1tuTz823(bh) {
    try {
      const page = this.page; // page.centerModal=false
      // page.upgrade=false
      // page.timing=false
      console.log(bh.input.open);
      if (!page.centerModal) {
        page.centerModal = true;
        page.overlay = true;
      } else {
        page.centerModal = false;
        page.overlay = false;
      }
      //appendnew_next_sd_IY16xYHT1tuTz823
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IY16xYHT1tuTz823');
    }
  }

  sd_PSUViJutHBh4gyY0(bh) {
    try {
      const page = this.page;
      page.timing = true;

      let targetValue = [10, 50, 100];

      targetValue.map((v: any) => {
        setTimeout(() => {
          console.log(v);
          page.counter = v;
        }, 300);
      });

      setTimeout(() => {
        page.upgrading = false;
      }, 1000);
      //appendnew_next_sd_PSUViJutHBh4gyY0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PSUViJutHBh4gyY0');
    }
  }

  sd_iwDUybU5pMhVbcwF(bh) {
    try {
      const page = this.page;
      page.centerModal = false;
      page.overlay = false;
      page.timing = false;
      page.upgrading = true;

      page.counter = 0;
      //appendnew_next_sd_iwDUybU5pMhVbcwF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iwDUybU5pMhVbcwF');
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
