Array.prototype.isEmpty = function(){
    return this.length === 0;
}

Array.prototype.isNull = function(){
    return this === null;
}

Array.prototype.isNullOrEmpty = function(){
    return this === null || this.length === 0;
}

Array.prototype.isNumberArray = function(){
    return this.every(element => {
        return typeof element === 'number';
    });
}

export default this;