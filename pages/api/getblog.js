// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//http://localhost:3000/api/getblog?slug=how-to-learn-reactjs
import * as fs from "fs";
export default function handler(req, res) {
  fs.readFile(`blogposts/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) { 
      res.status(200).json({ error: "No such blog found" });
    }
    console.log("data", req.query.slug);
    res.status(200).json(JSON.parse(data));
  });
}
