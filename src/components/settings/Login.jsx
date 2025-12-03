import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "user@example.com",
    password: "••••••••",
    twoFactorEnabled: true,
    lastLogin: "November 4, 2025 at 10:30 AM",
  });

  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handlePasswordChange = (field, value) => {
    setPasswords({
      ...passwords,
      [field]: value,
    });
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (passwords.new === passwords.confirm) {
      alert("Password changed successfully!");
      setPasswords({ current: "", new: "", confirm: "" });
      setShowChangePassword(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Login & Security
      </h2>

      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-700">Email Address</h3>
            <p className="text-gray-600 mt-2">{loginData.email}</p>
          </div>
          <button className="px-6 py-2 border border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition cursor-pointer">
            Change Email
          </button>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-gray-700">Password</h3>
            <p className="text-gray-600 mt-2">Last changed: 3 months ago</p>
          </div>
          <button
            onClick={() => setShowChangePassword(!showChangePassword)}
            className="px-6 py-2 border border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition cursor-pointer"
          >
            Change Password
          </button>
        </div>

        {showChangePassword && (
          <form
            onSubmit={handleChangePassword}
            className="mt-6 pt-6 border-t border-gray-200"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  value={passwords.current}
                  onChange={(e) =>
                    handlePasswordChange("current", e.target.value)
                  }
                  placeholder="Enter current password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  value={passwords.new}
                  onChange={(e) => handlePasswordChange("new", e.target.value)}
                  placeholder="Enter new password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={passwords.confirm}
                  onChange={(e) =>
                    handlePasswordChange("confirm", e.target.value)
                  }
                  placeholder="Confirm new password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button
                type="submit"
                className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition cursor-pointer"
              >
                Update Password
              </button>
              <button
                type="button"
                onClick={() => setShowChangePassword(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-700">
              Two-Factor Authentication
            </h3>
            <p className="text-gray-600 mt-2">
              {loginData.twoFactorEnabled ? "Enabled" : "Disabled"} - Extra
              security for your account
            </p>
          </div>
          <button className="px-6 py-2 border border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition cursor-pointer">
            {loginData.twoFactorEnabled ? "Disable" : "Enable"}
          </button>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-semibold text-gray-700 mb-4">Last Login</h3>
        <p className="text-gray-600">{loginData.lastLogin}</p>
        <button className="mt-4 text-orange-500 hover:text-orange-600 font-semibold text-sm cursor-pointer">
          View all login activity
        </button>
      </div>
    </div>
  );
};

export default Login;
