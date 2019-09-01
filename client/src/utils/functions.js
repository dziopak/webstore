export const convertCollections = collections => {
  const result = collections.map(doc => {
    const { name, items, _id } = doc;

    return {
      routeName: encodeURI(name.toLowerCase()),
      id: _id,
      title: name,
      items
    };
  });

  return result.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
