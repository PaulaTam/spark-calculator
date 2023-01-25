import { Tabs, Tab } from 'react-bootstrap';

export const FullPanel = (props) => {
    return (
        <Tabs id="tab-nav" defaultActiveKey="calculator">
                <Tab eventKey="calculator" title="Calculator" >
                    {props.calculator}
                </Tab>
                <Tab eventKey="guide" title="Crystal Guide">
                    {props.guide}
                </Tab>
        </Tabs>
    )
}