import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import TemplateVideoPage from "../../components/templateVideoPage";
import SearchIcon from '../../assets/menuIcons/search.png';
import api from "../../api";
import { Container, Image, Message } from "./styles";
import NotFound from "../../assets/no-results.png"

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function SearchResults() {
    const [searchVideos, setSearchVideos] = useState([]);
    const [empty, setEmpty] = useState(false);
    const query = useQuery();
    const searchinput = query.get('input')

    useEffect(() => {
        api.get(`/video/search?input=${searchinput}`)
            .then(res => {
                setSearchVideos(res.data.videos);
                setEmpty(false);
            }).catch(err => {
                console.log("Erro ao puxar videos", err);
                setEmpty(true);
            })
    }, [searchinput]);

    return (
        <>
            {empty ?
                <Container>
                    <Image src={NotFound} />
                    <Message>{`Não foram encontrados resultados para "${searchinput}".`}</Message>
                </Container>
                :
                <TemplateVideoPage
                    icon={SearchIcon}
                    title={`Resultados encontrados para '${searchinput}'`}
                    render={searchVideos}
                />
            }
        </>
    );
};

export default SearchResults;