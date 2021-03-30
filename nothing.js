const promise = new Promise((resolve, reject) => {
  if (something) resolve(whatToResolveWith);
  else reject(whatToErrorOutWith);
});
