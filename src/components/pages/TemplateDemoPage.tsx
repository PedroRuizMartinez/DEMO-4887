import React from 'react';
import { Layout, Typography } from 'antd';
import styled from 'styled-components';
import {
    SiTypescript,
    SiReact,
    SiAntdesign,
    SiStyledcomponents,
    SiReactrouter,
    SiStorybook,
    SiPrettier,
} from 'react-icons/si';
import { GrCloud } from 'react-icons/gr';

const { Content } = Layout;
const { Title, Paragraph, Link: AntLink } = Typography;

const StyledContent = styled(Content)`
    padding: 24px;
    background-color: #f0f2f5;
`;

const StyledTitle = styled(Title)`
    margin-bottom: 24px;
    font-size: 24px; /* Tamaño del título más grande */
`;

const TechnologiesList = styled.ul`
    list-style-type: none;
`;

const ListItem = styled.li`
    margin-bottom: 12px;
`;

const TechnologyLink = styled(AntLink)`
    font-weight: bold;
    margin-left: 10px;
    font-size: 16px;
`;

const TechnologyIcon = styled.span`
    margin-right: 10px;
    font-size: 20px;
`;

const technologies = [
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/', icon: <SiTypescript /> },
    { name: 'React', url: 'https://reactjs.org/', icon: <SiReact /> },
    { name: 'Ant Design', url: 'https://ant.design/', icon: <SiAntdesign /> },
    {
        name: 'styled-components',
        url: 'https://styled-components.com/',
        icon: <SiStyledcomponents />,
    },
    { name: 'React-Router', url: 'https://reactrouter.com/', icon: <SiReactrouter /> },
    { name: 'Storybook', url: 'https://storybook.js.org/', icon: <SiStorybook /> },
    { name: 'Prettier', url: 'https://prettier.io/', icon: <SiPrettier /> },
    {
        name: 'openapi-codegen-cli',
        url: 'https://github.com/OpenAPITools/openapi-generator-cli',
        icon: <GrCloud />,
    },
];

const TemplateDemoPage: React.FC = () => {
    return (
        <Layout>
            <StyledContent>
                <StyledTitle level={1}>Contact Users</StyledTitle>
                <Paragraph style={{ fontSize: '16px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum nisl
                    vitae ultrices aliquam. Phasellus ut neque ut arcu convallis vestibulum sed nec
                    urna. Aenean quis dictum magna.
                </Paragraph>
                <StyledTitle level={2}>Tecnologías</StyledTitle>
                <TechnologiesList>
                    {technologies.map((tech, index) => (
                        <ListItem key={index}>
                            <TechnologyIcon>{tech.icon}</TechnologyIcon>
                            <TechnologyLink href={tech.url} target='_blank'>
                                {tech.name}
                            </TechnologyLink>
                        </ListItem>
                    ))}
                </TechnologiesList>
            </StyledContent>
        </Layout>
    );
};

export default TemplateDemoPage;
