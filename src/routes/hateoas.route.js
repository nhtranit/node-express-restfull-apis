let router = require("express").Router();

router.get("/user/111", (req, res, next) => {
  res.json({
    status: "success",
    data: {
      userId: 111,
      name: "nhtran",
      links: {
        feed_url: "http://localhost:3000/hateoas/feed/111"
      }
    }
  });
});

router.get("/feed/111", (req, res, next) => {
  res.json({
    status: "200",
    data: {
      id: 1,
      title: "Hello ae",
      links: {
        likes: "http://localhost:3000/hateoas/likes/1"
      }
    }
  });
});

module.exports = router;
