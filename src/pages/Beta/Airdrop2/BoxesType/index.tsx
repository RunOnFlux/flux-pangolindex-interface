import React, { useState } from 'react'
import { Text } from '@pangolindex/components'
import { ClaimBox, StyledLogo, Separator, BoxWrapper, SeparatorEmpty, QuestionBox } from '../styleds'
import WgmLogo from '../../../../assets/images/wgmlogo.png'
import { ButtonToConnect } from '../ButtonsType'
import { Button } from '@pangolindex/components'
import PlusLogo from 'src/assets/images/plus.png'
import MinusLogo from 'src/assets/images/minus.png'

export const BoxNotConnected = () => {

    return (
        <ClaimBox>
        <span style={{display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "20px"}}>
            <Text fontSize={28} fontWeight={700} lineHeight="33px" color="text10">
                Claim wagmiPNG
            </Text>
            <StyledLogo src={WgmLogo} size={"50px"}/>
        </span>
        <Separator />
        <span style={{padding: "20px"}}></span>
        <Text fontSize={16} fontWeight={500} lineHeight="18px" color="text10">
            Let's check if you are eligible!
        </Text>
        <span style={{padding: "20px"}}></span>
            <ButtonToConnect />
        <span style={{textAlign: "center"}}>
            <Text fontSize={14} fontWeight={500} lineHeight="35px" color="text8">
                To be eligible or not to be eligible...
            </Text>
        </span>
    </ClaimBox>

    )
}

type IStatus = {
    checkStatus: () => void;
}

export const BoxCheckEligibility: React.FC<IStatus> = ({checkStatus}) => {

    return (
        <ClaimBox>
        <span style={{display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "20px"}}>
            <Text fontSize={28} fontWeight={700} lineHeight="33px" color="text10">
                Claim wagmiPNG
            </Text>
            <StyledLogo src={WgmLogo} size={"50px"}/>
        </span>
        <Separator />
        <span style={{padding: "20px"}}></span>
        <Text fontSize={16} fontWeight={500} lineHeight="18px" color="text10">
            Let's check if you are eligible!
        </Text>
        <span style={{padding: "20px"}}></span>
            <Button variant="primary" color='white' height='46px'>
                <span style={{ whiteSpace: 'nowrap', color: '#000', fontSize: '20px' }} onClick={checkStatus}>CHECK IF ELIGIBLE</span>
            </Button>
        <span style={{textAlign: "center"}}>
            <Text fontSize={14} fontWeight={500} lineHeight="35px" color="text8">
                To be eligible or not to be eligible...
            </Text>
        </span>
    </ClaimBox>

    )
}

type IBuy = {
    buyFTM: () => void;
}
export const BoxBuyFTM: React.FC<IBuy> = ({buyFTM}) => {

    const [selected, setSelected] = useState<number>(0);
    const [button1, setButton1] = useState<any>("outline");
    const [button2, setButton2] = useState<any>("outline");
    const [button3, setButton3] = useState<any>("outline");

    const selectAmount = (amount: number) => {
        setSelected(amount)
        if (amount === 0.1)
        {
            setButton1("primary")
            setButton2("outline")
            setButton3("outline")
        }
        else if (amount === 0.5)
        {
            setButton1("outline")
            setButton2("primary")
            setButton3("outline")
        }
        else if (amount === 1)
        {
            setButton1("outline")
            setButton2("outline")
            setButton3("primary")
        }
    }
    console.log(selected)
    return (
        <ClaimBox>
            <span style={{display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "20px"}}>
                <Text fontSize={28} fontWeight={700} lineHeight="33px" color="text10">
                    You are eligible!
                </Text>
                <StyledLogo src={WgmLogo} size={"50px"}/>
            </span>
            <Separator />
            <Text fontSize={12} fontWeight={500} lineHeight="18px" color="text10" mb="15px">
                You are going to need gas over there. Choose the amount you wish to spend:
            </Text>
            <BoxWrapper>
                <Button variant={button1} color='white' height='39px' borderColor="white" onClick={() => {selectAmount(0.1)}}>
                    <span style={{ whiteSpace: 'nowrap', color: '#000', fontSize: '15px'}}>0.1 AVAX</span>
                </Button>
                <Button variant={button2} color='white' height='39px' borderColor="white" onClick={() => {selectAmount(0.5)}}>
                    <span style={{ whiteSpace: 'nowrap', color: '#000', fontSize: '15px' }}>0.5 AVAX</span>
                </Button>
                <Button variant={button3} color='white' height='39px' borderColor="white" onClick={() => {selectAmount(1)}}>
                    <span style={{ whiteSpace: 'nowrap', color: '#000', fontSize: '15px' }}>1 AVAX</span>
                </Button>
            </BoxWrapper>
            <Button variant="primary" color='white' height='46px' onClick={buyFTM}>
                <span style={{ whiteSpace: 'nowrap', color: '#000', fontSize: '20px' }}>BUY WGM</span>
            </Button>
            <SeparatorEmpty />
            <span style={{textAlign: "center"}}>
            <Button variant="outline" color='white' height='39px' onClick={buyFTM} >
                <span style={{ whiteSpace: 'nowrap', color: '#000', fontSize: '15px' }}>Skip</span>
            </Button>
            </span>
        </ClaimBox>
    )
}

type IChangeChain = {
    changeChain: () => void;
}

export const BoxGoToFTM: React.FC<IChangeChain> = ({changeChain}) => {

    const switchNetworkFantom = async () => {
        changeChain()
    
        try {
        //@ts-ignore
            await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x2B67" }],
            });
        } 
        catch (error) {
            //@ts-ignore
            if (error.code === 4902) {
            try {
                //@ts-ignore
                await ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                    {
                    chainId: "0x2B67",
                    chainName: "WAGMI",
                    rpcUrls: ["https://api.trywagmi.xyz/rpc"],
                    nativeCurrency: {
                        name: "WGM",
                        symbol: "WGM",
                        decimals: 18,
                    },
                    blockExplorerUrls: [""],
                    },
                ],
                });
            } catch (error) {
                //@ts-ignore
                alert(error.message);
            }
            }
        }
    }

    return (
        <ClaimBox>
            <span style={{display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "20px"}}>
                <Text fontSize={28} fontWeight={700} lineHeight="33px" color="text10">
                    You are eligible
                </Text>
                <StyledLogo src={WgmLogo} size={"50px"}/>
            </span>
            <Separator />
            <span style={{padding: "20px"}}></span>
            <Text fontSize={16} fontWeight={500} lineHeight="18px" color="text10">
                Congratulations. You are eligible for the airdrop! Now let's go crosschain!
            </Text>
            <span style={{padding: "20px"}}></span>
            <Button variant="primary" color='white' height='46px' onClick={switchNetworkFantom}>
                <span style={{ whiteSpace: 'nowrap', color: '#000', fontSize: '20px' }}>GO TO WAGMI</span>
            </Button>
            <span style={{textAlign: "center"}}>
                <Text fontSize={14} fontWeight={500} lineHeight="35px" color="text8">
                    To be eligible or not to be eligible...
                </Text>
            </span>
        </ClaimBox>
    )
}

type IclaimPNG = {
    claimPNG: () => void;
    amount?: string
}
export const BoxClaimReward: React.FC<IclaimPNG> = ({claimPNG, amount}) => {

    return (
        <ClaimBox>
            <span style={{display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "20px"}}>
                <Text fontSize={28} fontWeight={700} lineHeight="33px" color="text10">
                    Claim Your Reward
                </Text>
                <StyledLogo src={WgmLogo} size={"50px"}/>
            </span>
            <Separator />
            <span style={{padding: "20px"}}></span>
            <Text fontSize={16} fontWeight={500} lineHeight="18px" color="text10">
                you are eligible for:
            </Text>
            <Text fontSize={22} fontWeight={500} lineHeight="22px" color="text10" textAlign="center">
                { amount }
            </Text>
            <span style={{padding: "20px"}}></span>
            <Button variant="primary" color='white' height='46px' onClick={claimPNG}>
                <span style={{ whiteSpace: 'nowrap', color: '#000', fontSize: '20px' }}>CLAIM</span>
            </Button>
            <span style={{textAlign: "center"}}>
                <Text fontSize={14} fontWeight={500} lineHeight="35px" color="text8">
                    To be eligible or not to be eligible...
                </Text>
            </span>
        </ClaimBox>
    )
}


export const QuestionAnswer = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [visible2, setVisible2] = useState<boolean>(false);
    const [visible3, setVisible3] = useState<boolean>(false);


    return (
        <QuestionBox>
            <span onClick={() => setVisible(!visible)}>
                <span style={{display: "flex", alignItems: "center", gap: "10px"}}>
                { visible ? (
                    <img src={MinusLogo} alt="" />
                ) : (
                    <StyledLogo src={PlusLogo} size={"20px"}/>
                )
                }
                
                <Text fontSize={24} fontWeight={700} lineHeight="36px" color="text10">
                    Is there really a troll on the bridge
                </Text>
                </span>
                { visible ? (
                <Text fontSize={14} fontWeight={500} lineHeight="21px" color="text8">
                Well yes… And no. How it works is, Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Nulla lectus turpis, bibendum in felis vitae, 
                scelerisque dignissim diam. Phasellus porta pulvinar nisi quis mollis. 
                Curabitur dapibus lacus enim, sed aliquam nunc mollis nec. In vel convallis ipsum. 
                Praesent tincidunt nulla in mi iaculis pulvinar. Phasellus risus tortor, 
                sodales eget mattis eget, ultrices ut sem. Nullam eget iaculis nisl, at consectetur dui. 
                Nam finibus felis ac finibus rutrum.
                </Text>
                ) : (<></>)}
                <span style={{padding: "20px"}}></span>
                <Separator />
            </span>
            <span onClick={() => setVisible2(!visible2)}>
                <span style={{display: "flex", alignItems: "center", gap: "10px"}}>
                { visible2 ? (
                    <img src={MinusLogo} alt="" />
                ) : (
                    <StyledLogo src={PlusLogo} size={"20px"}/>
                )
                }
                
                <Text fontSize={24} fontWeight={700} lineHeight="36px" color="text10">
                    Is there really a troll on the bridge
                </Text>
                </span>
                { visible2 ? (
                <Text fontSize={14} fontWeight={500} lineHeight="21px" color="text8">
                Well yes… And no. How it works is, Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Nulla lectus turpis, bibendum in felis vitae, 
                scelerisque dignissim diam. Phasellus porta pulvinar nisi quis mollis. 
                Curabitur dapibus lacus enim, sed aliquam nunc mollis nec. In vel convallis ipsum. 
                Praesent tincidunt nulla in mi iaculis pulvinar. Phasellus risus tortor, 
                sodales eget mattis eget, ultrices ut sem. Nullam eget iaculis nisl, at consectetur dui. 
                Nam finibus felis ac finibus rutrum.
                </Text>
                ) : (<></>)}
                <span style={{padding: "20px"}}></span>
                <Separator />
            </span>
            <span onClick={() => setVisible3(!visible3)}>
                <span style={{display: "flex", alignItems: "center", gap: "10px"}}>
                { visible3 ? (
                    <img src={MinusLogo} alt="" />
                ) : (
                    <StyledLogo src={PlusLogo} size={"20px"}/>
                )
                }
                
                <Text fontSize={24} fontWeight={700} lineHeight="36px" color="text10">
                    Is there really a troll on the bridge
                </Text>
                </span>
                { visible3 ? (
                <Text fontSize={14} fontWeight={500} lineHeight="21px" color="text8">
                Well yes… And no. How it works is, Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Nulla lectus turpis, bibendum in felis vitae, 
                scelerisque dignissim diam. Phasellus porta pulvinar nisi quis mollis. 
                Curabitur dapibus lacus enim, sed aliquam nunc mollis nec. In vel convallis ipsum. 
                Praesent tincidunt nulla in mi iaculis pulvinar. Phasellus risus tortor, 
                sodales eget mattis eget, ultrices ut sem. Nullam eget iaculis nisl, at consectetur dui. 
                Nam finibus felis ac finibus rutrum.
                </Text>
                ) : (<></>)}
                <span style={{padding: "20px"}}></span>
                <Separator />
            </span>
        </QuestionBox>
    )
}
export default [BoxNotConnected, BoxCheckEligibility, BoxBuyFTM, BoxGoToFTM, QuestionBox]