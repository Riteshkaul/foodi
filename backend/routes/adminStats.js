const express = require("express");
const User = require("../models/User");
const Menu = require("../models/Menu");
const Payment = require("../models/Payment");
const router = express.Router();

// get all orders ,users,payments ,menu Item length

router.get("/", async (req, res) => {
  try {
    const users = await User.countDocuments();
    const menuItem = await Menu.countDocuments();
    const orders = await Payment.countDocuments();
    const result = await Payment.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$price",
          },
        },
      },
    ]);
    const revenue = result.length > 0 ? result[0].totalRevenue : 0;
    res.status(200).json({
      users,
      orders,
      menuItem,
      revenue,
    });
  } catch (error) {
    res.status(500).send("Inter Server Error: " + error.message);
  }
});
module.exports = router;
