import { defineStore } from 'pinia';

export const Store1 = defineStore('Store1', {
  state: () => {
    return {
      age: 3,
    };
  },
  actions: {
    setUser() {
      this.age = this.age + 1;
    },
  },
});
