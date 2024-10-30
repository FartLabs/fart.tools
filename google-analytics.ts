import { GA4Report } from "@kitsonk/ga4";

const GOOGLE_ANALYTICS_ID = Deno.env.get("GOOGLE_ANALYTICS_ID")!;

export function useGoogleAnalytics(
  fn: (
    request: Request,
    info: Deno.ServeHandlerInfo<Deno.NetAddr>,
  ) => Response | Promise<Response>,
) {
  return async function (
    request: Request,
    conn: Deno.ServeHandlerInfo<Deno.NetAddr>,
  ) {
    let response: Response;
    try {
      response = await fn(request, conn);
    } finally {
      const report = new GA4Report({
        measurementId: GOOGLE_ANALYTICS_ID,
        conn,
        request,
        response: response!,
      });
      await report.send();
    }

    return response;
  };
}
