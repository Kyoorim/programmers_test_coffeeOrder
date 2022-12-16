const BASE_URL =
  "https://h6uc5l8b1g.execute-api.ap-northeast-2.amazonaws.com/dev/products";

const request = async (url) => {
  try {
    const fullUrl = `${BASE_URL}${url}`;
    const res = await fetch(fullUrl);

    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    alert(err);
  }
};

export default request;
