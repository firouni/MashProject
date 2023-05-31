import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
    { id: "postId", label: "PostId", minWidth: 170 },
    { id: "id", label: "Id", minWidth: 100 },
    {
        id: "name",
        label: "Name",
        minWidth: 170,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "email",
        label: "Email",
        minWidth: 170,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "body",
        label: "Body",
        minWidth: 170,
        align: "right",
        format: (value) => value.toFixed(2),
    },
];

export default function Posts({posts}) {
    const [page, setPage] = React.useState(0);
    const [postsPerPage, setPostsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
    setPostsPerPage(+event.target.value);
    setPage(0);
    };

    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {posts
                .slice(page * postsPerPage, page * postsPerPage + postsPerPage)
                .map((post) => {
                    return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={post.code}>
                        {columns.map((column) => {
                        const value = post[column.id];
                        return (
                            <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                        );
                        })}
                    </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={posts.length}
            rowsPerPage={postsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
    );
}
