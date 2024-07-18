// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
//http://localhost:3000/api/blogs
export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogposts");
  const newData = data.slice(1);
  let myFile;
  let allBlogs = [];
  for (let i = 0; i < newData.length; i++) {
    const item = newData[i];
    myFile = await fs.promises.readFile("blogposts/" + item, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }
  res.status(200).json(allBlogs);
}
