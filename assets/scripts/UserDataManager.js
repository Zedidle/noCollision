const UserDataManager = {
    _userData: {
        chapterLevel: 10,
        carLevel: 43,
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
};

module.exports = UserDataManager;