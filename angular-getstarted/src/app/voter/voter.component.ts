import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  template: `
        <h2>{{name}}</h2>
        <button class="margin-5" mat-fab (click)="vote(true)" [disabled]="didVote">
          <mat-icon>thumb_up</mat-icon>
        </button>

        <button class="margin-5" mat-fab color="warn" (click)="vote(false)" [disabled]="didVote">
          <mat-icon>thumb_down</mat-icon>
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