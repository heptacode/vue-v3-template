import { Ref, ref } from 'vue';

export type AsyncDataStatus = 'loading' | 'clear' | 'error';

interface AsyncQueryOptions<T> {
  onSuccess?: (data?: T) => void;
  onLoadingStateChanged?: (isLoading: boolean) => void;
  onError?: (err?: Error) => void;
}
export function useAsyncQuery<T = unknown>(
  asyncFunction: () => Promise<T>,
  options?: AsyncQueryOptions<T>
) {
  const data: Ref<T | null> = ref(null);
  const isLoading = ref(true);
  const isError = ref(false);
  const error: Ref<Error | null> = ref(null);

  async function refetch() {
    isLoading.value = true;
    isError.value = false;
    options?.onLoadingStateChanged?.(true);

    try {
      data.value = await asyncFunction();
      isLoading.value = false;
      options?.onLoadingStateChanged?.(false);
    } catch (err: Error | any) {
      isError.value = true;
      error.value = err;
      options?.onError?.(err);
    } finally {
      isLoading.value = false;
      options?.onLoadingStateChanged?.(false);
    }
  }

  return { data, isLoading, isError, error, refetch };
}
