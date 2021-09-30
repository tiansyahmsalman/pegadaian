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
    const url = `${basicUrl}/allDailyAudienceAllocation/rows?limit=50&offset=0&$order=asc&createdAt=2021-09-27T05:19:46.095Z`;
    const headers = { authorization: Bearer };

    try {
      const data = await axios.get(url, { headers });
      if (process.env.NEXT_PUBLIC_NODE_ENV === 'production') {
        let dataDecrypt = await decryptList(data.data.nodes)
        data.data.nodes = dataDecrypt
        return data;
      }
      return data;
    } catch (error) {
      return error.message;
    }
  };

  // const getCampaigns = async () => {
  //   const basicUrl =
  //     process.env.NEXT_PUBLIC_QORE_ENDPOINT +
  //     process.env.NEXT_PUBLIC_PROJECT_ID;
  //   const Bearer = `Bearer ${localStorage.getItem("token")}`;
  //   const url = `${basicUrl}/campaignsWithAudienceFilter/rows?limit=50&offset=0&$order=asc`;
  //   const headers = { authorization: Bearer };

  //   try {
  //     const data = await axios.get(url, { headers });
  //     return data;
  //   } catch (error) {
  //     return error.message;
  //   }
  // };

  // const getCustomerServices = async () => {
  //   const basicUrl =
  //     process.env.NEXT_PUBLIC_QORE_ENDPOINT +
  //     process.env.NEXT_PUBLIC_PROJECT_ID;
  //   const Bearer = `Bearer ${localStorage.getItem("token")}`;
  //   const url = `${basicUrl}/customerServicesWithAudiences/rows?limit=50&offset=0&$order=asc`;
  //   const headers = { authorization: Bearer };

  //   try {
  //     const data = await axios.get(url, { headers });
  //     return data;
  //   } catch (error) {
  //     return error.message;
  //   }
  // };

  // const getProducts = async () => {
  //   const basicUrl =
  //     process.env.NEXT_PUBLIC_QORE_ENDPOINT +
  //     process.env.NEXT_PUBLIC_PROJECT_ID;
  //   const Bearer = `Bearer ${localStorage.getItem("token")}`;
  //   const url = `${basicUrl}/productWithAudienceFilter/rows?limit=50&offset=0&$order=asc`;
  //   const headers = { authorization: Bearer };

  //   try {
  //     const data = await axios.get(url, { headers });
  //     return data;
  //   } catch (error) {
  //     return error.message;
  //   }
  // };

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
    let arrData = []
    let arrResult = []
    for (let i = 0; i < payload.length; i++) {
      arrData.push(payload[i].id,payload[i].encNama, payload[i].encNoHandphone, payload[i].listProductRecommendation, payload[i].listHistoryProducts)
    }
    const url = process.env.NEXT_PUBLIC_DECRYPT
    const body = {"data":arrData}

    try {
      const data = await axios.post(url, body);
      let list = data.data.result;
      for (let i = 0; i < list.length; i++) {
        let obj = {
          'id':list[i],
          'encNama':list[i+1],
          'encNoHandphone':list[i+2],
          'listProductRecommendation':list[i+3],
          'listHistoryProducts':list[i+4]
        }
        arrResult.push(obj)
        i +=4
      }
      return arrResult;
    } catch (error) {
      return error.message;
    }
  };

  const decrypt = async (payload) => {
    console.log(payload);
    const url = process.env.NEXT_PUBLIC_DECRYPT
    const body = {"data":[
      "[16]GvqzXlGFNGpCJNX7ZAehuNWS8HxRZnMN/Cg27Qmtn28ZU9mywyk3df05cD645vPXyebG/TCqQBKL/oi9jQXiSUFXibsHZ2/gBSXFMHz3AgTLJlvAZyntOmQKGXOvKBtCy94o5tAiwIQqalZLVUIKndAZyEjLbCLUQX66Gugj4kwsIGDwJDtkgDuNEt4lm9VMbl9ib1k98fj3R8wie4gSwz0rWTE2g+GRXhH9j7I7+WXeYpxh1iolUr0AEOiBxc4JMcDq2I0a3+YTcrP1jmo+BrnWIOA0/qR743vCUYCqufnnkhkj6GRDEmmOOEXdj8o4zaQFMOC62dPwmvcQ8FpEw5A0dALGmlW93OLH9oKAPnExwm+oYx/OZGmd93ifehTEDmvbk2QeVVHi1X9vTF0SkU16emIFAQ3MZf1jibDdMhF7gl4dkISa/ph1O75j2TzmHC6cyY7L4RARMI4QhrdyxksYXMWka1MdbirUvCE7WeRS9mC9IWqQeLYy87+uzsVVlagR7xx2iOpmOq05oFRamd4q50mPIz1W66BmbpJjcul8vHnxVoV6PixL/zVv2rlmYTQ/FPyqo0ne2c/XdUt5w2YlNtbcpwPpHFkVE/jiYRlOxPThwrQ+5bya8ykbKdyb/3JBL4KwldhetPj5rZP18i4krTPSUrwO3/aihr/Az0JTdvLpGd7KqpRAqx3BfDRf",
      "[10]1EOnvqyBSZ7j57mBlvG5a3DEdbsXDRGSwpUerpHHZhQjhewFan8HVmWCMy+EHPX4mhDFrSQn4+gGP9M7tX/AulDmfK6HjiW1OocaM9zl6XqXOeplMtVvEufNqiEHHrXmtubgrMxl8FnibdD6SUOzWb+e3dnLq4v8RDXZ24Had34T+IYPBXRyHb3Qn6ss5JanGNf3PHCuB/yQCohHoK/jzY3Nx5t33LNS56/TxA6Nmoa+8fcRZOb1CHabrg6yeIMC0r5m6Wva8yQtDrumqLsoShA1G1MTEK3DyH7Q38/Jnpg2gIFgqlnRQMnSWp3jS3qXg60ObSc1/WHrz7uCGta1EM1lr+XzvH2V4iHgVwUA2Qk=",
      "::"
  ]}
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
    // getCampaigns,
    // getCustomerServices,
    // getProducts,
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
