const asyncHandler = (func) =>(req, res, next)=>{
    Promise.resolve(func(req, res)).catch((err)=>{
        next(err);
        res.status(err.code || 500).json({
            status: false,
            message: err.message
        })
    })
}

export {asyncHandler};









// const asyncHandler = (func) =>{
//     return async (req, res, next) =>{
//         try{
//             await func(req, res, next);
//         }catch(err){
//             res.status(err.code || 500).json({
//                 status: false,
//                 message: err.message
//             });
//         }
//     }
// }

