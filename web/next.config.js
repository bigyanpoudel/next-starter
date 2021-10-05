
// module.exports = withBundleAnalyzer({
//   images: {
//     loader: "imgix",
//     path: "https://poshyak-product.s3.amazonaws.com/",
//     domains: ["poshyak-product.s3.amazonaws.com"],
//     deviceSizes: [400, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//   },
// });

//nextjs image optimization
module.exports = ()=> {
    return {
      images: {
        loader: "imgix",
        path: "https://",
        domains:[
          "poshyak-user-files.s3.amazonaws.com",],
        deviceSizes: [400, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      },
    };
 

  
};