const postData = async (url, body) => {
  const data = await fetch(url, {
    method: 'POST',
    body: body,
  });

  return await data.text();
};

const getResources = async url => {
  const data = await fetch(url);

  if (!data.ok) {
    throw new Error(`Couldn't fetch ${url}, status: ${data.status}`);
  }

  return await data.json();
};

export { postData, getResources };
