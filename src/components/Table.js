import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function BasicTable(props) {
    
    const rows = props.rows
    console.log(rows)
    return (
    <TableContainer component={Paper}>
        <Table aria-label="simple table">
        <TableHead>
            <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Plan Name</TableCell>
            <TableCell align="right">Price</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row, i) => {
                console.log(row)
                const address = `${row.address_1} ${row.address_2}, ${row.city}, ${row.state} ${row.postal_code}`
                const subscriptionData = row.subscription[0]
                const price = `$${(parseInt(subscriptionData.price) / 100).toString()}`
                
                return (
            <TableRow key={i}>
                <TableCell width="10%" align="right">{row.id}</TableCell>
                <TableCell align="right">{row.last_name}</TableCell>
                <TableCell align="right">{row.first_name}</TableCell>
                <TableCell align="right">{address}</TableCell>
                <TableCell align="right">{subscriptionData.plan_name}</TableCell>
                <TableCell align="right">{price}</TableCell>
            </TableRow>
            )})}
        </TableBody>
        </Table>
    </TableContainer>
    );
    }