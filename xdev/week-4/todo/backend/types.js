const z = require("zod")


/*
 *  for the post request /todo
 *  {
 *    title: string,
 *    description: string,
 *  }
 *
 *  for the put requrest /completed
 *  {
 *    id: string
 *  }
 *
 * */

const createTodo = z.object({
    title: z.string(),
    description: z.string(),
});

const updateTodo = z.object({
    _id: z.string(),
});

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo,
}
