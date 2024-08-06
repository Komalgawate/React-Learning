import { useState } from "react";
import "./comment.css";
import Commentsform from "./commentsform";

export default function Comment() {
    let [Comment, setComment] = useState([
        {
            username: "@kg",
            remarks: "great job",
            rating: 4
        }
    ]);

    let addnewcomment = (comment) => {
        setComment((currcomment) =>
            [...currcomment, comment]
        );
    };

    return (
        <>
            <div>
                <h2 style={{ color: "white" }}>All Comments</h2>
                {
                    Comment.map((comment, idx) => (
                        <div key={idx} className="comment">
                            <span>{comment.remarks}</span>
                            &nbsp;
                            <span>(rating={comment.rating})</span>
                            <p>-{comment.username}</p>
                        </div>
                    ))
                }
            </div>
            <hr />
            <Commentsform addnewcomment={addnewcomment} />
        </>
    );
}
