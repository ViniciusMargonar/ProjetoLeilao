import React from "react";
import style from "./Header.module.css";
import { Menubar } from 'primereact/menubar';
import homeIcon from '../../assets/trauctionLogo.png';
        

const Header = () =>{
    const items = [
        {
            template: (item, options) => {
                return (
                    <div className={options.className} style={{ display: 'flex', alignItems: 'left' }}>
                        <img src={homeIcon} alt="Home Icon" style={{ width: '50px', marginRight: '8px' }} />
                        <span>{item.label}</span>
                    </div>
                );
            }
        },
        {
            label: 'Página Inicial',
            icon: 'pi pi-home'
        },
        {
            label: 'Perfil',
            icon: 'pi pi-user'
        },
        {
            label: 'Leilões',
            icon: 'pi pi-warehouse',
            items: [
                {
                    label: 'Caminhões',
                    icon: 'pi pi-truck  ',
                    items: [
                        {
                            label: 'DAF',
                        },
                        {
                            label: 'Iveco',
                        },
                        {
                            label: 'Mercedes-Benz',
                        },
                        {
                            label: 'Scania',
                        },
                        {
                            label: 'Volkswagen',
                        },
                        {
                            label: 'Volvo',
                        }
                    ]
                },
                {
                    label: 'Colhedoras',
                    icon: 'pi pi-truck',
                    items: [
                        {
                            label: 'Case',
                        },
                        {
                            label: 'Claas',
                        },
                        {
                            label: 'Fendt',
                        },
                        {
                            label: 'John Deere',
                        },
                        {
                            label: 'Massey Ferguson',
                        },
                        {
                            label: 'New Holland',
                        },
                        {
                            label: 'Sampo Rosenlew',
                        },
                        {
                            label: 'Valtra',
                        }
                    ]
                },
                {
                    label: 'Implementos',
                    icon: 'pi pi-truck',
                    items: [
                        {
                            label: 'Grade Niveladora',
                            icon: 'pi pi-truck',
                            items: [
                                {
                                    label: 'DMB'
                                },
                                {
                                    label: 'Santa Izabel'
                                },
                                {
                                    label: 'Hidralmor'
                                },
                                {
                                    label: 'John Deere'
                                },
                                {
                                    label: 'Serrat'
                                }
                            ]
                        },
                        {
                            label: 'Pulverizadores',
                            icon: 'pi pi-truck',
                            items: [
                                {
                                    label: 'DMB'
                                },
                                {
                                    label: 'Santa Izabel'
                                },
                                {
                                    label: 'Bertini'
                                },
                                {
                                    label: 'Jacto'
                                },
                                {
                                    label: 'Sprit'
                                }
                            ]
                        },
                        {
                            label: 'Plantadeiras',
                            icon: 'pi pi-truck',
                            items: [
                                {
                                    label: 'Bertini'
                                },
                                {
                                    label: 'DMB'
                                },
                                {
                                    label: 'John Deere'
                                },
                                {
                                    label: 'Kuhn'
                                },
                                {
                                    label: 'Serrat'
                                }
                            ]
                        },
                        {
                            label: 'Arados',
                            icon: 'pi pi-truck',
                            items: [
                                {
                                    label: 'Bertini'
                                },
                                {
                                    label: 'DMB'
                                },
                                {
                                    label: 'John Deere'
                                },
                                {
                                    label: 'Kuhn'
                                },
                                {
                                    label: 'Serrat'
                                }
                            ]
                        },
                        {
                            label: 'Enleiradores',
                            icon: 'pi pi-truck',
                            items: [
                                {
                                    label: 'DMB'
                                },
                                {
                                    label: 'John Deere'
                                },
                                {
                                    label: 'Kuhn'
                                },
                                {
                                    label: 'Serrat'
                                },
                                {
                                    label: 'Valtra'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Tratores',
                    icon: 'pi pi-truck',
                    items: [
                        {
                            label: 'Case',
                        },
                        {
                            label: 'Fendt',
                        },
                        {
                            label: 'JCB',
                        },
                        {
                            label: 'John Deere',
                        },
                        {
                            label: 'Kubota',
                        },
                        {
                            label: 'Massey Ferguson',
                        },
                        {
                            label: 'New Holland',
                        },
                        {
                            label: 'Valtra',
                        },
                        {
                            label: 'Zetor',
                        }
                    ]
                }
            ]
        },
        {
            label: 'Criar Leilão',
            icon: 'pi pi-tags'
        }
    ];

    return(        
        <div className={`w-full ${style.header}`}>
            <Menubar 
                className={style.menu}
                model={items}
                breakpoint= "960px"
            />  
        </div>
    );
}
export default Header;