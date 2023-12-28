import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Infos = () => {
    const { category, id } = useParams();
    const [infos, setInfos] = useState({});
    const nav = useNavigate();
    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/${category}/${id}`)
            .then((res) => {
                setInfos(res.data);
            })
            .catch((err) => {
                console.log(err);
                nav("*");
            });
    }, [category, id]);
    console.log(infos);
    if (category === "people") {
        return (
            <div className="pt-5">
                <h1>{infos.name}</h1>
                <p>
                    <b>Height:</b> {infos.height}
                </p>
                <p>
                    <b>Mass:</b> {infos.mass}
                </p>
                <p>
                    <b>Hair Color:</b> {infos.hair_color}
                </p>
                <p>
                    <b>Skin Color:</b> {infos.skin_color}
                </p>
            </div>
        );
    } else
        return (
            <div className="pt-5">
                <h1>{infos.name}</h1>
                <p>
                    <b>Climate:</b> {infos.climate}
                </p>
                <p>
                    <b>Terrain:</b> {infos.terrain}
                </p>
                <p>
                    <b>Surface Water:</b> {infos.surface_water}
                </p>
                <p>
                    <b>Population:</b> {infos.population}
                </p>
            </div>
        );
};

export default Infos;
