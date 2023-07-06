import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoryBoardComponent } from './components/memory-board/memory-board.component';
import { MemoryCardComponent } from './components/memory-board/memory-card/memory-card.component';

@NgModule({
  declarations: [AppComponent, MemoryBoardComponent, MemoryCardComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
