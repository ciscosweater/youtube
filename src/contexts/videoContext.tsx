import { createContext, useEffect, useState, useContext } from "react";
import api from "../api";
import { UserContext } from "./userContext";

export const VideoContext = createContext({} as any)

export const VideoStorage = ({ children }: any) => {

    const { user } = useContext(UserContext);

    const [homeVideos, setHomeVideos] = useState([
        {
            title: '',
            profile: '',
            stats: '',
            thumblink: '',
            channelimage: '',
            videolink: '',
        }
    ])

    const [userVideos, setUserVideos] = useState([
        {
            title: '',
            profile: '',
            stats: '',
            thumblink: '',
            channelimage: '',
            videolink: '',
        }
    ])

    const [token] = useState(localStorage.getItem('token') as string);

    useEffect(() => {
        api.get('/video/homevideos')
            .then(res => {
                setHomeVideos(res.data.videos)
            }).catch(err => {
                console.log("Erro ao puxar videos", err)
            })
    }, []);

    useEffect(() => {
        console.log("user_id", user.id)
        api.get(`/video/list-videos/${user.id}`, { headers: { Authorization: token } })
            .then(res => {
                setUserVideos(res.data.videos)
                console.log("uservideos", userVideos)
            }).catch(err => {
                console.log("Erro ao puxar videos", err)
            })
    }, [user.id, token, userVideos]);

    const uploadVideo = async (title: string, profile: string, stats: string, thumblink: string, channelimage: string, videolink: string, user_id: string) => {
        try {
            await api.post('/video/create-video', { title, profile, stats, thumblink, channelimage, videolink, user_id }, { headers: { Authorization: token } });
            console.log("Video enviado com sucesso");
            return true;
        } catch (error) {
            console.log("Nao foi possivel enviar o video", error);
            return false
        }
    };

    return (
        <VideoContext.Provider value={{
            homeVideos,
            userVideos,
            uploadVideo
        }}>
            {children}
        </VideoContext.Provider>
    );
};