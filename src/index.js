'use strict';
const fs = require('fs');
const EventEmitter = require('events').EventEmitter;
const toKey = require('./keycodes');

const EVENT_TYPES = ['keyup', 'keypress', 'keydown'];
const EV_KEY = 1;

function Keyboard(dev) {
    this.dev = dev || 'event0';
    this.bufferSize = 24;
    this.buffer = new Buffer(this.bufferSize);
    this.data = fs.createReadStream(`/dev/input/${this.dev}`);
    this.onRead();
  }
  Keyboard.prototype.onRead = function onRead() {
    const self = this;
  
    this.data.on('data', data => {
      this.buffer = data.slice(24);
      let event = parse(this, this.buffer);
      if (event) {
        event.dev = self.dev;
        self.emit(event.type, event);
      }
    });

    this.data.on('error', err => {
        self.emit('error', err);
        throw new Error(err);
       });
      
      }