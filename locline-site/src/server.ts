import handler from "@tanstack/react-start/server-entry";

// SSR error wrapper: makes sure an unhandled exception in server rendering
// returns a plain 500 response instead of crashing the Nitro/Cloudflare worker.
export default {
  async fetch(request: Request) {
    try {
      return await handler.fetch(request);
    } catch (error) {
      console.error("[server] Unhandled SSR error:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  },
};
