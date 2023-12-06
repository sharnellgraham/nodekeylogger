'use strict';
const fs = require('fs');
const EventEmitter = require('events').EventEmitter;
const toKey = require('./keycodes');

const EVENT_TYPES = ['keyup', 'keypress', 'keydown'];
const EV_KEY = 1;

