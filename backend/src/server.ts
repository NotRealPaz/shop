// server.ts
import { Elysia, t } from "elysia";

const app = new Elysia()
	.get("/", () => "Hi Elysia")
	.get("/health", () => "alive")
	.get("/id/:id", ({ params: { id } }) => id)
	.post("/mirror", ({ body }) => body, {
		body: t.Object({
			id: t.Number(),
			name: t.String(),
		}),
	})
	.listen(3000, ({ hostname, port }) => {
		console.log(`🦊 Elysia is running at ${hostname}:${port}`);
	});

export type App = typeof app;
