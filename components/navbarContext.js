import React from "react";
import axios from "axios";
import * as Sentry from "@sentry/nextjs";

const NavbarContext = React.createContext({
  user: "",
  getAudience: (id) => {},
  getAudiences: () => {},
  getCampaigns: () => {},
  getCustomerServices: () => {},
  getProducts: () => {},
  login: (email, password) => {},
  auth: () => {},
});

function useNavbar() {
  const [state, setState] = React.useState({
    user: "",
    audiences: [],
  });

  const auth = async () => {
    const basicUrl =
      process.env.NEXT_PUBLIC_QORE_ENDPOINT +
      process.env.NEXT_PUBLIC_PROJECT_ID;
    const Bearer = `Bearer ${localStorage.getItem("token")}`;
    const headers = { authorization: Bearer };

    try {
      const data = await axios.get(`${basicUrl}/me`, { headers });
      const rowId = data.data.data.id
      setState((prev) => ({
        ...prev,
        user: data.data,
      }));
      await logActivity(rowId)

      return data;
    } catch (error) {
      const errorData = {
        message: error.message
      };
      const errorName = "Error auth"
      const exeption = "Error get /me"
      sendToSentry(errorName, errorData, exeption)
      return error.message;
    }
  };

  const logActivity = async (rowId) => {
    const basicUrl =
      process.env.NEXT_PUBLIC_QORE_ENDPOINT +
      process.env.NEXT_PUBLIC_PROJECT_ID;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    const today = new Date();

    try {
      await axios.patch(`${basicUrl}/allMember/rows/${rowId}`, { lastLogin: today }, { headers: {'x-api-key': apiKey } });
    } catch (error) {
      const errorData = {
        message: error.message
      };
      const errorName = "Error logActivity"
      const exeption = "Error patch /allMember/rows/:rowId"
      sendToSentry(errorName, errorData, exeption)
      return error.message;
    }
  };

  const getAudience = async (id) => {
    const basicUrl =
      process.env.NEXT_PUBLIC_QORE_ENDPOINT +
      process.env.NEXT_PUBLIC_PROJECT_ID;
    const Bearer = `Bearer ${localStorage.getItem("token")}`;
    const url = `${basicUrl}/allDailyAudienceAllocation/rows/${id}`;
    const headers = { authorization: Bearer };

    try {
      const {data} = await axios.get(url, { headers });
      const dataHistories = await getHistories(data.encCif)
      const dataLtv = await getLtv(data.encNik)

      dataHistories.sort(function(a,b){
        return new Date(a.properties_tgl_transaksi) - new Date(b.properties_tgl_transaksi)
      });

      let dataDecrypt = await decryptList([data]);
      data.data = dataDecrypt;
      return {data, dataHistories, dataLtv};
    } catch (error) {
      const errorData = {
        id,
        message: error.message
      };
      const errorName = "Error getAudience"
      const exeption = "Error get /allDailyAudienceAllocation/rows/:id"
      sendToSentry(errorName, errorData, exeption)
      return error.message;
    }
  };

  const getHistories = async (cif) => {
    const historyUrl = process.env.NEXT_PUBLIC_HISTORY
    try {
      const histories = await axios.post(historyUrl, { cif })
      const dataHistories = histories.data.result
      dataHistories.sort(function(a,b){
        return new Date(a.properties_tgl_transaksi) - new Date(b.properties_tgl_transaksi)
      });
      return dataHistories
    } catch (error) {
      const errorData = {
        cif,
        message: error.message
      };
      const errorName = "Error getHistories"
      const exeption = `Error post ${historyUrl}`
      sendToSentry(errorName, errorData, exeption)
      return error.message;
    }
  };

  const getLtv = async (nik) => {
    const ltvUrl = process.env.NEXT_PUBLIC_LTV
    try {
      const ltv = await axios.post(ltvUrl, { nik })
      const dataLtv = ltv.data.result
      return dataLtv
    } catch (error) {
      const errorData = {
        nik,
        message: error.message
      };
      const errorName = "Error getLtv"
      const exeption = `Error post ${ltvUrl}`
      sendToSentry(errorName, errorData, exeption)
      return error.message;
    }
  };

  const getAudiences = async () => {
    const basicUrl =
      process.env.NEXT_PUBLIC_QORE_ENDPOINT +
      process.env.NEXT_PUBLIC_PROJECT_ID;
    const Bearer = `Bearer ${localStorage.getItem("token")}`;
    const url = `${basicUrl}/filteredAudiences/rows?limit=10&offset=0&$order=asc`;
    const headers = { authorization: Bearer };

    try {
      const data = await axios.get(url, { headers });
      if (data.data.nodes.length > 0) {
        let dataDecrypt = await decryptList(data.data.nodes);
        data.data.nodes = dataDecrypt;
      }

      return data;
    } catch (error) {
      const errorData = {
        message: error.message
      };
      const errorName = "Error getAudiences"
      const exeption = "Error get /filteredAudiences/rows?limit=10&offset=0&$order=asc"
      sendToSentry(errorName, errorData, exeption)
      return error.message;
    }
  };

  const login = async (email, password) => {
    const basicUrl =
      process.env.NEXT_PUBLIC_QORE_ENDPOINT +
      process.env.NEXT_PUBLIC_PROJECT_ID;
    const url = `${basicUrl}/authenticate/password`;
    const body = {
      identifier: email,
      password: password,
    };
    try {
      const data = await axios.post(url, body);
      return data;
    } catch (error) {
      if (error.message === 'Request failed with status code 400' || error.message === 'Request failed with status code 401'){
        error.error = 'Invalid Email or Password'
      } else {
        error.error = 'Something went wrong please try again'
        const errorData = {
          email,
          message: error.message
        };
        const errorName = "Error login"
        const exeption = "Error POST /authenticate/password"
        sendToSentry(errorName, errorData, exeption)
      }
      
      return error
    }
  };

  const sendToSentry = async (errorName, errorData, exeption) => {
    Sentry.setContext(errorName, errorData)
    Sentry.captureException(exeption)
  }

  const decryptList = async (payload) => {
    let arrData = [];
    let arrResult = [];
    let keys = Object.keys(payload[0]);
    for (let i = 0; i < payload.length; i++) {
      for (const key in payload[i]) {
        if (payload[i][key]) {
          arrData.push(payload[i][key]);
        } else {
          arrData.push("-");
        }
      }
    }
    const url = process.env.NEXT_PUBLIC_DECRYPT;
    const body = { data: arrData };

    try {
      const data = await axios.post(url, body);
      let list = data.data.result;
      for (let i = 0; i < list.length; i++) {
        let obj = {};
        keys.map((key, j) => {
          obj[key] = list[i];
          i++;
        });
        arrResult.push(obj);
        i -= 1;
      }
      setState((prev) => ({ ...prev, audiences: arrResult }));
      return arrResult;
    } catch (error) {
      const errorData = {
        body,
        message: error.message
      };
      Sentry.setContext("Error decryptList", errorData)
      Sentry.captureException(`Error post ${url}`)
      return error.message;
    }
  };

  return {
    user: state.user,
    getAudience,
    getAudiences,
    login,
    auth,
  };
}

export const useNavbarContext = () => {
  return React.useContext(NavbarContext);
};

export const NavbarContextProvider = (props) => {
  const navbarStore = useNavbar();
  const { Provider } = NavbarContext;
  return <Provider value={{ ...navbarStore }}>{props.children}</Provider>;
};

