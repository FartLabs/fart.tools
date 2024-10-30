import { createReporter } from "ga";

const GOOGLE_ANALYTICS_ID = Deno.env.get("GOOGLE_ANALYTICS_ID")!;

const ga = createReporter({ id: GOOGLE_ANALYTICS_ID });

export function useGoogleAnalytics(
  fn: (
    request: Request,
    info: Deno.ServeHandlerInfo<Deno.NetAddr>,
  ) => Response | Promise<Response>,
) {
  return async function (
    request: Request,
    info: Deno.ServeHandlerInfo<Deno.NetAddr>,
  ) {
    let error;
    let response: Response;
    const start = performance.now();
    try {
      response = await fn(request, info);
    } catch (e) {
      error = e;
    } finally {
      ga(request, info, response!, start, error);
    }

    return response!;
  };
}
