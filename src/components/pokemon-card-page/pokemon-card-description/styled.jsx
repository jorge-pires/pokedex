import styled from "styled-components"

export const Div = styled.div`
    img{
        width: 200px;
    }

    ul{
        padding: 30px 0;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-wrap: wrap;

        h3{
            margin-bottom: 50px;
            width: 100%;
        }

        li{
            margin-bottom: 30px;
            margin-left: 30px;

            h4{
                margin-bottom: 20px;
            }

            p{
                background-color: ${props => props.theme.descriptionBackground};
                padding: 8px;
                text-shadow: none;
                color: ${props => props.theme.color};
                font-size: 12px;
                line-height: 20px;
                padding: 15px;
            }
        }
    }

    @media (max-width: 415px) {

        h3 {
            line-height: 25px;
        }

        ul{
            li{
                margin-bottom: 30px;
                margin-left: 0px;
                width: 100%;

                p{
                    text-align: center;
                }
            }
        }
    }
`