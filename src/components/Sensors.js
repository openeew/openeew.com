import React, { useContext } from 'react';
import {
    Grid,
    Row,
    Column,
    Button
} from 'carbon-components-react';
import node3DPrint from '../images/openeew-node-3dprint.jpg';
import nodeBlue from '../images/openeew-node-blue.jpg'
import AppContext from '../context/app';

const Sensors = () => {
    const { t } = useContext(AppContext);

    return (
        <Grid className="info-section">
            <Row className="info-text">
                {/* TODO: Get text from json. */}
                <Column lg={4}><h4>Low-cost sensors</h4></Column>
                <Column lg={8}><h3>Our sensors are low-cost, high-quality seismometers that can deploy with ease to monitor ground motion.</h3></Column>
                <Column lg={4}><Button kind="secondary">Learn more</Button></Column>
            </Row>
            <Row className="info-media">
                <Column lg={{ span: 6, offset: 4 }}>
                    <img className="sensor-image" src={nodeBlue} alt="A 3D printed sensor"></img>
                </Column>
                <Column lg={6}>
                    <img className="sensor-image" src={node3DPrint} alt="The case for the sensor"></img>
                </Column>
            </Row>
        </Grid>
    )
}

export default Sensors;