const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const create = async (formData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const remove = async (trackId) => {
  try {
    await fetch(`${BASE_URL}/${trackId}`, {
      method: "DELETE",
    });
    const res = await fetch(BASE_URL);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};



const change = async (formData,trackId) => {
  try {
   const res = await fetch(`${BASE_URL}/${trackId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    
    const res2 = await fetch(BASE_URL);
    return res2.json();

  } catch (error) {
    console.log(error);
  }
};


export { index, create ,remove,change};
