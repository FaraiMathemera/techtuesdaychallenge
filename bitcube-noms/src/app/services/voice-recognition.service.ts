import { Injectable } from '@angular/core';

declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root',
})
export class VoiceRecognitionService {
  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = '';
  tempWords: string = '';

  constructor() {}

  init() {
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result: any) => result.transcript)
        .join('');
      this.tempWords = transcript;
      console.log(transcript);
    });
  }

  start() {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    console.log('Speech recognition started');
    this.recognition.addEventListener('end', (condition: any) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
        console.log('End speech recognition');
      } else {
        this.wordConcat();
        this.recognition.start();
      }
    });
  }
  stop() {
    this.isStoppedSpeechRecog = true;
    this.wordConcat();
    this.recognition.stop();
    console.log('End speech recognition');
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords + '.';
    this.tempWords = '';
    this.interpretSpeech(this.text);
  }

  interpretSpeech(message: any) {
    if (
      message.includes('can I have') ||
      message.includes('can I get') ||
      message.includes('can you get me') ||
      message.includes('can I get') ||
      message.includes('get me') ||
      message.includes('give me')
    ) {
      this.add(message);
    } else if (
      message.includes('can I have') ||
      message.includes('can I get') ||
      message.includes('can you get me') ||
      message.includes('can I get') ||
      message.includes('get me') ||
      message.includes('give me')
    ) {
      this.remove(message);
    } else {
      this.text = '';
    }
  }

  add(text: any) {
    console.log('instruction' + text);
  }

  remove(text: any) {
    console.log('instruction' + text);
  }
}
