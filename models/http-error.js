class HttpError extends Error{
    constructor(message, errorCode){
        super(message); //add a message 
        this.code = errorCode;
    }
}

module.exports = HttpError;