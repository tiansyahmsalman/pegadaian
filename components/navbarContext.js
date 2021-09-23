import React from "react";
import axios from "axios";

const NavbarContext = React.createContext({
  updateActiveNavbar: () => {},
  activeNavbar: "",
  auth: () => {},
  getAudience: (id) => {},
  getAudiences: () => {},
  getCampaigns: () => {},
  getCustomerServices: () => {},
  getProducts: () => {},
  login: (email, password) => {},
});

function useNavbar() {
  const [state, setState] = React.useState({
    activeNavbar: "Home",
  });

  const updateActiveNavbar = (prop) => {
    setState((prevState) => ({
      ...prevState,
      activeNavbar: prop,
    }));
  };

  const auth = async () => {
    const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID;
    const Bearer = `Bearer ${localStorage.getItem("token")}`;
    const url = `${basicUrl}/me`;
    const headers = { authorization: Bearer };

    try {
      const data = await axios.get(url, { headers });
      return data;
    } catch (error) {
      return error.message;
    }
  };

  const getAudience = async (id) => {
    const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID;
    const Bearer = `Bearer ${localStorage.getItem("token")}`;
    const url = `${basicUrl}/allAudiences/rows/${id}`;
    const headers = { authorization: Bearer };

    try {
      const data = await axios.get(url, { headers });
      return data;
    } catch (error) {
      return error.message;
    }
  };

  const getAudiences = async () => {
    const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID;
    const Bearer = `Bearer ${localStorage.getItem("token")}`;
    const url = `${basicUrl}/allAudiences/rows?limit=50&offset=0&$order=asc`;
    const headers = { authorization: Bearer };

    try {
      const data = await axios.get(url, { headers });
      return data;
    } catch (error) {
      return error.message;
    }
  };

  const getCampaigns = async () => {
    const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID;
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
    const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID;
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
    const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID;
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
    const basicUrl = process.env.QORE_ENDPOINT + process.env.PROJECT_ID;
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

  return {
    updateActiveNavbar,
    activeNavbar: state.activeNavbar,
    auth,
    getAudience,
    getAudiences,
    getCampaigns,
    getCustomerServices,
    getProducts,
    login
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
