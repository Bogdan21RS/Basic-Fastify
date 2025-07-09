const fastify = require("fastify")({ logger: true });
const swagger = require("@fastify/swagger");
const swaggerUI = require("@fastify/swagger-ui");

// Register Swagger (core)
fastify.register(swagger, {
  swagger: {
    info: {
      title: "fastify-api",
      description: "API documentation",
      version: "1.0.0",
    },
  },
});

// Register Swagger UI (exposes the docs at /docs)
fastify.register(swaggerUI, {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
});

fastify.register(require("./routes/items"));

const PORT = 5000;

const start = async () => {
  try {
    await fastify.listen({ port: PORT, host: "0.0.0.0" });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
