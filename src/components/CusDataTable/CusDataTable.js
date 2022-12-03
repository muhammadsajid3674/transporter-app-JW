import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { Tooltip } from 'bootstrap';

function CusDataTable(props) {

    const { dataSource, colValue, onClickEditRow, onClickDeleteRow, tableCaption } = props

    return (
        <>
            {colValue && Array.isArray(colValue) && (
                <div style={{ overflowX: 'auto' }}>
                    <table className='table table-sm table-responsive-sm table-bordered mt-3' style={{ fontSize: '0.8rem' }}>
                    <caption>{tableCaption}</caption>
                        <thead>
                            <tr className='table-dark'>
                                <th>#</th>
                                {colValue && colValue.length > 0 ? colValue.map((e, i) => {
                                    return <th scope="col" key={i}>{e.name}</th>
                                }) : null}
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataSource && Array.isArray(dataSource) && dataSource.length > 0 ? (
                                dataSource.map((e, i) => {
                                    return <tr scope='row' key={i}>
                                        <th>{i + 1}</th>
                                        {colValue && colValue.length > 0 ? colValue.map((x, i) => {
                                            return <td key={i}>{e[x.key]}</td>
                                        }) : null}
                                        <td>
                                            <IconButton onClick={onClickDeleteRow}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton onClick={() => onClickEditRow(e)}>
                                                <EditIcon />
                                            </IconButton>
                                        </td>
                                    </tr>
                                })
                            ) : (
                                <h1>Data Not Found</h1>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}

export default CusDataTable