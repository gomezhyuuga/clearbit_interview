import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col, Icon} from 'antd'
import formatMoney from 'accounting-js/lib/formatMoney.js'
import { formatDistance } from 'date-fns'
const TransactionInfo = (props) => {
    const {date, amount} = props;

    return <Row type='flex'>
                <Col span={6}>
                    <Icon type="calendar" style={{marginRight: 8, fontSize: 32, verticalAlign: 'middle'}} />
                    <strong>{formatDistance(new Date(date), new Date(), { addSuffix: true })}</strong>
                </Col>
                <Col span={6}>
                    <Icon type="shopping-cart" style={{marginRight: 8, fontSize: 32, verticalAlign: 'middle'}} />
                    <strong>{formatMoney(amount)}</strong>
                </Col>
            </Row>;
}

TransactionInfo.propTypes = {
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired
}

export default TransactionInfo;