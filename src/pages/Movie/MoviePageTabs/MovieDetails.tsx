import * as React from 'react'
import {movieDetailsType} from "../../../types/types";

interface IMovieDetailsProps {
    details: movieDetailsType
}

const MovieDetails: React.FC<IMovieDetailsProps>  = ({details}) => {

    React.useEffect(()=>{alert(details)},[details])
    const dataDetails = [
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
            value: details.production_countries.map((item : any )=> item.name)
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
            value: details.production_companies.map((item: any) => item.name)
        },
        {
            name: "Жанры",
            value: details.genres.map((item: any) => item.name)
        }
    ]

    return (
        <>
            <div>Details here</div>
            <table>
                <tbody>
                {dataDetails.map((item,index) => (
                    <tr>
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