module.exports = {
    generateID: function(length) {
        let result = ""
        let characters = 
        "QWERTYUIOPADSFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbn0123456789"
        let charactersLength = characters.length
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
    },

    generateEmail: function() {
        let values = "abcdefghpolqw123456789"
        let email = ""
        let temp
        for(let i = 0; i < 10; i++) {
            temp = values.charAt(Math.round(values.length * Math.random()))
            email += temp
        }
        temp = ""
        email += "@"
        for(let i = 0; i < 8; i++) {
            temp = values.charAt(Math.round(values.length * Math.random()))
            email += temp
        }
        email += ".com"
        return email
    },
    generateNumbers: function(length) {
        let res = ""
        let characters1 = "1234567890"
        let charactersLength1 = characters1.length
        for (let i=0; i < length; i++) {
            res += characters1.charAt(Math.floor(Math.random() * charactersLength1))
        }
        return res
    }

}