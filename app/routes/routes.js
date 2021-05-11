module.exports = app => {
    const user = require("../controller/user.controller.js");
    const browser = require("../controller/browser.controller.js");
    const article = require("../controller/article.controller.js");
    const liked = require("../controller/like.controller.js");
    const favorite = require("../controller/favorite.controller.js");
  

    app.put("/user/:login/:password", user.register); //api that register user with specific login and password(register page)

    app.get("/user/:login/:password", user.login); //api that login/checks user forms input(login page)

    app.put("/browser/:name", browser.insert) //api that insert your browser to database for likes

    app.get("/browser", browser.getMax) //api that get the max id of browser

    app.get("/articles", article.getAll) //get all articles 

    app.get("/article/:id", article.getId) //get specific article

    app.get("/articles/:title/:author", article.searchWithout) //search withour sort

    app.get("/articlesWith/:title/:author", article.searchWith) //search with sort of year

    app.get("/articlesWithPop/:title/:author", article.searchWith) //search with sort of popularity

    app.post("/like/:article_id", liked.create) //get count of liked publicatios of specific browser

    app.get("/like/:article_id/:browser_id", liked.check) //get count of liked publicatios of specific browser

    app.get("/like/:article_id", liked.countArticleId) //get count of liked publicatios of specific browser

    app.get("/liked/:browser_id", liked.countId) //get count of liked publicatios of specific browser

    app.get("/likeds/:browser_id", liked.getId) //get all liked publicatios of specific browser

    app.get("/favorites", favorite.getMax) //get popular favorited articles

    app.post("/favorite/:article_id", favorite.create) //get popular favorited articles

    app.get("/favorite/:article_id/:user_id", favorite.check) //get popular favorited articles

    app.get("/favoriteC/:article_id", favorite.countArticle) //get count of favorite publicatios of specific user

    app.get("/favorite/:user_id", favorite.countId) //get count of favorite publicatios of specific user

    app.get("/favorites/:user_id", favorite.getId) //get all favorite publications of specific user





    






  
};