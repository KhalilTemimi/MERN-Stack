import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [infoId, setInfoId] = useState(1);
    const [category, setCategory] = useState("people");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/" + category + "/" + infoId);
    };

    return (
        <div className="search">
            <form
                onSubmit={handleSubmit}
                className="d-flex justify-content-center align-items-end p-3 gap-3 flex-wrap"
            >
                <div>
                    <label htmlFor="select" className="form-label">
                        Search for
                    </label>
                    <select
                        id="select"
                        onChange={(e) => setCategory(e.target.value)}
                        className="form-select"
                    >
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id" className="form-label">
                        ID
                    </label>
                    <input
                        id="id"
                        type="number"
                        onChange={(e) => setInfoId(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div>
                    <button className="btn btn-primary">Search</button>
                </div>
            </form>
        </div>
    );
};

export default Search;
