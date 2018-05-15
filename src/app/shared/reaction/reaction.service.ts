import {Injectable} from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreDocument
} from "angularfire2/firestore";

  import { Observable } from 'rxjs/Observable';
import * as _ from "lodash";

import {AuthService} from "../../core/auth.service";

@Injectable()
export class ReactionService {

  emojiList = ['like','love','wow','haha','sad','angry'];

  reactionDoc: AngularFirestoreDocument<any>;

  constructor(private db: AngularFirestore, private afAuth: AuthService) {
  }

  getReactions(itemId): Observable<any> {
    this.reactionDoc = this.db.doc(`reactions/${itemId}`);
    console.log(this.reactionDoc);
    return this.reactionDoc.valueChanges();
  }

  setReaction(itemId, reaction=0) {
     const data = { [this.afAuth.currentUserId] : reaction } ;
     this.db.doc(`reactions/${itemId}`).set({data});
  }

  updateReaction(itemId, reaction=0) {
    const data = { [this.afAuth.currentUserId]: reaction };
    this.db.doc(`reactions/${itemId}`).update({data});
  }

  removeReaction(itemId) {
    this.db.doc(`reactions/${itemId}/${this.afAuth.currentUserId}`).delete()
  }

  countReactions(reactions) {
    return _.map(_.groupBy(reactions), 'length')
  }

  userReaction(reactions: Array<any>) {
    return _.get(reactions, this.afAuth.currentUserId)
  }
}
