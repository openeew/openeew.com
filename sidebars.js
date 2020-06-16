module.exports = {
  someSidebar: {
    OpenEEW: ["introduction", "contributing"],
    "Getting Started": ["read-first", "requirements"],
    Sensors: [
      "deployment",
      "install-sensor",
      "provision-sensor",
      "update-firmware",
    ],
    Detection: ["deploy-detection", "multi-station"],
    Monitor: ["create-dashboard"],
    Alarms: ["build-app", "build-alarm", "notify-3rd"],
    Advanced: [
      "build-sensor",
      "machine-learning",
      "intensity-prediction",
      {
        "Develop your own algorithm": ["historic-data", "analyze-historic"],
      },
    ],
  },
};
