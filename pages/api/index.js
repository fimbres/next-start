import { comments } from "../../assets/data/comments";

 export default function handler(req, res) {
   if(req.method === "GET"){
      res.status(200).json({ name: 'Home Route' });
   }
   else if(req.method === "POST"){
      const comment = req.body.comment;
      const newComment = {
         id: Date.now(),
         text: comment
      };
      comments.push(newComment);
      res.status(201).json(newComment);
   }
}
