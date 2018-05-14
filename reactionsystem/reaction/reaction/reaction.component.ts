import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ReactionService } from "../reaction.service";
import * as _ from "lodash";

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['../reactions.scss']
})
export class ReactionComponent implements OnInit, OnDestroy {

  @Input() pathReaction;
  @Input() itemId;

  emojiList: string[];
  showEmojis = false;

  reactionCount: any;
  userReaction: any;

  subscription: any;

  constructor(private reactionSvc: ReactionService) {
  }

  ngOnInit() {

    this.emojiList = this.reactionSvc.emojiList;
    this.reactionSvc.setReaction(this.itemId);
    this.subscription = this.reactionSvc.getReactions(this.itemId)
      .subscribe(reactions => {
        this.reactionCount = this.reactionSvc.countReactions(reactions);
        this.userReaction = this.reactionSvc.userReaction(reactions)
      })
  }

  react(val) {
    if (this.userReaction === val) {
      this.reactionSvc.removeReaction(this.itemId)
    } else {
      this.reactionSvc.updateReaction(this.itemId, val);
    }
  }

  toogleShow() {
    this.showEmojis = !this.showEmojis
  }

  emojiPath(emoji) {
    return `assets/reactions/${emoji}.svg`
  }

  hasReactions(index) {
    return _.get(this.reactionCount, index.toString())
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
