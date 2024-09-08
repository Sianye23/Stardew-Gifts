import {useLocation} from 'react-router-dom';
import React from "react";
import "./table.css";
import "./DetailsPage.css"
import giftsData from "./gifts.json";

export const DetailsPage = () => {
    const information = useLocation().state
    const gift = information.Gift;


    function clean(villagers) {
        const villagersArray = villagers.split('-');
        console.log(villagersArray.length)
        if (villagersArray.length === 1){
            return []
        }
        else{
            return villagersArray.map(villager => villager + ".png");
        }
    }

    const love = clean(information.Love);
    const like = clean(information.Like);
    const neutral = clean(information.Neutral);
    const dislike = clean(information.Dislike);
    const hate = clean(information.Hate);




    return (
        <div>
            <div>
                <h1 style={{fontSize: 64, marginBottom: 20}}>{gift}</h1>
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
