import CryptoJS from "crypto-js";
const ENCRYPTION_KEY = "english-encryption-key";
const Storage = {
  set: async function(key, value) {
    const jsonValue = await JSON.stringify(value);
    const cryptal = await CryptoJS.AES.encrypt(jsonValue, ENCRYPTION_KEY);
    localStorage.setItem(key, cryptal);

    return;
  },
  get: async function(key) {
    const jsonValue = await localStorage.getItem(key);

    try {
      if (!jsonValue) return;

      const bytes = await CryptoJS.AES.decrypt(
        jsonValue.toString(),
        ENCRYPTION_KEY
      );

      if (!bytes) return;

      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (err) {
      localStorage.clear();
    }

    return;
  },
  withoutAsync: function(key) {
    const jsonValue = localStorage.getItem(key);

    try {
      if (!jsonValue) return;

      const bytes = CryptoJS.AES.decrypt(jsonValue.toString(), ENCRYPTION_KEY);

      if (!bytes) return;

      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (err) {
      localStorage.clear();
    }

    return;
  },
  withAsync: async function(key) {
    const jsonValue = await localStorage.getItem(key);

    try {
      if (!jsonValue) return;

      const bytes = CryptoJS.AES.decrypt(jsonValue.toString(), ENCRYPTION_KEY);

      if (!bytes) return;

      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (err) {
      localStorage.clear();
    }

    return;
  },
  setWithExpired: async function(key, data, minutes = 10) {
    const expiredAt = new Date();
    expiredAt.setMinutes(expiredAt.getMinutes() + minutes);

    const jsonData = JSON.stringify({
      data,
      expiredAt: expiredAt.getTime()
    });

    try {
      const cryptal = await CryptoJS.AES.encrypt(jsonData, ENCRYPTION_KEY);

      await localStorage.setItem(key, cryptal);
    } catch (e) {
      /* Alert error */
    }
  },
  getWithExpired: async function(key) {
    try {
      const jsonValue = await localStorage.getItem(key);

      if (jsonValue) {
        const bytes = await CryptoJS.AES.decrypt(
          jsonValue.toString(),
          ENCRYPTION_KEY
        );

        if (!bytes) return;

        const { data, expiredAt } = JSON.parse(
          bytes.toString(CryptoJS.enc.Utf8)
        );

        if (expiredAt > new Date().getTime()) {
          return data;
        }
      }
    } catch (e) {
      /* Alert error */

      return null;
    }
  },
  reset: async function() {
    await localStorage.clear();
  },
  setWithExpired: async function(key, data, minutes = 10) {
    const expiredAt = new Date();
    expiredAt.setMinutes(expiredAt.getMinutes() + minutes);

    const jsonData = JSON.stringify({
      data,
      expiredAt: expiredAt.getTime()
    });

    try {
      const cryptal = await CryptoJS.AES.encrypt(jsonData, ENCRYPTION_KEY);

      await localStorage.setItem(key, cryptal);
    } catch (e) {
      /* Alert error */
    }
  },
  getWithExpired: async function(key) {
    try {
      const jsonValue = await localStorage.getItem(key);

      if (jsonValue) {
        const bytes = await CryptoJS.AES.decrypt(
          jsonValue.toString(),
          ENCRYPTION_KEY
        );

        if (!bytes) return;

        const { data, expiredAt } = JSON.parse(
          bytes.toString(CryptoJS.enc.Utf8)
        );

        if (expiredAt > new Date().getTime()) {
          return data;
        }
      }
    } catch (e) {
      /* Alert error */

      return null;
    }
  }
};

export default Storage;
