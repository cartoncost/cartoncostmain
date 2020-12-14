import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

const CalculationResult = ({totalGsm,deckle,clength,total,ECT,cartonCost}) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>GSM</Table.HeaderCell>
        <Table.HeaderCell>DECKLE</Table.HeaderCell>
        <Table.HeaderCell>Length</Table.HeaderCell>
        <Table.HeaderCell>Sq Mtr</Table.HeaderCell>
        <Table.HeaderCell>ECT</Table.HeaderCell>
        <Table.HeaderCell>Totalcost</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>{totalGsm}</Table.Cell>
        <Table.Cell>{deckle}</Table.Cell>
        <Table.Cell>{clength}</Table.Cell>
        <Table.Cell>{total}</Table.Cell>
        <Table.Cell>{ECT}</Table.Cell>
        <Table.Cell>{cartonCost}</Table.Cell>
      </Table.Row>

    </Table.Body>
  </Table>
)

export default CalculationResult