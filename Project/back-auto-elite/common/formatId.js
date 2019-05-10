formatId = id => {
    return id.length < 2 ? '0' + id : id; 
};

module.exports = formatId;