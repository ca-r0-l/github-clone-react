import styled, { css } from 'styled-components';

import { RiGroupLine, RiBuilding4Line, RiMapPin2Line, RiMailLine, RiLinksLine } from 'react-icons/ri';

export const Container = styled.div``;

export const Flex = styled.div`
    display: flex;
    align-items: center;

    > div {
        margin-left: 24px;

        > h1 { 
            font-size: 26px;
            line-height: 1.25;
            color: var(--gray-dark);
            font-weight: 600;
        }

        > h2 {

        }
    }
`;

export const Avatar = styled.img``;

export const Row = styled.div``;

const iconCSS = css`
    width: 16px;
    height: 16px;
    fill: (--icon);
    flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)`${iconCSS}`;

export const Column = styled.div``;

export const CompanyIcon = styled(RiBuilding4Line)`${iconCSS}`;

export const LocationIcon = styled(RiMapPin2Line)`${iconCSS}`;

export const EmailIcon = styled(RiMailLine)`${iconCSS}`;

export const BlogIcon = styled(RiLinksLine)`${iconCSS}`;
