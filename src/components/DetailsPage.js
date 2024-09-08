import {useLocation} from 'react-router-dom';
import React from "react";
import "./table.css";
import "./DetailsPage.css"
import giftsData from "./gifts.json";

export const DetailsPage = () => {
    const giftName = useLocation().pathname.slice(1).replace("_", " ");

    const giftInformation = giftsData.find(obj => obj.Gift === giftName);

    function clean(villagers) {
        const villagersArray = villagers.split('-');
        if (villagersArray.length === 1){
            return []
        }
        else{
            return villagersArray.map(villager => villager + ".png");
        }
    }

    const love = clean(giftInformation.Love);
    const like = clean(giftInformation.Like);
    const neutral = clean(giftInformation.Neutral);
    const dislike = clean(giftInformation.Dislike);
    const hate = clean(giftInformation.Hate);




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
