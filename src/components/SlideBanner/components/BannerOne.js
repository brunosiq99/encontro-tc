import React from "react";
import { styled } from "styled-components";



const StyledBannerOne = styled.div`
    background-image: url('https://www.encontromotociclistas.com.br/assets/Img/2022/banner.png');
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;
    .banner__content{
        align-items: center;
        backdrop-filter: brightness(30%);
        color: #fdfdfd;
        display: flex;
        flex-direction: column;
        font-family:  cursive;
        font-size: 1.75rem;
        font-weight: 200;
        height: 100%;
        justify-content: space-around;
        padding: 2rem 0;
        width: 100%;
    }
    .banner__apresentation{
        position: relative;
    }
    .banner__apresentation p{
        position: absolute;
        left: calc(50% - 0.875rem)
    }
    .banner__logo{
        width: 27.5rem;
    }
    div{
        text-align: center;
    }
`

const BannerOne = () => {
    return(
        <StyledBannerOne>
            <div className="banner__content">
                <div className="banner__apresentation">
                    <p>
                        VI
                    </p>
                    <img 
                        src="https://www.encontromotociclistas.com.br/assets/Img/new-logo-23-white.png" 
                        className="banner__logo"
                        alt="Encontro Nacional de Motociclistas e Triciclistas de Três Corações, Minas Gerais"
                    />
                </div>
                <div>
                    <p>Dias 11, 12 e 13 de Agosto</p>
                    <p>Parque Dondinho - Av. Quinto Centenário</p>
                </div>

            </div>
        </StyledBannerOne>
    )
}

export default BannerOne;