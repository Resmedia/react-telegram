import styled from 'styled-components';

import { Icon } from '~/components/svg/Icon.tsx';

interface BoostWindowProps {
  open: boolean;
  onClose: () => void;
}

const BoostArea = styled.div`
  position: fixed;
  top: 120%;
  left: 0;
  z-index: 10;
  width: 100%;
  height: auto;
  transition: all 300ms ease;
  overflow: hidden;
  &.open {
    top: 20px;
    overflow-y: scroll;
    transition: all 300ms ease;
  }
`;

const ScrollContainer = styled.div`
  background-color: var(--tc-background);
  border-radius: 32px;
  border-top: 1px solid;
  margin: 0 auto -150px;
  top: 10px;
  position: relative;
  padding: 20px 20px 300px;
  z-index: 10;
  width: 100%;
  height: 100%;
  min-height: 100%;
  box-shadow: 0px -4px 13px 0px #F0C606AB;
  border-image-source: var(--tc-gold-gradient);
  transition: all 300ms ease;
`;

const TopArea = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 24px;
  position: relative;
  width: 24px;

  &:before,
  &:after {
    background: var(--tc-gray);
    content: '';
    height: 24px;
    position: absolute;
    top: -1px;
    width: 2px;
  }

  &:before {
    transform: rotate(-45deg);
  }

  &:after {
    transform: rotate(45deg);
  }
`;

const Body = styled.div`
  margin-top: 20px;
`;

const Text = styled.p`
  color: var(--tc-gray);
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
`;

const TotalArea = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Total = styled.span`
  color: white;
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  margin: 0 5px;
`;

const Energy = styled.div`
  margin-top: 20px;
`;

const Amplifiers = styled.div`
  margin-top: 20px;
`;

const Panel = styled.div`
  align-items: center;
  background: var(--tc-panel);
  border-radius: 12px;
  display: flex;
  margin-top: 10px;
  padding: 10px 15px;
`;

const PanelImg = styled.img`
  height: 48px;
  width: 48px;
`;

const PanelContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Name = styled.span`
  color: white;
  font-size: 17px;
  font-weight: 700;
  line-height: 25px;
  text-align: left;
`;

const Description = styled.span`
  color: var(--tc-gray);
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
`;

const IconGold = styled(Icon)`
  margin-right: 5px;
`;

const renderPanel = (image: string, name: string, description: string, point: boolean) => {
  return (
    <Panel>
      <PanelImg src={image} alt={name} />
      <PanelContent>
        <Name>
          {name}
        </Name>
        <Description>
          {point && <IconGold icon="coin-gold" width="16px" height="16px" active={false} />}
          {description}
        </Description>
      </PanelContent>
    </Panel>
  );
};

export const BoostWindow = ({ open, onClose }: BoostWindowProps) => {
  const energy = [
    { image: '/images/battery.png', name: 'Full energy', description: '6/6 available' },
    { image: '/images/rocket.png', name: 'Turbo', description: 'Available' },
  ];
  const amplifiers = [
    { image: '/images/fingerprint.png', name: 'Multitap', description: '2K 2 lvl' },
    { image: '/images/flash.png', name: 'Energy limit', description: '2K 2 lvl' },
  ];
  const energyList = energy.map(
    (item) => renderPanel(item.image, item.name, item.description, false));
  const amplifiersList = amplifiers.map(
    (item) => renderPanel(item.image, item.name, item.description, true));
  return (
    <BoostArea className={open ? 'open' : 'close'}>
      <ScrollContainer>
        <TopArea>
          <CloseButton onClick={onClose} />
          <Title>Boost</Title>
          <div />
        </TopArea>
        <TotalArea>
          <Icon icon="logo" fill="var(--tc-gold)" width="38px" height="38px" active={false} />
          <Total>
            815,357
          </Total>
        </TotalArea>
        <Body>
          <Energy>
            <Text>
              Бесплатные ежедневные усилители
            </Text>
            {energyList}
          </Energy>
          <Amplifiers>
            <Text>
              Усилители
            </Text>
            {amplifiersList}
          </Amplifiers>
        </Body>
      </ScrollContainer>
    </BoostArea>
  );
};
