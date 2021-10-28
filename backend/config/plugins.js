module.exports = ({ env }) => ({
  upload: {
    provider: "google-cloud-storage",
    providerOptions: {
      bucketName: "myportfolioandblog.appspot.com",
      publicFiles: true,
      uniform: false,
      basePath: "",
      serviceAccount: env.json("GCP_SERVICE_ACCOUNT"),
    },
  },
});
