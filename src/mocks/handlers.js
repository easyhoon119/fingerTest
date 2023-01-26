import { rest } from "msw";
import quest from "./quest.json";

export const handler = [
    rest.get("/quest", async (req, res, ctx) => {
        await sleep(200);

        return res(ctx.status(200), ctx.json(quest));
    }),
    rest.get("quest/:id", async (req, res, ctx) => {
        await sleep(200);

        return res(ctx.status(200), ctx.json(quest[req.params.id]));
    }),
    rest.post("quest/change/:id", async (req, res, ctx) => {
        await sleep(200);

        quest = quest.map((item) =>
            Number(item.number) === Number(req.params.id)
                ? { ...item, number: req.body.new.toString() }
                : item,
        );

        return res(ctx.status(200), ctx.json(quest));
    }),
];

async function sleep(timeout) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}
