// url is relative path
export const fetchData = async (url, method = "GET", body = null) => {
  try {
    const fullUrl = `${process.env.REACT_APP_API_URL}${url}`;
    const token = null;
    const config = {
      method: method,
      headers: {
        token: token ? "Bearer " + token : null,
      },
      body: body ? JSON.stringify(body) : null,
    };

    const res = await fetch(fullUrl, config);
    // console.log(res);
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
