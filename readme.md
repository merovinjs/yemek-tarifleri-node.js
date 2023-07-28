veri tabanına kayıt için models ,
rotaler içi roots,
root işlemlerini pay etmek için contrpller dosyasına ihtiyaç var,
authenticatin için middelware klasörüne ihtiyaç var
router.get("/getPosts", getPosts);
router.post("/createPosts", createPosts);
router.get("/getDetail/:id", getDetail);
router.patch("/getUpdate/:id", getUpdate);
router.delete("/deletePost/:id", deletePost);
