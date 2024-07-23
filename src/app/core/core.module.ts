import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppState } from './state/appState';
import { AppFacade } from './app.facade';
import { RouterModule } from '@angular/router';
import { HeaderComponentComponent } from './components/header-component/header-component.component';


@NgModule({
  declarations: [
    HeaderComponentComponent
  ],
  providers: [
    AppState,
    AppFacade,
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports: [HeaderComponentComponent ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
