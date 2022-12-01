import { onMounted, onUnmounted } from 'vue';

export function useEventListener(
  target: EventTarget,
  handler: keyof GlobalEventHandlersEventMap,
  listener: EventListenerOrEventListenerObject | ((t?: any, ev?: any) => any),
  options?: AddEventListenerOptions | EventListenerOptions
) {
  onMounted(() => {
    target.addEventListener(handler, listener, options);
  });
  onUnmounted(() => {
    target.removeEventListener(handler, listener, options);
  });
}
