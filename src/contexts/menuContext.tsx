import { createContext, useState } from "react";

interface IProps {
    openMenu: boolean;
    setOpenMenu: (value: boolean) => void;
}

const MenuContext = createContext<IProps>({
    openMenu: true,
    setOpenMenu: () => { }
});

const MenuStore: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(true)

    const contextValue: IProps = {
        openMenu,
        setOpenMenu
    };

    return (
        <MenuContext.Provider value={contextValue}>
            {children}
        </MenuContext.Provider>
    );
}

export { MenuContext, MenuStore }