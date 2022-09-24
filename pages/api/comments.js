import { comments } from "../../assets/data/comments";

export default function handler(req, res){
    res.status(200).json(comments);
}