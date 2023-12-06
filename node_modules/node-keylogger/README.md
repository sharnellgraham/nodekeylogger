
# README for Node Keylogger

## Description

This module provides a simple and efficient way to capture keyboard input in Node.js applications. It supports all standard keys, modifier keys, and function keys.

## Features

* Captures key presses, releases, and holds.
* Translates key codes to human-readable key names.
* Supports multiple keyboard devices.
* Emits events for key events.
* Highly configurable.

## Installation

```bash
npm install node-keylogger
Use code with caution. Learn more
Usage
JavaScript
const Keyboard = require('node-keylogger');

const keyboard = new Keyboard();

keyboard.on('key', (event) => {
  console.log(`Key pressed: ${event.keyId}`);
});

keyboard.on('error', (err) => {
  console.error(err);
});


## API

### Keyboard(dev?)

Creates a new Keyboard instance.

**Parameters:**

* `dev` (optional): The device name of the keyboard (e.g., "event0").

**Returns:**

A new Keyboard object.

### keyboard.on(event, listener)

Adds an event listener.

**Parameters:**

* `event`: The event name (e.g., "key", "error").
* `listener`: The event listener function.

**Returns:**

The Keyboard object.

### keyboard.emit(event, data)

Emits an event.

**Parameters:**

* `event`: The event name.
* `data`: The event data.

**Returns:**

The Keyboard object.

## Key Events

### key

Emitted when a key is pressed, released, or held.

**Properties:**

* `type`: The type of event ("keydown", "keyup", or "keypress").
* `keyId`: The human-readable name of the key (e.g., "KEY_ESC").
* `keyCode`: The key code of the key.
* `timeS`: The time the event occurred in seconds.
* `timeMS`: The time the event occurred in milliseconds.

### error

Emitted when an error occurs.

**Properties:**

* `message`: The error message.
* `stack`: The error stack.

## Key Codes

The `Keys` object provides a mapping of key codes to human-readable names. You can access this object through the `keyboard.Keys` property.

## Example

This example captures all key presses and logs them to the console:

javascript
const Keyboard = require('node-keylogger');

const keyboard = new Keyboard();

keyboard.on('key', (event) => {
  console.log(`Key pressed: ${event.keyId}`);
});

keyboard.on('error', (err) => {
  console.error(err);
});
Use code with caution. Learn more
License
This module is licensed under the MIT license.

Disclaimer
This module is intended for educational purposes only. It should not be used for malicious purposes.

