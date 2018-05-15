import { NgModule } from '@angular/core';
import { ReactionService } from './reaction.service';
import { ReactionComponent } from './reaction/reaction.component';

import { SharedModule } from "../shared.module";

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [ReactionComponent],
  exports: [ReactionComponent],
  providers: [ReactionService]
})
export class ReactionModule { }
