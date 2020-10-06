import * as React from 'react'
import {MovieDetailsType} from "../../../types/types";

interface IMovieDetailsProps {
    details: null | MovieDetailsType
}

const MovieDetails: React.FC<IMovieDetailsProps>  = ({details}) => {

    const dataDetails = details ? [
        {
            name: "Статус",
            value: details.status
        },
        {
            name: "Дата выхода",
            value: details.release_date
        },
        {
            name: "Продолжительность",
            value: `${details.runtime}минут`
        },
        {
            name: "Язык оригинала",
            value: details.original_language
        },
        {
            name: "Страна",
            value: details.production_countries ? details.production_countries.map((item : any )=> item.name) : null
        },
        {
            name: "Бюджет",
            value: `${details.budget}$`
        },
        {
            name: "Сборы",
            value: `${details.revenue}$`
        },
        {
            name: "Компания",
            value: details.production_companies ? details.production_companies.map((item: any) => item.name) : null
        },
        {
            name: "Жанры",
            value: details.genres ? details.genres.map((item: any) => item.name) : null
        }
    ] : null;

    return (
        <>
            <div>Details here</div>
            <table>
                <tbody>
                {details && dataDetails.map((item,index) => (
                    <tr key={index}>
                        <th scope="row">{item.name}</th>
                        <td>{`${item.value}`}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>

    );
}

export default MovieDetails;