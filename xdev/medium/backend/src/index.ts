import { Hono } from 'hono'
import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accerlerate"


const prisma = new PrismaClient ({
    datasourceUrl: env.DATABASE_URL,
}).$extends(withAccelerate())

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get("/api/v1/blog/:id", (c) => {
    const id = c.req.param("id");
    console.log(id);
    return c.text("BLOG with particular id");
});

app.get("/api/v1/blog/bulk", (c) => {
    return c.text("All the blog");
});

app.post("/api/v1/user/signin", (c) => {
    return c.text("signin route");
});

app.post("/api/v1/user/signup", (c) => {
    return c.text("signup route");
});

app.post("/api/v1/blog", (c) => {
    return c.text("blog route");
});

export default app
