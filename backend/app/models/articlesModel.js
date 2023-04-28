const { Article } = require("../schemas/articlesSchema");

class ArticleContent {
  async create(ctx) {
    try {
      // Create a new article
      const { name, title, description, tags, featured, non_featured } =
        ctx.request.body;

      const article = new Article({
        name,
        title,
        description,
        images: ctx.request.files?.images?.map((file) => file.filename),
        featured,
        non_featured,
        tags,
        video: ctx.request.files?.video?.[0]?.filename,
        audio: ctx.request.files?.audio?.[0]?.filename,
        files: ctx.request.files?.files?.map((file) => file.filename),
      });

      await article.save();

      return article;
    } catch (error) {
      console.log("error", error);
      return { error };
    }
  }

  async get() {
    try {
      const data = await Article.find({});
      if (!data) throw "not found";
      return data;
    } catch (error) {
      return false;
    }
  }

  async update(id,ctx) {
    try {
      console.log("articlesUpdaa",ctx.request.body,id)
      const { name, title, description, tags, featured, non_featured } =
        ctx.request.body;
 
      const article = await Article.findByIdAndUpdate(
        id,
        {
          name,
          title,
          description,
          images: ctx.files.images?.map((file) => file.filename),
          featured,
          non_featured,
          tags,
          video: ctx.files.video?.[0]?.filename,
          audio: ctx.files.audio?.[0]?.filename,
          files: ctx.files.files?.map((file) => file.filename),
        },
        { new: true }
      );

      if (!article) throw "Article not found";

      return article;
    } catch (error) {
      return { error };
    }
  }

  async delete(id) {
    try {
      const data = await Article.findById(id);
      if (!data) throw "Article Not Found";
      return data;
    } catch (error) {
      return false;
    }
  }
}
const ArticleService = new ArticleContent();
Object.freeze(ArticleService);

module.exports = {
  ArticleService,
};
