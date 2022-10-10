function parseError(error) {
    // check type of error
    // if Array -> express validator, take msg and param props from array
    // else if error.name = ValidationError -> Mongoose validation, take error.entries => ([field, e]) => [field, e.message]
    // else, process regular error, take message prop
    // return { messages: [String], fields: Object }

    const result = {
        messages: [],
        fields: {}
    };

    if (error.name == 'ValidationError') {
        for (let [field, e] of Object.entries(error.errors)) {
            result.messages.push(e.message);
            result.fields[field] = field;
        }
    } else if (Array.isArray(error)) {
        result.messages = error.map(e => e.msg);
        result.fields = Object.fromEntries(error.map(e => [e.param, e.param]));
    } else {
        result.messages = error.message.split('\n');
    }

    return result;
}

module.exports = {
    parseError
};