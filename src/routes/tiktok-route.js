const express = require("express");
const tiktokRoute = express.Router();

const authenticate = require("../middlewares/authenticate");
const tiktokController = require("../controllers/tiktok-controller");

tiktokRoute.get("/get-tags-list", tiktokController.getTagsList);
tiktokRoute.post("/list-users-by-tag", tiktokController.listUsersByTag);
tiktokRoute.post("/update-tag-users", tiktokController.updateTagUsers);
tiktokRoute.post("/get-tag-sync-history", tiktokController.getTagSyncHistory);
tiktokRoute.post(
  "/create-tag-sync-history",
  tiktokController.createTagSyncHistory
);
tiktokRoute.post(
  "/list-users-selected-tags",
  tiktokController.listUserBySelectTags
);
// tiktokRoute.get("/get-data-sync", tiktokController.getDataSync);
// tiktokRoute.post("/put-data-sync", tiktokController.putDataSync);
tiktokRoute.post("/update-user-data", tiktokController.updateUserData);
tiktokRoute.post("/update-all-user-data", tiktokController.updateAllUserData);
tiktokRoute.post("/test-tag", tiktokController.testTag);

module.exports = tiktokRoute;
