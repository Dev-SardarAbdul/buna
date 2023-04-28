const { ExpertService } = require("../models/expertModel");

const createExpert = async (ctx) => {
  try {
    console.log("expert", ctx.request.body);
    const data = await ExpertService.create(ctx);
    if (data.error) throw data.error;
    ctx.body = {
      response: "success",
      data: data,
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      response: "failure",
      error: error,
    };
  }
};


// const updateArticle = async (ctx) => {
//   try {
//     console.log("updatearticles",    ctx.request.params, ctx.request.body);
//     const id=ctx.request.params.id;
    
//     const data = await ArticleService.update(id,ctx);
//     if (data.error) throw data.error;
//     ctx.body = {
//       response: "success",
//       data: data,
//     };
//   } catch (error) {
//     ctx.status = 500;
//     ctx.body = {
//       response: "failure",
//       error: error,
//     };
//   }
// };

// const deleteArticle = async (ctx) => {
//   try {
//     const id=ctx.request.params;
     
//     const data = await ArticleService.delete(id);
//     if (data.error) throw data.error;
//     ctx.body = {
//       response: "success",
//       data: data,
//     };
//   } catch (error) {
//     ctx.status = 500;
//     ctx.body = {
//       response: "failure",
//       error: error,
//     };
//   }
// };

// const getArticle = async (ctx) => {
//   try {
//     const data = await ArticleService.get();
//     if (data.error) throw data.error;
//     ctx.body = {
//       response: "success",
//       data: data,
//     };
//   } catch (error) {
//     ctx.status = 500;
//     ctx.body = {
//       response: "failure",
//       error: error,
//     };
//   }
// };

module.exports = {
  createExpert,
  // getArticle,
  // deleteArticle,
  // updateArticle
};
