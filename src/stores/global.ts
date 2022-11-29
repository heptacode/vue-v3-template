import { defineStore } from 'pinia';

interface GlobalState {
  isThemeDark: boolean;
}
export const useGlobalStore = defineStore('global', {
  state: (): GlobalState => ({
    isThemeDark:
      localStorage.getItem('theme') === 'true' ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches),
  }),
  actions: {
    toggleTheme() {
      this.isThemeDark = !this.isThemeDark;

      if (this.isThemeDark) {
        document.documentElement.classList.add('darkTheme');
      } else {
        document.documentElement.classList.remove('darkTheme');
      }
    },
  },
  persist: {
    paths: ['isThemeDark'],
  },
});
