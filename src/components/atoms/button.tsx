import styled from '@emotion/styled'

export const MediumBlackButton = styled.button`
    height: 36px;
    padding: 0px 24px;
    border-radius: 32px;
    font-family: Monsterrat-Medium;
    font-size: 18px;
    color: #ffffff;
    padding: 12px 24px;
    border: 2px;
    background-color: #1f2330;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #777a85;
    }
    &:active {
        border: 2px solid #1f2330;
    }
`

export const MediumRedButton = styled(MediumBlackButton)`
    background-color: #7d2d3a;
    &:hover {
        background-color: #b05f6c;
    }
    &:active {
        border: 2px solid #7d2d3a;
    }
`

export const MediumBlueButton = styled(MediumBlackButton)`
    background-color: #364da8;
    &:hover {
        background-color: #6379cf;
    }
    &:active {
        border: 2px solid #364da8;
    }
`
