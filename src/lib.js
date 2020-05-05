/** Class representing a Reactive Storage. */
class ReactiveStorage {
  /**
  * Create a Reactive Storage.
  * @param {Object} [storage=window.localStorage] - Storage instance to use, can
  */
  constructor(storage = global.localStorage) {
    this.storage = storage;
    this.events = [];
  }

  /**
  * Subscribe to an event.
  * @param {String} [key] - The event key to subscribe.
  * @param {Function} [handler] - The listener callback.
  */
  subscribe(name, handler) {
    if (!this.events[name]) {
      this.events[name] = [];
    }

    this.events[name].push(handler);
  }

  /**
  * Remove an listener.
  * @param {String} [key] - The event key.
  * @param {Function} [handler] - The listener callback.
  */
  unsubscribe(key, handler) {
    const handlers = this.events[key];
    if (!handlers) return;

    this.events[key] = this.events[key]
      .filter((listener) => listener !== handler);
  }

  /**
  * Publish an event.
  * @param {String} [key] - The event key to publish.
  * @param {Object} [data] - The event data to publish.
  */
  publish(key, data) {
    const handlers = this.events[key];
    if (!handlers) return;
    handlers.forEach((handler) => {
      if (typeof handler === 'function') {
        handler.call(this, data);
      }
    });
  }

  /**
  * Remove all listener.
  */
  unsubscribeAll() {
    this.events = [];
  }

  /**
  * Get an item value.
  * @param {String} [key] - Item value to get.
  * @return {String|Object|Number} - The item value.
  */
  getItem(key) {
    const value = this.storage.getItem(key);
    return JSON.parse(value);
  }

  /**
  * Set an item value.
  * @param {String} [key] - The item to set.
  * @param {String|Object|Number} [newValue] - The value to set into the.
  */

  setItem(key, newValue) {
    const oldValue = this.storage.getItem(key);
    const event = {
      key,
      newValue,
      oldValue,
    };
    this.storage.setItem(key, JSON.stringify(newValue));
    this.publish(key, event);
  }

  /**
  * Remove an item.
  * @param {String} [key] - Item to remove.
  */
  removeItem(key) {
    return this.storage.removeItem(key);
  }

  /**
  * Clean all storage.
  */
  clear() {
    return this.storage.clear();
  }
}

export default ReactiveStorage;
