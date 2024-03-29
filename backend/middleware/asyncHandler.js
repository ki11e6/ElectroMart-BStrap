//custom async function error handler.
//if promise resolves next middleware will be executed or catch will handle error
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
