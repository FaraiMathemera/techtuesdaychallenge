import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  constructor() {}

  welcome() {
    new Audio('../../../assets/audio/Welcome.mp3').play();
  }

  repeat() {
    new Audio('../../../assets/audio/repeat.mp3').play();
  }

  collection() {
    new Audio('../../../assets/audio/collection.mp3').play();
  }

  confirm() {
    new Audio('../../../assets/audio/Will_that_be_all.mp3').play();
  }
}
