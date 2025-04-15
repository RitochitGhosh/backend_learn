const User = require("../models/user-schema");

async function handleGetAllUsers(req, res) {
  const allUsers = await User.find({});
  return res.json(allUsers);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  return res.json(user);
}

async function handleCreateNewUser(req, res) {
  const body = req.body;
  if (!body.first_name || !body.last_name || !body.email || !body.job_title) {
    return res.status(400).json({ message: "All fields are required..." });
  }

  const resUser = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  res.status(201).json({ message: "success", id: resUser._id });
}

async function handleUpdateUserById(req, res) {
    const updates = req.body;
    const { id } = req.params;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, updates, {
        new: true,
        });

        if (!updatedUser) {
        return res.status(404).json({ message: "User not found." });
        }

        console.log("User updated:", updatedUser);
        res
        .status(200)
        .json({ message: "User updated successfully.", user: updatedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something went wrong." });
    }
}

async function handleDeleteUserById (req, res) {
    const { id } = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
        return res.status(404).json({ message: "User not found." });
        }

        console.log("User deleted:", deletedUser);
        res
        .status(200)
        .json({ message: "User deleted successfully.", user: deletedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something went wrong." });
    }
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleCreateNewUser,
  handleUpdateUserById,
  handleDeleteUserById,
};
