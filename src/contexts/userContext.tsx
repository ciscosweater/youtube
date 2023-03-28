import { createContext, useEffect, useState } from "react";
import api from "../api";

export const UserContext = createContext({} as any)

export const UserStorage = ({ children }: any) => {

    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);

    const getUser = (token: string) => {
        api.get('/user/get-user', { headers: { Authorization: token } }).then(({ data }) => {
            setUser(data.user);
            setLogin(true);
        }).catch((error) => {
            console.log('Usuario nao autenticado', error)
        });
    };

    useEffect(() => {
        getUser(token);
    }, [token]);

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
        window.location.reload();
    };

    const handleLogin = async (email: string, password: string) => {
        try {
            const { data } = await api.post('/user/sign-in', { email, password });
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
            return true;
        } catch (error) {
            console.log('Nao foi possivel fazer o login', error);
            return false;
        }
    };

    const handleRegister = async (name: string, email: string, password: string) => {
        try {
            await api.post('/user/sign-up', { name, email, password });
            console.log('Cadastro efetuado com sucesso.');
            return true;
        } catch (error) {
            console.log('Nao foi possivel fazer o cadastro.', error);
            return false;
        }
    };

    return (
        <UserContext.Provider value={{
            login,
            user,
            handleLogin,
            handleRegister,
            logOut
        }}>
            {children}
        </UserContext.Provider>
    );
};