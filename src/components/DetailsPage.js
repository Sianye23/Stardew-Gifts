import {useLocation} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import "./table.css";
import "./DetailsPage.css"
import giftsData from "./gifts.json";
import { useNavigate } from 'react-router-dom';

export const DetailsPage = () => {

    const [love, setLove] = useState([]);
    const [like, setLike] = useState([]);
    const [neutral, setNeutral] = useState([]);
    const [dislike, setDislike] = useState([]);
    const [hate, setHate] = useState([]);

    const giftName = useLocation().pathname.slice(1).replace("_", " ");
    const navigate = useNavigate();

    console.log("rending...")
    let giftInformation;
    giftInformation = giftsData.find(obj => obj.Gift === giftName);

    console.log(giftInformation);

    useEffect(() => {
        console.log("aaaaa");
        if (!giftInformation) {
            console.log("aaa")
            navigate(`/`);
        }
        else{
            setLove(clean(giftInformation.Love));
            setLike(clean(giftInformation.Like));
            setNeutral(clean(giftInformation.Neutral));
            setDislike(clean(giftInformation.Dislike));
            setHate(clean(giftInformation.Hate));
        }
    })
    function clean(villagers) {
        const villagersArray = villagers.split('-');
        if (villagersArray.length === 1){
            return []
        }
        else{
            return villagersArray.map(villager => villager + ".png");
        }
    }

    return (
        <div>
            <div>
                <h1 style={{fontSize: 64, marginBottom: 20}}>{giftName}</h1>
                <table className="details-table">
                    <tbody>
                    <tr>
                        <td>Love</td>
                        <td>
                            {love.map((url) => (
                                <img src={url} height="100" width="100"/>
                            ))}
                        </td>
                    </tr>
                    <tr>
                        <td>Like</td>
                        <td>
                            {like.map((url) => (
                                <img src={url} height="100" width="100"/>
                            ))}
                        </td>
                    </tr>
                    <tr>
                        <td>Neutral</td>
                        <td>
                            {neutral.map((url) => (
                                <img src={url} height="100" width="100"/>
                            ))}
                        </td>
                    </tr>
                    <tr>
                        <td>Dislike</td>
                        <td>
                            {dislike.map((url) => (

                                <img src={url} height="100" width="100"/>
                            ))}
                        </td>
                    </tr>
                    <tr>
                        <td>Hate</td>
                        <td>
                            {hate.map((url) => (
                                <img src={url} height="100" width="100"/>
                            ))}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>

            );
            };
