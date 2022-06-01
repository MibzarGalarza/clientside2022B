function getOffset(currentPage = 1, listPerPage){
    retutn(currentPage - 1)*{listPerPage}
}

function emptyOrRows(rows){
    if(!rows){
        return[];

    }
    return rows;
}

module.exports= {
    getOffset,
    emptyOrRows
}