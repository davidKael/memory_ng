import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cardAnimations } from './memory-card-animations';

export interface MemoryCard {
  id: number;
  color: string;
  state: 'default' | 'flipped' | 'matched';
}

@Component({
  selector: 'app-memory-card',
  templateUrl: './memory-card.component.html',
  styleUrls: ['./memory-card.component.scss'],
  animations: [cardAnimations]
})
export class MemoryCardComponent {

  @Input('data') data: MemoryCard | undefined;
  @Input('disabled') disabled : boolean = false;
  @Output() cardFlipped = new EventEmitter<MemoryCard>();

  onClick() {
    if (this.data?.state == 'default'){
      this.data.state = 'flipped';
      this.cardFlipped.emit(this.data);
    }
  }


}
