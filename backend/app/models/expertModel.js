const { ExpertProfile } = require("../schemas/expertSchema");

class ExpertContent {
  async create(ctx) {
    try {
      // Create a new article
      console.log("dataaa", ctx.request);
      const {
        title,
        description,
        profileTitle,
        profileDescription,
        status,
        profession,
        address,
        link,
      } = ctx.request.body;

     

      const socialIcon = {
        icon: ctx.req.filename,
        link: link,
      };

      const personalInfo = {
        profileTitle: profileTitle,
        profileDescription: profileDescription,
      };

      const expert = new ExpertProfile({
        title,
        description,
        status,
        profession,
        address,
        socialIcon,
        address,
        personalInfo,
      });

      await expert.save();

      return expert;
    } catch (error) {
      console.log("error", error);
      return { error };
    }
  }

  async get() {
    try {
      const data = await ExpertProfile.find({});
      if (!data) throw "not found";
      return data;
    } catch (error) {
      return false;
    }
  }

  // async update(id, ctx) {
  //   try {
  //     console.log("articlesUpdaa", ctx.request.body, id);
  //     const { name, title, description, tags, featured, non_featured } =
  //       ctx.request.body;

  //     const article = await ExpertProfile.findByIdAndUpdate(
  //       id,
  //       {
  //         name,
  //         title,
  //         description,
  //         images: ctx.files.images?.map((file) => file.filename),
  //         featured,
  //         non_featured,
  //         tags,
  //         video: ctx.files.video?.[0]?.filename,
  //         audio: ctx.files.audio?.[0]?.filename,
  //         files: ctx.files.files?.map((file) => file.filename),
  //       },
  //       { new: true }
  //     );

  //     if (!article) throw "Article not found";

  //     return article;
  //   } catch (error) {
  //     return { error };
  //   }
  // }

  async delete(id) {
    try {
      const data = await ExpertProfile.findById(id);
      if (!data) throw "Article Not Found";
      return data;
    } catch (error) {
      return false;
    }
  }
}
const ExpertService = new ExpertContent();
Object.freeze(ExpertService);

module.exports = {
  ExpertService,
};
