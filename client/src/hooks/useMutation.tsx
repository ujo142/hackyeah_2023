import { useRouter } from "next/navigation";
import { useState } from "react";

interface State<TData> {
  data: TData | null;
  isMutating: boolean;
  isError: boolean;
  errorMessage: string | null;
}

interface HookParams<TData> {
  query: RequestInfo | URL;
  method: RequestInit["method"];
  initOptions?: Omit<RequestInit, "body" | "method">;
  onSuccess?: (data: TData) => void;
  onError?: (errorMessage: string) => void;
}

export const useMutation = <TData = unknown, TVariables = unknown>({
  query,
  method = "POST",
  initOptions,
  onSuccess,
  onError,
}: HookParams<TData>) => {
  const router = useRouter();

  const [state, setState] = useState<State<TData>>({
    data: null,
    isMutating: false,
    isError: false,
    errorMessage: null,
  });

  const mutate = async (variables?: TVariables, searchParams = "") => {
    setState({
      data: null,
      isMutating: true,
      isError: false,
      errorMessage: null,
    });

    try {
      const res = await fetch(`${query}${searchParams}`, {
        method,
        body: variables && JSON.stringify(variables),
        ...initOptions,
      });

      if (!res.ok) {
        const data = await res.json();

        const errorMessage =
          data.errors[0].message ||
          "Coś poszło nie tak, spróbuj ponownie później.";

        setState({
          data: null,
          isMutating: false,
          isError: true,
          errorMessage,
        });
        onError?.(errorMessage);
        return;
      }

      router.refresh();

      const data = res.status !== 204 ? await res.json() : "Sukces!";

      onSuccess?.(data);
      setState({ data, isMutating: false, isError: false, errorMessage: null });
    } catch (error) {
      const errorMessage = "Coś poszło nie tak, spróbuj ponownie później.";

      setState({ data: null, isMutating: false, isError: true, errorMessage });
      onError?.(errorMessage);
    }
  };

  return {
    mutate,
    ...state,
  };
};
