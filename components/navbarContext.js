import React from "react";
import axios from "axios";

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
    const url = `${basicUrl}/me`;
    const headers = { authorization: Bearer };
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    const today = new Date();

    try {
      const data = await axios.get(url, { headers });
      const rowId = data.data.data.id
      setState((prev) => ({
        ...prev,
        user: data.data,
      }));
      const urlPatch = `${basicUrl}/allMember/rows/${rowId}`
      await axios.patch(urlPatch, { lastLogin: today }, { headers: {'x-api-key': apiKey } });
      
      return data;
    } catch (error) {
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
      const data = await axios.get(url, { headers });
      let dataDecrypt = await decryptList([data.data]);
      data.data = dataDecrypt;
      return data;
    } catch (error) {
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
      return error.message;
    }
  };

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
      return error.message;
    }
  };

  React.useEffect(async () => {
    // await auth();
  }, []);

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
