export default {
    red: '#ff0000de',
    blue: '#03a9f4',
    green: '#008000a1',
    duplicate: function(anInValue) {
        return JSON.parse(JSON.stringify(anInValue));
    }
};
