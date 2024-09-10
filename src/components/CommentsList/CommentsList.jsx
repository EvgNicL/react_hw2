import { useState } from "react";

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
        ]);

    const removeComment = (id) => { 
        const newComments = comments.filter(comment => comment.id !== id);
        setComments(newComments);
     };    

    return (
        <>
        <h2>Список комментариев</h2>
        <ul className="ul">
        {comments.map((comment) => 
            <li className="li" key={crypto.randomUUID()}>{comment.text}
            <button className="btn" onClick={() => removeComment(comment.id)}>x</button>
            </li>)}
        </ul>
        </>
     );
}

export default CommentsList;