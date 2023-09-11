module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      defaultLimit: 10,
      maxLimit: 20,
      apolloServer: {
        tracing: true,
      },
    },
  },
  email: {
    provider: 'smtp',
    providerOptions: {
      host: 'smtp.gmail.com', //SMTP Host
      port: 465   , //SMTP Port
      secure: true,
      username: 'graphlinks.tech@gmail.com',
      password: 'rdumbgpkyphqobcs',
      rejectUnauthorized: true,
      requireTLS: true,
      connectionTimeout: 1,
    },
    settings: {
      from: 'graphlinks.tech@gmail.com',
      replyTo: 'graphlinks.tech@gmail.com',
    },
  },
});
