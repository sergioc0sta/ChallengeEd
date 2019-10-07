import React from 'react'
import { Button } from 'reactstrap';

import If from './if'

export default props => (
    <If test={props.hiden}>
        <Button outline color="primary" onClick={props.onClick} ><i  className={'fa fa-'+props.icon}></i></Button>
    </If>
)
