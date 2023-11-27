import { CommentServices } from "../services/commentService";
const commentServices = new CommentServices();

export const getCommentContext = async () => {
  try {
    return await commentServices.getComments();
  } catch (error) {
    console.log(error);
  }
};
