import {useState} from "react";
import './Commentsform.css';

export default function Commentsform({addnewcomment}) {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        addnewcomment(formData);
        
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        });
    };

    return (
        <div className="comments-form-container">
            <h4>Give A Comment!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    placeholder="username"
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}
                    id="username"
                    name="username"
                />
                 
                <label htmlFor="remarks">Remarks</label>
                <textarea
                    placeholder="Remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                    id="remarks"
                    name="remarks"
                ></textarea>
                    
                <label htmlFor="rating">Rating</label>
                <input
                    placeholder="rating"
                    type="number"
                    value={formData.rating}
                    min={1}
                    max={5}
                    id="rating"
                    onChange={handleInputChange}
                    name="rating"
                />
          
                <button type="submit">Add Comments</button>
            </form>
        </div>
    );
}
