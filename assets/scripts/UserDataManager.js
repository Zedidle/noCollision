const UserDataManager = {
    _userData: {
        chapterLevel: 1,
        carLevel: 40,
        dollar: 0,
    },

    loadUserData() {
        this._userData = JSON.parse(localStorage.getItem("userData"));
    },

    getUserData() {
        return this._userData;
    },

    saveUserData(userData) {
        this._userData = userData;
        localStorage.setItem("userData", JSON.stringify(userData));
    },

    saveUserData2(key, val){
        this._userData[key] = val;
        localStorage.setItem("userData", JSON.stringify(this._userData));
    },
};

module.exports = UserDataManager;