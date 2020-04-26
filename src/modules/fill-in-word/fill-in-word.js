import React from 'react';
import { Divider, Col, Input } from 'antd';
import { Typography, Row } from 'antd';
import './styles.css';

const { Title } = Typography;
const styles = {
  row: {
    display: 'flex',
    alignItems: 'center',
    lineHeight: 4
  },
  col: {
    maxWidth: 1024,
    margin: 'auto'
  }
};

const Gap = (verb) => (
  <>
    <Input />
    {verb ? <span>{`(${verb})`} </span> : null}
  </>
);

const FillInWord = () => {
  return (
    <Col style={styles.col}>
      <Row>
        <Col span={24}>
          <Title level={3}>Lottogewinn</Title>
          <Title level={4}>Ergänzen Sie die Verben im Konjuktiv II.</Title>
        </Col>
      </Row>
      <Row style={styles.row}>
        Wenn ich im Lotto <Input value="gewinnen würde" /> {Gap('gewinnen')}, ich mir ein schönes,
        großes Haus am Meer {Gap('kaufen')}. Natürlich {Gap('haben')} ich dann auch Hausangestellte,
        sodass ich nichts mehr im Haushalt {Gap('machen müsste')}. Ich {Gap('können')} den ganzen
        Tag auf der Terrasse {Gap('liegen')}! Ich
        {Gap('haben')} natürlich auch ein neues, schönes Auto. Damit {Gap()} ich abends immer am
        Strand entlang {Gap('fahren')}. Dort {Gap()} ich meine Freunde {Gap('treffen')} und sie in
        die besten Bars {Gap('einladen')}. Ach, {Gap()} das schön, wenn ich im Lotto {Gap()}
        {Gap('gewinnen')}!
      </Row>
    </Col>
  );
};

export default FillInWord;
