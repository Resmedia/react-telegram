import { type JSXElementConstructor, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Cookies from 'universal-cookie';

import { Link } from '~/components/Link.tsx';
import { Modal } from '~/components/Modal.tsx';
import { Icon } from '~/components/svg/Icon.tsx';
import { TabBar } from '~/components/TabBar.tsx';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Area = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100%;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 590;
  line-height: 32px;
  letter-spacing: -0.6px;
  text-align: center;
  color: white;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Text = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.4px;
  text-align: center;
  color: var(--tc-gray);
`;

const Active = styled.span`
  color: var(--tc-gold);
  font-weight: 700;
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  margin-top: 20px;
  padding: 12px 16px;
  border: 0;
  border-radius: 12px;
  background: var(--tc-gold-gradient);
  color: var(--tc-background);
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.4px;
  cursor: pointer;
  &:hover, &:focus, &:active {
    background: var(--tc-active);
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: -55px;
  position: relative;
  z-index: 0;
  padding: 20px;
  max-height: 300px;
`;

const Img = styled.img`
  width: 320px;
  height: 320px;
  margin: -55px;
  position: relative;
  z-index: 0;
`;

const AirDrop = styled.div`
  font-size: 32px;
  font-weight: 590;
  line-height: 38.19px;
  text-align: center;
`;

interface MasterProps {
  children: any;
}

export const Master: JSXElementConstructor<any> = ({ children }: MasterProps) => {
  const cookies = new Cookies();

// TODO Remove when airdrop is implemented
  const location = useLocation();
  const navigator = useNavigate();

  const [isShow, setShowModal] = useState<boolean>(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const lastVisit = cookies.get('boost5');
    if (lastVisit) {
      const diff = Date.now() - lastVisit;
      if (diff > 1000 * 60 * 60 * 3) {
        setOpen(true);
      }
    } else {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === '/airdrop') {
      navigator('/', { replace: true });
      // TODO Remove when airdrop is implemented
      setShowModal(true);
    }
  }, [location.pathname]);

  const onClose = () => {
    cookies.set('boost5', Date.now());
    setOpen(false);
  };

  return (
    <Area>
      {children}
      <TabBar />
      <Modal id="airdrop" isOpen={isShow} onClose={() => setShowModal(false)}>
        <ModalContent>
          <Img src="/images/coin-gold.svg" alt="Coin status" />
          <AirDrop>
            Airdrop
          </AirDrop>
          <Text>
            Coming soon
          </Text>
        </ModalContent>
      </Modal>
      <Modal id="boost" onClose={onClose} isOpen={open}>
        <Content>
          <Icon icon="rocket" width="135px" height="135px" active={false} />
          <Title>
            Увеличте вашу
            <br />
            прибыль!
          </Title>
          <Text>
            Перейдите в меню маркет и купите улучшения для увеличения
            {' '}
            вашей прибыли. Зарабатывайте в оффлайн в течении
            {' '}
            <Active>3-х часов</Active>
            .
          </Text>
          <Button to="/market" onClick={onClose}>
            Перейти в маркет
          </Button>
        </Content>
      </Modal>
    </Area>
    );
};
