import { type FC, useState } from 'react';
import styled from 'styled-components';

import { Master } from '~/components/Master.tsx';
import { Icon } from '~/components/svg/Icon.tsx';

const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px 20px;
  width: 100%;
`;

const OwnerArea = styled.div`
  display: flex;
  align-items: center;
`;

const OwnerAvatar = styled.div`
  background-image: url(${({ src }: { src: string }) => src});
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 10px;
`;

const OwnerName = styled.span``;

const Button = styled.button`
  width: Hug (101px)px;
  height: Hug (44px)px;
  padding: 12px 16px;
  color: white;
  gap: 4px;
  border-radius: 12px;
  background: var(--tc-panel);
  font-size: 15px;
  font-weight: 590;
  line-height: 20px;
  letter-spacing: -0.4px;
  text-align: left;

`;

const CountersArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 0 10px;
  width: 100%;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 10px;
  background: var(--tc-panel);
  border-radius: 12px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
`;

const Count = styled.span`
  font-size: 20px;
  font-weight: 590;
  line-height: 20px;
  letter-spacing: -0.4px;
  text-align: left;
  margin: 0 5px;
`;

const Name = styled.span`
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.4px;
  text-align: left;
  color: var(--tc-gray);
  margin-top: 5px;
`;

const TotalArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border-radius: 12px;
`;

const Total = styled.span`
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  margin: 0 5px;
`;

const BoostArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0 15px;
  width: 100%;
`;

const CountBoost = styled.div`
  display: flex;
  align-items: center;
`;

const Current = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.4px;
  text-align: left;
  color: white;
`;

const Maximum = styled.span`
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.4px;
  text-align: left;
  color: var(--tc-gray);
`;

const ButtonBoost = styled.button`
  padding: 0;
`;

const CoinStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 276px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  z-index: -1;
`;

const StatusBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  margin-bottom: 100px;
`;

const Label = styled.span`
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.4px;
  text-align: left;
  color: var(--tc-gray);
`;

const Gold = styled.span`
  color: var(--tc-gold);
`;

const TopStatus = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const Bar = styled.div`
  width: 100%;
  height: 16px;
  margin-top: 5px;
  background: var(--tc-panel);
  border-radius: 12px;
`;

const Lvl = styled.span`
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.4px;
  text-align: left;
  color: var(--tc-gray);
  margin-left: 5px;
`;

const Progress = styled.div`
  width: 70%;
  height: 100%;
  background: var(--tc-gold);
  border-radius: 12px;
`;

export const Main: FC = () => {
  const [open, setOpen] = useState<string>('');
  const owner = {
    avatar: 'https://loremflickr.com/60/60',
    name: 'Mike Williamson',
  };
  const openBoostWindow = () => {
    setOpen('boost');
  };
  return (
    <Master openWindow={open} onWindowClose={() => setOpen('')}>
      <TopArea>
        <OwnerArea>
          <OwnerAvatar src={owner.avatar} />
          <OwnerName>{owner.name}</OwnerName>
        </OwnerArea>
        <Button>Join team</Button>
      </TopArea>
      <CountersArea>
        <Panel>
          <Top>
            <Icon icon="coin-gold" width="20px" height="20px" active={false} />
            <Count>
              15,000,000
            </Count>
            <Icon icon="info" width="16px" height="16px" active={false} />
          </Top>
          <Name>Draw</Name>
        </Panel>
        <Panel>
          <Top>
            <Icon icon="coin-gold" width="20px" height="20px" active={false} />
            <Count>
              250K
            </Count>
            <Icon icon="info" width="16px" height="16px" active={false} />
          </Top>
          <Name>Profit per hour</Name>
        </Panel>
      </CountersArea>
      <TotalArea>
        <Icon icon="logo" fill="var(--tc-gold)" width="38px" height="38px" active={false} />
        <Total>
          815,357
        </Total>
      </TotalArea>
      <BoostArea>
        <CountBoost>
          <Icon icon="flash" width="32px" height="32px" active={false} />
          <Current>
            1000
          </Current>
          /
          <Maximum>
            1000
          </Maximum>
        </CountBoost>
        <ButtonBoost onClick={openBoostWindow}>
          <Icon icon="rocket" width="40px" height="40px" active={false} />
        </ButtonBoost>
      </BoostArea>
      <CoinStatus>
        <Img src="/images/coin-gold.svg" alt="Coin status" />
      </CoinStatus>
      <StatusBar>
        <TopStatus>
          <Label>
            Bronze
          </Label>
          <Lvl>
            LVL
            {' '}
            <Gold>1</Gold>
            /10
          </Lvl>
        </TopStatus>
        <Bar>
          <Progress />
        </Bar>
      </StatusBar>
    </Master>
  );
};
