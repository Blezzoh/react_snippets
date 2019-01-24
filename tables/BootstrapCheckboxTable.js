export default class CheckableTable extends Component{
    constructor(props){
        super(props)
        this.state ={
            selectedRow: -1
        }
    }
    generateRow(row){
        return row.map(
            (rowData, i) =><td key={i}>{rowData}</td>
        )
    }
    render(){
        const data = this.props.data? this.props.data : {}
        const headers = data.headers? data.headers: []
        const rows = data.rows? data.rows : []
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    {
                        headers.map(
                            (header, i)=><th key='i'>{header}</th>
                        )
                    }
                </thead>
                <tbody>
                    {
                        rows.map(
                            (row, i) =>(
                                <tr key={i}>
                                    {this.generateRow(row)}
                                    <td><Form.Check /></td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </Table>
        )
    }
}
