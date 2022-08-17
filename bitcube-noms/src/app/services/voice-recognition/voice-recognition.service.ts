import { Injectable } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { AudioService } from 'src/app/services/audio/audio.service';
import { state } from 'src/app/enum/state';

declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root',
})
export class VoiceRecognitionService {
  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = '';
  tempWords: string = '';
  readyToPay = false;

  constructor(
    private OrderService: OrderService,
    private AudioService: AudioService
  ) {}

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
    this.interpretSpeech(this.text.toLowerCase());
  }

  interpretSpeech(message: any) {
    if (
      message.includes('have') ||
      message.includes('get') ||
      message.includes('have') ||
      message.includes('order')
    ) {
      this.add(message);
    } else if (
      message.includes('show menu') ||
      message.includes('see the menu') ||
      message.includes('need the menu')
    ) {
      this.OrderService.setMenu(true);
      this.clearText();
    } else if (
      message.includes('remove menu') ||
      message.includes('hide the menu') ||
      message.includes('close the menu') ||
      message.includes('hide menu') ||
      message.includes('hide the menu')
    ) {
      this.OrderService.setMenu(false);
      this.clearText();
    } else if (
      message.includes('thats all') ||
      message.includes('I am done') ||
      message.includes('thats it') ||
      message.includes("that's all") ||
      message.includes('I am done') ||
      message.includes("that's it") ||
      message.includes("I'm done")
    ) {
      this.AudioService.confirm();
      this.readyToPay = true;
      this.clearText();
    } else if (
      (message.includes('yes') ||
        message.includes('yeah') ||
        message.includes('yup')) &&
      this.readyToPay === true
    ) {
      this.OrderService.setState(state.ReadyForPayment);
      this.clearText();
    } else {
      this.AudioService.repeat;
      this.clearText();
    }
  }

  add(text: any) {
    if (text.includes('burgers') || text.includes('hamburgers')) {
      this.burgers(text);
      this.clearText();
    } else if (text.includes('burger') || text.includes('hamburger')) {
      this.burger(text);
      this.clearText();
    } else if (text.includes('wings')) {
      this.wings(text);
      this.clearText();
    } else if (text.includes('chips') || text.includes('fries')) {
      this.chips(text);
      this.clearText();
    } else if (text.includes('coke') || text.includes('coca cola')) {
      this.coke(text);
      this.clearText();
    } else if (text.includes('fanta')) {
      this.fanta(text);
      this.clearText();
    }
    console.log('instruction' + text);
  }

  burger(text: string) {
    if (
      text.includes('bacon and cheese') ||
      text.includes('bacon and cheeseburger') ||
      text.includes('cheese') ||
      text.includes('cheeseburger')
    ) {
      this.OrderService.addItem('cheeseBurger', 1, 'add');
      this.notes('cheeseBurger', text);
      this.remove('cheeseBurger', text);
      this.clearText();
    } else if (
      text.includes('chicken') ||
      text.includes('chicken hamburger') ||
      text.includes('chickenburger') ||
      text.includes('chicken burger')
    ) {
      this.OrderService.addItem('chickenBurger', 1, 'add');
      this.notes('chickenBurger', text);
      this.remove('chickenBurger', text);
      this.clearText();
    } else {
      this.OrderService.addItem('burger', 1, 'add');
      this.notes('burger', text);
      this.remove('burger', text);
      this.clearText();
    }
  }

  burgers(text: any) {
    if (
      text.includes('bacon and cheese') ||
      text.includes('bacon and cheeseburgers') ||
      text.includes('cheese') ||
      text.includes('cheeseburgers')
    ) {
      const number = text.match(/\d+/);
      this.OrderService.addItem('cheeseBurger', number, null);
      this.notes('cheeseBurger', text);
      this.remove('cheeseBurger', text);
      this.clearText();
    } else if (
      text.includes('chicken') ||
      text.includes('chicken hamburgers') ||
      text.includes('chickenburgers') ||
      text.includes('chicken burgers')
    ) {
      const number = text.match(/\d+/);
      this.OrderService.addItem('chickenBurger', number, null);
      this.notes('chickenBurger', text);
      this.remove('chickenBurger', text);
      this.clearText();
    } else {
      const number = text.match(/\d+/);
      this.OrderService.addItem('burger', number, null);
      this.notes('burger', text);
      this.remove('burger', text);
      this.clearText();
    }
  }

  wings(text: any) {
    if (
      text.includes('twelve') ||
      text.includes(12) ||
      text.includes('large') ||
      text.includes('big')
    ) {
      this.OrderService.addItem('wings12', 1, 'add');
      this.notes('wings12', text);
      this.remove('wings12', text);
      this.clearText();
    } else {
      this.OrderService.addItem('wings8', 1, 'add');
      this.notes('wings8', text);
      this.remove('wings8', text);
      this.clearText();
    }
  }

  chips(text: any) {
    if (text.includes('large') || text.includes('big')) {
      this.OrderService.addItem('chipsLarge', 1, 'add');
      this.notes('chipsLarge', text);
      this.remove('chipsLarge', text);
      this.clearText();
    } else {
      this.OrderService.addItem('chipsMedium', 1, 'add');
      this.notes('chipsMedium', text);
      this.remove('chipsMedium', text);
      this.clearText();
    }
  }

  coke(text: any) {
    if (text.includes('cokes') || text.includes('coca colas')) {
      const number = text.match(/\d+/);
      this.OrderService.addItem('coke', number, null);
      this.notes('coke', text);
      this.remove('coke', text);
      this.clearText();
    } else {
      this.OrderService.addItem('coke', 1, 'add');
      this.notes('coke', text);
      this.remove('coke', text);
      this.clearText();
    }
  }

  fanta(text: any) {
    if (text.includes('fantas')) {
      const number = text.match(/\d+/);
      this.OrderService.addItem('fanta', number, null);
      this.notes('fanta', text);
      this.remove('fanta', text);
      this.clearText();
    } else {
      this.OrderService.addItem('fanta', 1, 'add');
      this.notes('fanta', text);
      this.remove('fanta', text);
      this.clearText();
    }
  }

  notes(item: string, text: any) {
    console.log('Notes -----' + text);
    if (
      text.includes('with') ||
      text.includes('without') ||
      text.includes('no')
    ) {
      this.OrderService.addNotes(item, text);
      this.clearText();
    }
  }

  remove(item: string, text: any) {
    if (text.includes('all')) {
      this.OrderService.addItem(item, 1, 'clear');
      this.clearText();
    } else if (
      text.includes('remove') ||
      text.includes('dont want') ||
      text.includes("don't want") ||
      text.includes('rid of')
    ) {
      this.OrderService.addItem(item, 1, 'remove');
      this.clearText();
    }
  }

  clearText() {
    this.text = '';
  }
}
