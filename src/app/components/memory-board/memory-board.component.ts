import { Component } from '@angular/core';
import { MemoryCard } from './memory-card/memory-card.component';

@Component({
  selector: 'app-memory-board',
  templateUrl: './memory-board.component.html',
  styleUrls: ['./memory-board.component.scss'],
})
export class MemoryBoardComponent {

  columns: number = 4;
  rows: number = 4;
  stayDelay: number = 2000;

  cards: MemoryCard[] = [];
  firstCard: MemoryCard | null = null;

  score: number = 0;
  gameCompleted: boolean = false;
  stopClicks:boolean = false;

  colors: string[] = [
    'green',
    'red',
    'blue',
    'yellow',
    'purple',
    'orange',
    'pink',
    'white',
  ];


  ngOnInit(): void {
    this.loadCards();
  }

  loadCards() {

    for (let i = 0; i < (this.columns * this.rows) / 2; i++) {
      for(let j = 0; j < 2; j++){
        this.cards.push({
          id: this.cards.length,
          color: this.colors[i],
          state: 'default'
        });
      }
    }
    this.cards = this.shuffleCards(this.cards);
  }

  shuffleCards(array: any[]): any[] {

    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  newCardSelected(card: MemoryCard) {

    if (this.firstCard == null) {
      this.firstCard = card;
    } 
    else if (this.firstCard == card) {
      return;
    } 
    else {

      this.stopClicks = true;
      let selectedCards = [this.firstCard, card]
      this.firstCard = null;

      setTimeout(() => {
        if (selectedCards[0].color === selectedCards[1].color) {
          selectedCards.forEach(item=>item.state='matched');
          this.score++;
        }
        else{
          selectedCards.forEach(item=>item.state='default');
          this.score = this.score - 1 <= 0 ? 0 : this.score - 1;
        }
        this.stopClicks = false;
        setTimeout(()=>{
          this.gameCompleted = !this.cards.some((obj) => obj.state !== 'matched');

        }, 400)       

      }, this.stayDelay);
    } 

  }

  restart(){
    this.cards = [];
    this.score = 0;
    this.loadCards();
    this.gameCompleted = false;
  }
}
