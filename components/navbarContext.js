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
    try {
      const data = await axios.get(url, { headers });
      setState((prev) => ({
        ...prev,
        user: data.data,
      }));
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
    const url = `${basicUrl}/allDailyAudienceAllocation/rows?limit=50&offset=0&$order=asc`;
    const headers = { authorization: Bearer };

    try {
      const data = await axios.get(url, { headers });
      return data;
    } catch (error) {
      return error.message;
    }
  };

  const getCampaigns = async () => {
    const basicUrl =
      process.env.NEXT_PUBLIC_QORE_ENDPOINT +
      process.env.NEXT_PUBLIC_PROJECT_ID;
    const Bearer = `Bearer ${localStorage.getItem("token")}`;
    const url = `${basicUrl}/campaignsWithAudienceFilter/rows?limit=50&offset=0&$order=asc`;
    const headers = { authorization: Bearer };

    try {
      const data = await axios.get(url, { headers });
      return data;
    } catch (error) {
      return error.message;
    }
  };

  const getCustomerServices = async () => {
    const basicUrl =
      process.env.NEXT_PUBLIC_QORE_ENDPOINT +
      process.env.NEXT_PUBLIC_PROJECT_ID;
    const Bearer = `Bearer ${localStorage.getItem("token")}`;
    const url = `${basicUrl}/customerServicesWithAudiences/rows?limit=50&offset=0&$order=asc`;
    const headers = { authorization: Bearer };

    try {
      const data = await axios.get(url, { headers });
      return data;
    } catch (error) {
      return error.message;
    }
  };

  const getProducts = async () => {
    const basicUrl =
      process.env.NEXT_PUBLIC_QORE_ENDPOINT +
      process.env.NEXT_PUBLIC_PROJECT_ID;
    const Bearer = `Bearer ${localStorage.getItem("token")}`;
    const url = `${basicUrl}/productWithAudienceFilter/rows?limit=50&offset=0&$order=asc`;
    const headers = { authorization: Bearer };

    try {
      const data = await axios.get(url, { headers });
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

  React.useEffect(async () => {
    await auth();
  }, []);

  return {
    user: state.user,
    getAudience,
    getAudiences,
    getCampaigns,
    getCustomerServices,
    getProducts,
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
