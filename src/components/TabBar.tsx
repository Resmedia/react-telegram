import { type FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Link } from '~/components/Link.tsx';
import { Icon } from '~/components/svg/Icon.tsx';

const TabBarArea = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  justify-content: space-around;
  padding: 10px 10px 30px;
  background: #141517;
  border-top: 1px solid #1E1F21;
`;

const Tab = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TabMain = styled(Tab)`
  margin-top: -9px;
`;

const Name = styled.span`
  display: block;
  font-size: 10px;
  margin-top: 3px;
  color: ${({ active }: { active: string }) => active};
`;

const MainName = styled(Name)`
  margin-top: 5px;
`;

/**
 * Render tab
 * @param icon String name of icon
 * @param active String url of active tab
 * @param name String name of tab
 * @param url String url of tab
 * @param selectTab Function to select tab
 * @returns JSX.Element
 */
const renderTab = (
  icon: string,
  active: string,
  name: string,
  url: string,
  selectTab: (name: string) => void,
) => (icon === 'logo' ? (
  <TabMain key={icon} to={url} onClick={() => selectTab(url)}>
    <Icon icon={icon} width="31px" height="31px" fill="#ffffff" active={active === url ? 'var(--tc-gold)' : '#ffffff'} />
    <MainName active={active === url ? 'var(--tc-gold)' : 'var(--tc-gray)'}>{name}</MainName>
  </TabMain>
    ) : (
      <Tab key={icon} to={url} onClick={() => selectTab(url)}>
        <Icon icon={icon} width="24px" height="24px" stroke="var(--tc-gray)" active={active === url ? 'var(--tc-gold)' : 'var(--tc-gray)'} />
        <Name active={active === url ? 'var(--tc-gold)' : 'var(--tc-gray)'}>{name}</Name>
      </Tab>
  ));

export const TabBar: FC = () => {
  const location = useLocation();

  const [active, setActive] = useState<string>('/');

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const selectTab = (tab: string) => setActive(tab);
  const tabs = [
    { icon: 'home', name: 'Home', url: '/' },
    { icon: 'friends', name: 'Friends', url: '/friends' },
    { icon: 'logo', name: 'Task', url: '/tasks' },
    { icon: 'market', name: 'Market', url: '/market' },
    { icon: 'coin-gold', name: 'Airdrop', url: '/airdrop' },
  ];
  return (
    <TabBarArea>
      {tabs.map(({ icon, name, url }) => renderTab(icon, active, name, url, selectTab))}
    </TabBarArea>
  );
};
