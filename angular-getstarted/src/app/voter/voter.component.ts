import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  template: `
        <h3>{{name}}</h3>
        <button class="margin-5" mat-mini-fab (click)="vote(true)" [disabled]="didVote">
          <mat-icon  class="icon-display">thumb_up</mat-icon>
        </button>

        <button class="margin-5" mat-mini-fab color="warn" (click)="vote(false)" [disabled]="didVote">
          <mat-icon  class="icon-display">thumb_down</mat-icon>
        </button>`,
  styleUrls: ['./voter.component.css']
})
export class VoterComponent {
  @Input() name = '';
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}